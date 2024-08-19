import { Input, Component, OnInit } from '@angular/core';
import { UserContext } from '../../model/UserContext';
import { UserContextService } from '../../service/user-context.service';
import { MapService } from '../../service/map.service';
import { ConfigService } from 'app/service/config.service';
import { ApiRequestService } from 'app/service/api-request.service';
import { ChangeType } from 'app/model/ChangesClasses/ChangeType';
import { HttpClient } from '@angular/common/http';

declare var ol: any;
declare var $: any;
declare var config: any;

@Component({
  selector: 'app-changes-map',
  templateUrl: './changes-map.component.html',
  styleUrls: ['./changes-map.component.css']
})
export class ChangesMapComponent implements OnInit {

  @Input() public change : any;
  @Input('userContext') userContext: UserContext;

  private view: any;
  public map: any;
  public layersArray : any;
  public layerswitcherdisplay : boolean = true;
  private changeTypesList : Array<ChangeType>;
  public selectedFeatures : Array<any>;
  private mapFeatureSelectedInteractionOnClick : any;

  constructor(
    public http: HttpClient,
    public mapService: MapService,
    public userContextService : UserContextService,
    public configService : ConfigService,
    public apiRequestService : ApiRequestService
  ) {   
    $("#selectAll").click(function(){
      $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
    }); 
  }

  // map parameters


  ngOnInit() {
    console.log("Init Map!");
    this.initMap();
  }

  initMap(){
    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: function (coords) {
        return ol.coordinate.format(coords, 'Lat : {y}° Lon : {x}° (WGS84)', 4)
      },
      projection: 'EPSG:4326',
      className: 'custom-mouse-position-2',
      target: document.getElementById('mouse-position-2'),
      undefinedHTML: '&nbsp;'
    });

    let center: number[] = this.userContext ? [this.userContext.lon - 1, this.userContext.lat] : [0, 0];

    this.view = new ol.View({
      projection: config.PROJECTION_CODE,
      center: ol.proj.transform(center, 'EPSG:4326', config.PROJECTION_CODE),
      zoom: this.userContext.z,
      minZoom: 3,
      //minZoom: 6,
    })
    
    //Map creation
    this.map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        mousePositionControl,
        new ol.control.ScaleLine(),
      ]),
      target: 'map',
      view: this.view,
    });

    this.mapService.setMap(this.map, this.userContext);

    this.apiRequestService.searchChangeTypes().subscribe(
      data => {
        this.changeTypesList = data.map(element => {
          const changeType = new ChangeType(element);
          
          // Mapping the short_name to a translation key
          changeType.short_name = this.getTranslationKeyForChangeType(changeType.short_name);
          
          return changeType;
        });
        this.changeTypesList.sort((a, b) => a.id - b.id);
        console.log(this.changeTypesList);
        this.mapService.initLayers(this.changeTypesList);
        this.mapService.initHeatMap();
        this.mapService.initInteractions();
        this.layersArray = this.mapService.changesLayersArray;
      },
      error => {
        console.error('Error fetching change types', error);
      }
    );


    //// Pour ajouter de la surbrillance au passage de la souris et au clic sur un objet
    //// Désactivé car ralentit très fortement lorsqu'il y a beaucoup d'objets (> 500)
    var self = this;
    // var selectPointerMove = new ol.interaction.Select({
    //   condition: ol.events.condition.pointerMove,
    //   style : function(feature,resolution){
    //     return self.mapService.mainStyleFunction(feature, resolution, true);},
    //   hitTolerance : 2,
    //   filter: function(feature, layer){return self.heatMapFilter (layer);}
    // })
    // this.map.addInteraction(selectPointerMove);

    // Au passage de la souris, change le curseur
    this.map.on('pointermove', this.onPointerMove.bind(this));
    // Au clic sur un objet
    this.map.on('click', this.onClick.bind(this));
      
  }

  public onPointerMove(e) {
    if (e.dragging) return;
       
    var pixel = this.map.getEventPixel(e.originalEvent);
    var hit = this.map.hasFeatureAtPixel(pixel, { hitTolerance: 2, layerFilter: this.mapService.heatMapFilter });
       
    this.map.getTargetElement().style.cursor = hit ? 'pointer' : '';
  }

  public onClick(event){
    this.mapService.clearSelection();
    this.selectedFeatures = new Array<any>();
    var pixel = this.map.getEventPixel(event.originalEvent);
    var hit = this.map.hasFeatureAtPixel(pixel, {hitTolerance:2, layerFilter : this.mapService.heatMapFilter});
    if (hit){
      this.selectedFeatures = this.map.getFeaturesAtPixel(pixel, {hitTolerance:2, layerFilter : this.mapService.heatMapFilter});
      console.log(this.selectedFeatures);
    }
  }

  // Actions pour la légende //
  public onSelect(id){
    let elem = document.getElementById(id) as HTMLInputElement;
    let isChecked = elem.checked;
    if (id != "heatMap"){
      var layer = this.mapService.changesLayersArray.filter(x => x.get('id') === Number(id))[0];
      layer.setVisible(isChecked);
      this.mapService.refreshHeatMap();
    } 
    else {
      this.mapService.heatMapLayer.setVisible(isChecked);
    }
  }

  public onSelectAll(event){
    let isChecked = event.target.checked;
    let checkboxes = document.getElementsByName("layer") as NodeListOf<HTMLInputElement>;
    Array.from(checkboxes).forEach(checkbox => {
      if (checkbox.checked != isChecked){
        checkbox.checked = isChecked;
        this.onSelect(checkbox.id);
      }
    })
  }

  // Recherche de lieux //
  onCitySelected(city) {

    if (city.geometry) {
      // on calcule le zoom pour l'adapter au résultat de la recherche en fonction du type d'objet trouvé :
      // type : (housenumber | street  | locality | municipality)
      var zoomlevel = 14;
      var type = city.properties.type;
      if (type == 'housenumber') {
        zoomlevel = 19;
      } else if (type == 'street') {
        zoomlevel = 16;
      } else if (type == 'locality') {
        zoomlevel = 16;
      } else if (type == 'municipality') {
        zoomlevel = 14;
      };
      // On fait le zoom
      this.zoomTo(city.geometry.coordinates, zoomlevel);
    }
  }

  zoomTo(location, zoomlevel) {
    this.map.getView().setCenter(ol.proj.transform(location, 'EPSG:4326', config.PROJECTION_CODE), 16);
    this.map.getView().setZoom(zoomlevel);
  }

  getTranslationKeyForChangeType(shortName: string): string {
    const translationMap = {
      'Création': 'change_config.create',
      'Ajout': 'change_config.add',
      'Modif. de tag(s) uniq.': 'change_config.modif_tag',
      'Modif. de géométrie uniq.': 'change_config.modif_geo',
      'Modif. de tag(s) et de géométrie': 'change_config.tagandgeo',
      'Retrait': 'change_config.remove',
      'Suppression': 'change_config.delete',
      'Autre': 'change_config.other'
    };
  
    return translationMap[shortName] || shortName;
  }
  

}
