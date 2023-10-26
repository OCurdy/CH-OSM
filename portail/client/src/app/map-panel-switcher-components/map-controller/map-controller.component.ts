import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MapService } from '../../service/map.service';
import { UserContext } from '../../model/UserContext';

declare var $: any;

@Component({
  selector: 'app-map-controller',
  templateUrl: './map-controller.component.html',
  styleUrls: ['./map-controller.component.css']
})
export class MapControllerComponent implements AfterViewInit {

  public baseLayerOpacityRange;
  @Input('userContext') 
  public userContext: UserContext;

  constructor(
    public mapService: MapService
  ) { 
    this.mapService.getAnnounceOpacityChangeEventEmitter().subscribe(
      newOpacity=>{
        //console.log(newSelectedLayer)
        this.baseLayerOpacityRange=newOpacity;
      }
    );
  }
  
  ngOnInit() {
    //récupère le baseLayer du userContext
    $('option[value='+this.userContext.bLay+']').attr('selected', 'selected');
    this.baseLayerOpacityRange = this.userContext.tr;
    this.setActiveBaseLayer(this.mapService.currentBaseLayerName);
    }

    setActiveBaseLayer(layer: string) {
        switch (layer) {
            case 'OSM':
                $('#osmRadio').prop('checked', true);
                break;
            case 'swisstopo':
                $('#swisstopoRadio').prop('checked', true);
                break;
            case 'swissimage':
                $('#swissimageRadio').prop('checked', true);
                break;
            default:
                console.error('Unknown base layer:', layer);
        }
  }

  ngAfterViewInit() {
    this.fixInputRangeHeight();
  }

  fixInputRangeHeight(){//compatibilité IE11
    //la hauteur du champ input contenant le texte "Transparence" est pris comme référence par les deux inputs voisins (layer-selector et opacity-range)
    var inputRangeHeightRef = (<HTMLElement>document.getElementById('input-range-height-ref')).offsetHeight;
    //console.log (inputRangeHeightRef);
    (<HTMLElement>document.getElementById('input-range')).style.height= inputRangeHeightRef+'px';
    (<HTMLElement>document.getElementById('layer-selector')).style.height= inputRangeHeightRef+'px';
  }

  toggleLayer(event: any) {
    const layerName = event.target.value;
    const isChecked = event.target.checked;

    this.mapService.toggleOverlayLayer(layerName, isChecked);
}


  changeBaseLayer(newBaseLayer){
    this.mapService.changeBaseLayer(newBaseLayer);
  }

  changeOpacity(newValue){
    this.mapService.changeOpacity(newValue);
  }
}
