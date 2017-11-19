import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import Cookie from 'js-cookie';

@Injectable()
export class HttpClientService {

  httpOptions: object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': this.getToken()
        })
    };
  }

  getToken() {
    let token = Cookie.get('com.senior.pau.token');
    token = token.replace(/\\/g, '');
    token = JSON.parse(token);
    return `${token.token_type} ${token.access_token}`;
  }

  buildUrl(resource: string) {
    const servicesURL = Cookie.get('com.senior.pau.services.url');
    return `${servicesURL}hcm/payroll/${resource}`;
  }

  query(path: string, body: object): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.post(this.buildUrl(endpoit), body);
  }

  action(path: string, body: object): Observable<any> {
    const endpoit = `actions/${path}`;
    return this.http.post(this.buildUrl(endpoit), body);
  }


  get(path: string): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.get(this.buildUrl(endpoit));
  }

  patch(path: string, body: object): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.patch(this.buildUrl(endpoit), body);
  }

  post(path: string, body: object): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.post(this.buildUrl(endpoit), body);
  }

  put(path: string, body: object): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.put(this.buildUrl(endpoit), body);
  }

  delete(path: string): Observable<any> {
    const endpoit = `entities/${path}`;
    return this.http.delete(this.buildUrl(endpoit));
  }

}
