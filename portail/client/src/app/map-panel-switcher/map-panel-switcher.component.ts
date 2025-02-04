import { Component, HostListener, ElementRef, ViewChild, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MapService } from '../service/map.service';
import { Router } from '@angular/router';
import { UserContext } from '../model/UserContext';
import { TranslateService } from '@ngx-translate/core';

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
  public isLegendCollapsed = true;

  public panelToShow = 'layerTree';

  @Input('userContext') public userContext: UserContext;

  private showStartDialog: Boolean = true;

  @ViewChild('mapControllerCollapse') mapControllerCollapseRef: ElementRef;
  @ViewChild('toggleButton') toggleCollapseRef: ElementRef;
  @ViewChild('dropdownButton') dropdownButtonRef: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenuRef: ElementRef;
  @ViewChild('appMapController') appMapController: ElementRef;

  constructor(
    private translate: TranslateService,
    public router: Router,
    public mapService: MapService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    $("#panel-switcher-close").click((e) => {
      this.showStartDialog = false;
      $('#panel-switcher-wrapper').popover('hide');
      e.preventDefault();
      this.closePanel();
    });

    $(".btn-panel-switcher").click((e) => {
      e.preventDefault();
    });

    $('#panel-switcher-wrapper').on('inserted.bs.popover', () => {
      if (!this.showStartDialog) {
        $('#panel-switcher-wrapper').popover('hide');
      }
    });

    this.setPanelToShow('layerTree');
  }

  useLanguage(language: string) {
    this.translate.use(language);
    const dropdownItems = this.dropdownMenuRef.nativeElement.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => item.classList.remove('active'));

    const selectedItem = this.dropdownMenuRef.nativeElement.querySelector(`button[data-lang='${language}']`);
    if (selectedItem) {
      selectedItem.classList.add('active');
    }
  }

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
        if (oldPanel === newPanelToShow) {
          this.isPanelOpen = false;
          this.closePanel();
        }
      }
    }
  }

  closePanel() {
    $(".panel-switcher-opts").toggleClass("active");
    $("#panel-switcher-wrapper").toggleClass("active");
  }

  toggleCollapse(event: Event): void {
    event.stopPropagation();
    this.isMapControllerCollapsed = !this.isMapControllerCollapsed;
    this.cdRef.detectChanges();
    const dropdownMenu = this.dropdownMenuRef.nativeElement;
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  }

  closeMapControllerCollapse() {
    this.isMapControllerCollapsed = true;
    this.cdRef.detectChanges();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const insideToggleButton = this.toggleCollapseRef.nativeElement.contains(targetElement);
    const insideDropdownButton = this.dropdownButtonRef.nativeElement.contains(targetElement);
    const insideCollapse = this.mapControllerCollapseRef.nativeElement.contains(targetElement);

    if (!insideToggleButton && !insideDropdownButton && !insideCollapse) {
      this.closeMapControllerCollapse();
    }
  }
}
