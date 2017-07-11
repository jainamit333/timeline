import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


@Injectable()
export class ConfigurationService {
  constructor(private http: Http) {}
  getLayoutData = (filePath): Observable<Response> => {
    return this.http.get(filePath)
      .map(res => res.json());
  }
}
