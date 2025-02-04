import { Input, Component, AfterViewInit } from '@angular/core';
import { UserContext } from '../../model/UserContext';
import { MapService } from '../../service/map.service';
import { Change } from 'app/model/ChangesClasses/Change';
import { ChangeType } from 'app/model/ChangesClasses/ChangeType';
import { TranslateService } from '@ngx-translate/core';

declare var ol: any;
declare var config: any;

@Component({
  selector: 'app-changes-detailled-map',
  templateUrl: './changes-detailled-map.component.html',
  styleUrls: ['./changes-detailled-map.component.css']
})
export class ChangesDetailledMapComponent {

  @Input() public userContext: UserContext;
  @Input() public mainChange: Change;
  @Input() public changeTypesList: Array<ChangeType>;

  // Injecter le service de traduction
  constructor(public mapService: MapService, private translate: TranslateService) { }

  // Pour empêcher ngOnChanges avant ngOnInit
  private initialized: boolean = false;

  // paramètres de la carte
  private view: any;
  private map: any;
  public layer: any;

  ngOnInit() {
    this.initMap();
    this.initLayer();
    this.updateMap();
    this.initialized = true;
  }

  ngOnChanges(...args: any[]) {
    if (this.initialized) {
      this.updateMap();
    }
  }

  initMap() {
    let center = [this.userContext.lon, this.userContext.lat];
    this.view = new ol.View({
      projection: config.PROJECTION_CODE,
      center: ol.proj.transform(center, 'EPSG:4326', config.PROJECTION_CODE),
      zoom: this.userContext.z,
      minZoom: 3,
    });

    // Création de la carte
    this.map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        new ol.control.ScaleLine(),
        new ol.control.FullScreen({ tipLabel: "Mode plein-écran" }),
      ]),
      target: 'detailled-map',
      view: this.view,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
          projection: 'EPSG:2056',
          opacity: 0.5
        })
      ]
    });
  }

  updateMap() {
    this.updateLayer();
    var extent = this.layer.getSource().getExtent();
    this.map.getView().fit(extent, { size: this.map.getSize(), maxZoom: 19 });
  }

  public updateLayer(): void {
    let self = this;
    let features = [];
    this.layer.getSource().clear();

    // Récupérer les traductions pour les labels
    this.translate.get(['change_config.new_geometry', 'change_config.old_geometry']).subscribe(translations => {
      const oldGeometryLabel = translations['change_config.old_geometry'];
      const newGeometryLabel = translations['change_config.new_geometry'];

      if (this.mainChange.theGeomOld != null && this.mainChange.changeType != 3) {
        let oldFeature = (new ol.format.GeoJSON()).readFeature(this.mainChange.theGeomOld);
        oldFeature.setStyle(function (feature, resolution) {
          return self.mapService.mainStyleFunction(feature, resolution, false, 6, true);
        });
        oldFeature.set('label', oldGeometryLabel);
        oldFeature.set('color', this.changeTypesList.filter(x => x.id === 6)[0].relatedColor.getRGBA());
        features.push(oldFeature);
      }

      if (this.mainChange.theGeomNew != null) {
        self = this;
        let changeId = (self.mainChange.changeType == 3) ? 3 : 1;
        let newFeature = (new ol.format.GeoJSON()).readFeature(this.mainChange.theGeomNew);
        newFeature.setStyle(function (feature, resolution) {
          return self.mapService.mainStyleFunction(feature, resolution, false, changeId, true);
        });
        features.push(newFeature);
        newFeature.set('color', this.changeTypesList.filter(x => x.id === changeId)[0].relatedColor.getRGBA());
        newFeature.set('label', (changeId == 3) ? this.translate.instant('change_config.geometry') : newGeometryLabel);
      }

      this.layer.getSource().addFeatures(features);
    });
  }

  public initLayer() {
    this.layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        attributions: [
          new ol.Attribution({
            html: '' +
              '<a href="https://ch-osm.geodatasolutions.ch/">© GeoDataSolutions</a>'
          })
        ]
      }),
    });
    this.map.addLayer(this.layer);
  }
}
