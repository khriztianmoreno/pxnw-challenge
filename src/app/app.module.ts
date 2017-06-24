/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { TruncatePipe } from './shared/helpers/truncate';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { GistArticleComponent } from './gist-article/gist-article.component';
import { GistArticleDetailComponent } from './gist-article-detail/gist-article-detail.component';
import { RawContentComponent } from './shared/components/raw-content/raw-content.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { SearchGistsComponent } from './search-gists/search-gists.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    GistArticleComponent,
    TruncatePipe,
    GistArticleDetailComponent,
    RawContentComponent,
    CommentComponent,
    SearchGistsComponent,
    SpinnerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
