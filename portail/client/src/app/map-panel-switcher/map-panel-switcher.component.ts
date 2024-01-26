import { Component, HostListener, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MapService } from '../service/map.service';
import { Router } from '@angular/router';
import { UserContext } from '../model/UserContext';
import {TranslateService} from '@ngx-translate/core';


declare var $: any;
declare var _paq: any;

@Component({
  selector: 'app-map-panel-switcher',
  templateUrl: './map-panel-switcher.component.html',
  styleUrls: ['./map-panel-switcher.component.css']
})
export class MapPanelSwitcherComponent implements OnInit {
  public isPanelOpen: boolean = false;
  public isCollapseOpen: boolean = false;
  public isMapControllerCollapsed: boolean = true;
  isLegendCollapsed = true;

  
  public panelToShow = 'layerTree';                       //par défaut on charge le panel Menu

  @Input('userContext') 
  public userContext: UserContext;

  // As soon we close the panel, we want the startup dialog to hide. But for
  // some reason (side effect of Angular's rerender on Bootstrap's popover?),
  // the DOM element for the dialog is created again when one clicks on the
  // close panel button. Thus we use a local variable that we check every time
  // the popover is "inserted", to force it to hide after a first click to close
  // (see below).
  private showStartDialog: Boolean = true;

  constructor(
    private translate:TranslateService,
    public router: Router, 
    public mapService: MapService,
    public cdr: ChangeDetectorRef,
    private cdRef: ChangeDetectorRef
  ) { 
  }
  //use language selected

  useLanguage(language:string){this.translate.use(language);
  }
  

  ngOnInit() {
    var self = this;
    $("#panel-switcher-close").click(function (e) {
      console.log("close");
      self.showStartDialog = false;
     
      $('#panel-switcher-wrapper').popover('hide');
      e.preventDefault();
      self.closePanel();
      
      
    });
    $(".btn-panel-switcher").click(function(e) {
      e.preventDefault();
    }); 
    $('#panel-switcher-wrapper').on('inserted.bs.popover', function () {
      if (!self.showStartDialog) {
       $('#panel-switcher-wrapper').popover('hide');
      }
    });
   
    this.setPanelToShow('layerTree');
    
  }

  isLegendPanelOpen: boolean = false;

  setPanelToShow(newPanelToShow) {
    if (newPanelToShow === 'legende') {
      if (this.panelToShow === 'legende') {
        this.panelToShow = 'layerTree';
      } else {
        this.panelToShow = 'legende';
      }
    } else {
      let oldPanel = this.panelToShow;
      this.panelToShow = newPanelToShow;
      if (!$(".panel-switcher-opts").hasClass("active")) {
        this.isPanelOpen = true;
        $("#panel-switcher-wrapper").toggleClass("active");
        $(".panel-switcher-opts").toggleClass("active");
        _paq.push(['trackEvent', 'panel_open', newPanelToShow]);
      } else {
        if (oldPanel == newPanelToShow) {
          this.isPanelOpen = false;
          this.closePanel();
        }
      }
    }
  }
  
  

  closePanel(){
    $(".panel-switcher-opts").toggleClass("active");
    $("#panel-switcher-wrapper").toggleClass("active");
  }


  toggleCollapse(event: Event): void {
    event.stopPropagation();
    this.isMapControllerCollapsed = !this.isMapControllerCollapsed;
    this.cdRef.detectChanges(); 
  }
  
  @ViewChild('mapControllerCollapse') mapControllerCollapseRef: ElementRef;
  @ViewChild('toggleButton') toggleCollapseRef: ElementRef;
  @ViewChild('dropdownButton') dropdownButtonRef: ElementRef;

  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const insideToggleButton = this.toggleCollapseRef.nativeElement.contains(targetElement);
    const insideDropdownButton = this.dropdownButtonRef.nativeElement.contains(targetElement);
    const insideCollapse = this.mapControllerCollapseRef.nativeElement.contains(targetElement);
    // Assurez-vous que le clic n'est ni sur le bouton ni dans le collapse
    if (!insideToggleButton && !insideDropdownButton && !insideCollapse) {
      this.isMapControllerCollapsed = true;
      console.log('isMapControllerCollapsed:', this.isMapControllerCollapsed);
      this.cdRef.detectChanges();
    }

    }
  }

