import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { environment } from 'environments/environment';
import { Register } from './register';

@Injectable()
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {}

  public save(register: Register): Observable<any> {
    let body = JSON.stringify(register);
    return this.http.request("POST", environment.apiUrl + '/hero', {body: body});
  }
}
