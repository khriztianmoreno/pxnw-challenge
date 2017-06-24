/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
  ResponseOptions,
  BaseRequestOptions,
  Response,
  HttpModule,
  Http,
  XHRBackend,
  RequestMethod
} from '@angular/http';


import { GistArticleService } from './gist-article.service';

describe('GistArticleService', () => {
  let mockBackend: MockBackend;
  const userName = 'khriztianmoreno';
  const idGist = '172e201db07617a1feacae8d145f8cf0';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        GistArticleService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  describe('When I request gists API services', () => {
    it('if i do a GET api.github.com/users/:username/gists it should fetch gists list',
      async(inject([GistArticleService], (appService) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            expect(connection.request.url).toContain(`https://api.github.com/users/${userName}/gists`);
            expect(connection.request.method).toEqual(RequestMethod.Get);
            connection.mockRespond(new Response(
              new ResponseOptions({
                body: [{
                  id: idGist
                }]
              })));
          });

        appService.fetchGists(userName).subscribe(
          (data) => {
            expect(data.length).toBeDefined();
            expect(data.length).toEqual(1);
            expect(data[0].id).toEqual(idGist);
          });
      })));

    it('if i do a GET api.github.com/gists/:id it should fetch single gist',
      async(inject([GistArticleService], (appService) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            expect(connection.request.url).toContain(`https://api.github.com/gists/${idGist}`);
            expect(connection.request.method).toEqual(RequestMethod.Get);
            connection.mockRespond(new Response(
              new ResponseOptions({
                body: { id: idGist }
              })));
          });

        appService.fetchSingleGist(idGist).subscribe(
          (data) => {
            expect(data).toBeDefined();
            expect(data.id).toEqual(idGist);
          });
      })));

  });

});
