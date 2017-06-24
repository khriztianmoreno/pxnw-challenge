/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Request } from './../../../shared/helpers/request';

@Injectable()
export class CommentService {

  constructor (private http: Http) {}

  /**
   * Get all comments of a single gist
   * @param url value where are the comments of the gist
   */
  public fetchCommentGists(url: string): Observable<any> {
    return this.http
            .get(url)
            .map(Request.extractData)
            .catch(Request.handleError);
  }
}
