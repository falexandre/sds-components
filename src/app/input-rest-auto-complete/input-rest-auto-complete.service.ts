import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class InputRestAutoCompleteService {

  httpOptions: object;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': this.acessToken()
        })
    };
  }

  private acessToken() {
    const token = this.getToken();
    return `${token.token_type} ${token.access_token}`;
  }

  private getToken() {
    try {
      return JSON.parse(eval(this.getCookieValue('com.senior.pau.token')));
    } catch (e) {
      console.log('Erro ao obter Token');
    }
    return null;
  }

  private getServiceUrl(): string {
    try {
      return decodeURIComponent(this.getCookieValue('com.senior.pau.services.url'));
    } catch (e) {
      console.log('Erro ao obter Service URL');
    }
    return null;
  }


  buildUrl(resource: string) {
    const servicesURL = this.getServiceUrl();
    return `${servicesURL}hcm/payroll/${resource}`;
  }

  query(path: string, body: object): Observable<any> {
    const endpoit = `queries/${path}`;
    return this.http.post(this.buildUrl(endpoit), body, this.httpOptions);
  }

  private getCookieValue(key: string): string {
    const decodedCookie = decodeURIComponent(document.cookie);
    const value = decodedCookie.split(';').find(value => value.indexOf(key) >= 0);
    return value.split('=')[1];
  }

  private getCookieValueAjust(key: string): string {
    const value = document.cookie.split(';')
      .find(value => value.indexOf(key) >= 0);
    return value.split('=')[1].startsWith('"')
      ? value.split('=')[1].substring(1, value.split('=')[1].length - 1)
      : value.split('=')[1];
  }


}
