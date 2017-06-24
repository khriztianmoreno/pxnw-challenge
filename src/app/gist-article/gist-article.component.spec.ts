/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { RawContentComponent } from '../shared/components/raw-content/raw-content.component';
import { GistArticleComponent } from './gist-article.component';
import { TruncatePipe } from '../shared/helpers/truncate';
import { SpinnerComponent } from './../shared/components/spinner/spinner.component';

import { MockActivatedRoute } from './../mocks/activatedRoute.mock';

describe('GistArticleComponent', () => {
  let component: GistArticleComponent;
  let fixture: ComponentFixture<GistArticleComponent>;
  const mockActivatedRoute = new MockActivatedRoute();
  const GISTS = {
    'url': 'https://api.github.com/gists/aa5a315d61ae9438b18d',
    'forks_url': 'https://api.github.com/gists/aa5a315d61ae9438b18d/forks',
    'commits_url': 'https://api.github.com/gists/aa5a315d61ae9438b18d/commits',
    'id': 'aa5a315d61ae9438b18d',
    'description': 'description of gist',
    'public': true,
    'owner': {
      'login': 'octocat',
      'id': 1,
      'avatar_url': 'https://github.com/images/error/octocat_happy.gif',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/octocat',
      'html_url': 'https://github.com/octocat',
      'followers_url': 'https://api.github.com/users/octocat/followers',
      'following_url': 'https://api.github.com/users/octocat/following{/other_user}',
      'gists_url': 'https://api.github.com/users/octocat/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/octocat/subscriptions',
      'organizations_url': 'https://api.github.com/users/octocat/orgs',
      'repos_url': 'https://api.github.com/users/octocat/repos',
      'events_url': 'https://api.github.com/users/octocat/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/octocat/received_events',
      'type': 'User',
      'site_admin': false
    },
    'user': null,
    'files': {
      'ring.erl': {
        'size': 932,
        'raw_url': 'https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl',
        'type': 'text/plain',
        'truncated': false,
        'language': 'Erlang'
      }
    },
    'truncated': false,
    'comments': 0,
    'comments_url': 'https://api.github.com/gists/aa5a315d61ae9438b18d/comments/',
    'html_url': 'https://gist.github.com/aa5a315d61ae9438b18d',
    'git_pull_url': 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    'git_push_url': 'https://gist.github.com/aa5a315d61ae9438b18d.git',
    'created_at': '2010-04-14T02:15:15Z',
    'updated_at': '2011-06-20T11:34:15Z'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule , RouterModule],
      declarations: [ GistArticleComponent, RawContentComponent, TruncatePipe, SpinnerComponent ],
      providers: [{provide: ActivatedRoute, useValue: mockActivatedRoute}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When I initialize Gist Article Component', () => {

    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('variable error value should be equals to undefined', () => {
      component = fixture.debugElement.componentInstance;
      expect(component.error).toBeUndefined();
    });

    it('should set the gist length', () => {
      component.gists.push(GISTS);
      expect(component.gists.length).toBe(1);
    });

    it('should render div.blog-posts tag', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div.blog-posts')).toBeTruthy();
    }));

  });

  describe('When rendering the list of gists', () => {
    it('Should the files property exist in the GIST object', () => {
      component.gists.push(GISTS);
      expect(component.gists[0].files).toEqual(GISTS.files);
    });

    it('Should the raw_url property be string in the gist.file object', () => {
      const urlRaw = component.getRawUrl(GISTS);
      expect(urlRaw).toEqual(GISTS.files['ring.erl'].raw_url);
    });

  });


});
