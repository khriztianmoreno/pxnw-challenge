/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { RawContentComponent } from '../shared/components/raw-content/raw-content.component';
import { GistArticleDetailComponent } from './gist-article-detail.component';
import { CommentComponent } from '../shared/components/comment/comment.component';
import { TruncatePipe } from '../shared/helpers/truncate';
import { SpinnerComponent } from './../shared/components/spinner/spinner.component';

import { MockActivatedRoute } from './../mocks/activatedRoute.mock';

describe('GistArticleDetailComponent', () => {
  let component: GistArticleDetailComponent;
  let fixture: ComponentFixture<GistArticleDetailComponent>;
  const mockActivatedRoute = new MockActivatedRoute();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule , RouterModule],
      declarations: [
        GistArticleDetailComponent,
        RawContentComponent,
        CommentComponent,
        TruncatePipe,
        SpinnerComponent
      ],
      providers: [{provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
