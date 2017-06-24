/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Request } from './../../../shared/helpers/request';

@Injectable()
export class RawContentService {

  constructor (private http: Http) {}

  /**
   * Gets all the raw of a specific gist
   * @param url value where are the raw of the gist
   */
  public getRawGist(url: string): Observable<any> {
    return this.http
            .get(url)
            .map(this.extractTextData)
            .catch(Request.handleError);
  }

  /**
   * Extract data in formatt text
   */
  private extractTextData(res: Response) {
    const body = res.text();
    return body || { };
  }
}
