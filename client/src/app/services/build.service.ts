import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Response, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';


@Injectable()
export class BuildService {

  constructor(private http: Http) { }

  sendData(data){

    let headers = new Headers({ 'Content-Type': 'application/X-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post('http://localhost/cordova/build.php',  data , options)
      .map(this.extractData)
      .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: Response | any) {
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
