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


import { CommentComponent } from './comment.component';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let mockBackend: MockBackend;
  const idGist = '172e201db07617a1feacae8d145f8cf0';
  const idComment = '2131320';
  const urlComment = `https://api.github.com/gists/${idGist}/comments/`;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentService,
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

  describe('When I request comments of a gist API services', () => {
    it('if i do a GET api.github.com/gists/:id/comments it should fetch comment lists',
      async(inject([CommentService], (appService) => {
        mockBackend.connections.subscribe(
          (connection: MockConnection) => {
            expect(connection.request.url).toContain(`https://api.github.com/gists/${idGist}/comments`);
            expect(connection.request.method).toEqual(RequestMethod.Get);
            connection.mockRespond(new Response(
              new ResponseOptions({
                body: [{
                  id: idGist,
                  url: `urlCommen/${idComment}`
                }]
              })));
          });

        appService.fetchCommentGists(urlComment).subscribe(
          (data) => {
            expect(data.length).toBeDefined();
            expect(data.length).toEqual(1);
            expect(data[0].id).toEqual(idGist);
            expect(data[0].url).toEqual(`urlCommen/${idComment}`);
          });
    })));
  });

});
