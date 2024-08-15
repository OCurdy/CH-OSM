import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Thematic } from 'app/model/ChangesClasses/Thematic';
import { ConfigService } from './config.service';
import { environment } from '../../environments/environment';
import { ChangeType } from 'app/model/ChangesClasses/ChangeType'; // Importez les types nécessaires

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private baseUrl: string;
  private thematicsSuffix = 'thematics';
  private changesSuffix = 'changesrequest';
  private changeTypesSuffix = 'change_types';
  private featurechangesSuffix = 'featurechangesrequest';
  private lastChangeSuffix = 'lastpolygonchanged';
  public beginDate: Date;
  public endDate: Date;
  public thematic: Thematic;

  private configPromise: Promise<any>;

  constructor(
    private http: HttpClient,
    private configService: ConfigService) 
  {
    this.configPromise = this.configService.getConfig().toPromise().then(config => {
      this.baseUrl = environment.services_baseurl;
      return config;
    });
  }

  public searchThematics(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}${this.thematicsSuffix}`)
      .pipe(catchError(error => observableThrowError(error)));
  }

  public getLastChange(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.lastChangeSuffix}`)
      .pipe(catchError(error => observableThrowError(error)));
  }

  public searchChanges(data: any, options: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${this.changesSuffix}`, data, options)
      .pipe(catchError(error => observableThrowError(error)));
  }

  public searchChangeTypes(): Observable<ChangeType[]> {
    return this.http.get<ChangeType[]>(`${this.baseUrl}${this.changeTypesSuffix}`)
      .pipe(catchError(error => observableThrowError(error)));
  }

  public searchFeatureChanges(data: any, options: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${this.featurechangesSuffix}`, data, options)
      .pipe(catchError(error => observableThrowError(error)));
  }
}
