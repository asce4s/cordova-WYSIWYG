import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
@Injectable()
export class HTTPService {

  constructor(private http: Http) {
  }

  sendRequest(data,url) {

    let baseURI="http://127.0.0.1:8000";
    let headers = new Headers({'Content-Type': 'application/X-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(baseURI+url, data, options)
        .map(this.extractData)
        .catch(this.handleError);

  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }


  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
