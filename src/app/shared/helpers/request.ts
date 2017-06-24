/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Request {
  public static extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  public static handleError(error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(error);
    return Observable.throw(errMsg);
  }
}
