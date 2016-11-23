import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constants, IBlog } from '../shared';

//import just needed Rxjs operators and statics:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BlogDataService {
  private blogsUrl = Constants.api_url;

  constructor(private http: Http) { }

  getBlogs (): Observable<IBlog[]> {
    return this.http.get(this.blogsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    //Standard angular way of logging, this should be replaced with something more suitable for specific project.
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
