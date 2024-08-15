import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Thematic } from '../../model/ChangesClasses/Thematic';
import { ChangesRequest } from 'app/model/ChangesClasses/ChangesRequest';
import { MapService } from '../../service/map.service';
import { ApiRequestService } from '../../service/api-request.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Change } from 'app/model/ChangesClasses/Change';
import { IMyDrpOptions, IMyDateRange } from 'mydaterangepicker';
import { ChangeType } from 'app/model/ChangesClasses/ChangeType';
import { timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

declare var $: any;
declare var config: any;
declare var _paq: any;

@Component({
  selector: 'app-changes-config-panel',
  templateUrl: './changes-config-panel.component.html',
  styleUrls: ['./changes-config-panel.component.css']
})
export class ChangesConfigPanelComponent implements OnInit, AfterViewInit {

  @Input() changeTypesList: Array<ChangeType>;

  public myDateRangePickerOptions: IMyDrpOptions;
  public model: IMyDateRange;

  public changesFilterForm: FormGroup;
  public criteriaFilter: any = {};
  
  private thematicsList: Array<Thematic>;
  public categoryMap: Map<string, Array<Thematic>> = new Map<string, Array<Thematic>>();
  public changesRequest: ChangesRequest = new ChangesRequest();
  public selectedThematic: Thematic;
  public changesList: Array<Change>;
  public displayReport: boolean = false;

  public displayLoadSpinner: boolean = false;
  public tooMuchResult: boolean = false;
  public responseSizeInMo: number;
  public searchChangesTimeoutValue: number = environment.searchChangesTimeoutValue;
  public searchChangesTimedOut: boolean = false;
  public unhandledError: boolean = false;

  public reportInfos: Map<ChangeType, number> = new Map();

  lastChange;
  constructor(public http: HttpClient, public mapService: MapService, public apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.apiRequestService.getLastChange().subscribe(data => {
      // Si vous utilisez HttpClient, vous n'avez pas besoin de JSON.parse
      this.lastChange = new Date(data.timestamp);
    });

    this.apiRequestService.searchThematics().subscribe(data => {
      this.thematicsList = data;
      console.log(this.thematicsList);

      this.thematicsList.forEach(thematic => {
        let value = this.categoryMap.has(thematic.category.name);
        if (value) {
          this.categoryMap.get(thematic.category.name).push(thematic);
        } else {
          this.categoryMap.set(thematic.category.name, [thematic]);
        }
      });
      console.log(this.categoryMap);
    });

    let date = new Date();
    this.initDateForm(date);
    this.initForm();
  }


  ngAfterViewInit() {
    let dropdownMenu = $('#mydatepicker');
    $('body').append(dropdownMenu.detach());
  }

  onSubmit() {
    if (this.formValidation()) {
      this.searchChangesTimedOut = false;
      this.unhandledError = false;
      this.clearResults();
      this.getChangesRequestValues();
      console.log(this.selectedThematic);
      this.changesRequest.bbox = this.mapService.getBoundingBox();
      console.log(this.changesRequest);
      this.emitChanges(this.changesRequest);
    }
  }

  showDatas() {
    this.tooMuchResult = false;
    this.mapService.addChanges(this.changesList);
    this.initReport();
  }

  public emitChanges(changesRequest: ChangesRequest) {
    this.displayLoadSpinner = true;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const data = JSON.stringify(changesRequest);
    console.log(data);

    this.apiRequestService.beginDate = this.changesRequest.beginDate;
    this.apiRequestService.endDate = this.changesRequest.endDate;
    this.apiRequestService.thematic = this.selectedThematic;

    this.apiRequestService.searchChanges(data, { headers })
      .pipe(timeout(this.searchChangesTimeoutValue))
      .subscribe(
        (res: any) => {
          console.log(res.length / (1024 * 1024) + " Mo");
          this.responseSizeInMo = Number((res.length / (1024 * 1024)).toFixed(2));
          this.displayLoadSpinner = false;
          this.changesList = res;
          console.log(this.changesList);

          if (this.responseSizeInMo < config.MAX_RESPONSE_SIZE_WITHOUT_WARNING_IN_MO) {
            this.mapService.addChanges(this.changesList);
            this.tooMuchResult = false;
          } else {
            this.tooMuchResult = true;
          }

          if (this.changesList.length < 1 || this.tooMuchResult) {
            this.displayReport = false;
          } else {
            this.initReport();
          };

          _paq.push(['trackEvent', 'change-thematic_search', this.selectedThematic.viewName]);
        },
        (err) => {
          console.log(err)
          this.displayLoadSpinner = false;
          if (err.name == "TimeoutError") {
            this.searchChangesTimedOut = true;
            _paq.push(['trackEvent', 'change-thematic_search-timeout', this.selectedThematic.viewName]);
          } else {
            _paq.push(['trackEvent', 'change-thematic_search-unhandledError', this.selectedThematic.viewName]);
            this.unhandledError = true;
          }
        });
  }

  public getChangesRequestValues() {
    this.changesRequest.thematic = this.changesFilterForm.controls.thematic.value;
    this.selectedThematic = this.thematicsList.filter(x => x.id === Number(this.changesRequest.thematic))[0];

    let iMyBeginDate = this.changesFilterForm.controls.dates.value.beginDate;
    let beginDate: Date = new Date(Date.UTC(iMyBeginDate.year, iMyBeginDate.month - 1, iMyBeginDate.day));
    let iMyEndDate = this.changesFilterForm.controls.dates.value.endDate;
    let endDate: Date = new Date(Date.UTC(iMyEndDate.year, iMyEndDate.month - 1, iMyEndDate.day));
    endDate.setUTCSeconds(endDate.getUTCSeconds() - 1);
    this.changesRequest.beginDate = beginDate;
    this.changesRequest.endDate = endDate;
  }

  initForm() {
    this.changesFilterForm = new FormGroup({
      'thematic': new FormControl(15, [Validators.required]),
      'dates': new FormControl(this.model, []),
    });
  }

  get thematic() { return this.changesFilterForm.get('thematic'); }

  initDateForm(today: Date) {
    var disableUntil: Date = new Date(new Date().setDate(today.getDate() - 1 - config.DAYS_INTERVAL_FOR_CHANGES_MONITORING));
    var twoWeeksBefore: Date = new Date(new Date().setDate(today.getDate() - 14));

    this.myDateRangePickerOptions = {
      dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
      monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
      disableSince: {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate() + 1
      },
      disableUntil: {
        year: disableUntil.getFullYear(),
        month: disableUntil.getMonth() + 1,
        day: disableUntil.getDate()
      },
      dateFormat: "dd/mm/yyyy",
      selectBeginDateTxt: "Choisir la date de début",
      selectEndDateTxt: "Choisir la date de fin",
      editableDateRangeField: false,
      openSelectorOnInputClick: true,
      width: '100%',
    };

    var td = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };

    var twoWksBefore = {
      year: twoWeeksBefore.getFullYear(),
      month: twoWeeksBefore.getMonth() + 1,
      day: twoWeeksBefore.getDate(),
    };

    this.model = { endDate: td, beginDate: twoWksBefore };
  }

  initReport() {
    this.reportInfos = this.mapService.numberOfChangeByType;
    this.displayReport = true;
  }

  clearResults() {
    this.reportInfos = new Map();
    this.displayReport = false;
    this.changesList = undefined;
    this.mapService.addChanges([]);
  }

  public formValidation() {
    if (this.changesFilterForm.controls.thematic.value == null) {
      alert('Renseignez une thématique !')
      return false;
    }
    return true;
  }
}
