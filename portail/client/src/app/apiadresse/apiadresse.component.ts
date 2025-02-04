import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';

declare var _paq: any;

@Component({
  selector: 'app-apiadresse',
  templateUrl: './apiadresse.component.html',
  styleUrls: ['./apiadresse.component.css']
})
export class ApiAdresseComponent implements OnInit {

  values = [];
  value = '';
  selected: any;
  longitude = null;
  latitude = null;

  @Output()
  public citySelected = new EventEmitter();

  constructor( public http: HttpClient, private _sanitizer: DomSanitizer) { }

  observableSource = (keyword: any): Observable<any[]> => {

    let url: string =
      'https://api3.geo.admin.ch/rest/services/api/SearchServer?'
    if (keyword) {
      var parametres = new HttpParams();
      parametres=parametres.set('searchText', keyword);
      parametres=parametres.set('type','locations');
      if (this.latitude && this.longitude) {
        parametres=parametres.set('lat', this.latitude);
        parametres=parametres.set('lon', this.longitude);
      }
    
      return this.http.get(url,
        { params: parametres })
        .pipe(map(res => {
          return res['results'];
        }))
    } else {
      return Observable.of([]);
    }
  }

  myListFormatter = (data: any) => {
    let html = `<div style="line-height: 100%; font-size: small"><b>${data["attrs"]["label"]}</b></div>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  myValueFormatter(data: any): string {
    return `${data["attrs"]["detail"]}`;
  }

  ngOnInit() {
  }

  onSelect(event) {
    this.citySelected.emit(this.selected);    
    _paq.push(['trackEvent', 'api_adresse', true])
  }


}
