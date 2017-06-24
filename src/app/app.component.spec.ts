/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { GistArticleComponent } from './gist-article/gist-article.component';
import { GistArticleDetailComponent } from './gist-article-detail/gist-article-detail.component';
import { RawContentComponent } from './shared/components/raw-content/raw-content.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { SearchGistsComponent } from './search-gists/search-gists.component';
import { AppModule  } from './app.module';


import { TruncatePipe } from './shared/helpers/truncate';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });
  it('should work', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Gists Blog!!');
  }));

  it('should render app-search-gists tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-search-gists')).toBeTruthy();
  }));

});
