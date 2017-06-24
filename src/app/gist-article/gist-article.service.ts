/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Request } from './../shared/helpers/request';
import { API } from './../commons/api';

@Injectable()
export class GistArticleService {

  constructor (private http: Http) {}

  /**
   * Get all gist of a username
   * @param search Value for search query
   */
  public fetchGists(search): Observable<any> {
    const username = search ? search : 'khriztianmoreno';
    return this.http
            .get(`${API}/users/${username}/gists`)
            .map(Request.extractData)
            .catch(Request.handleError);
  }

  /**
   * Get a single gist
   * @param id Identificator gist in github
   */
  public fetchSingleGist(id: string): Observable<any> {
    return this.http
            .get(`${API}/gists/${id}`)
            .map(Request.extractData)
            .catch(Request.handleError);
  }
}
