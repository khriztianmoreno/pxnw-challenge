/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
import { RouterModule, Routes } from '@angular/router';

import { GistArticleComponent } from './gist-article/gist-article.component';
import { GistArticleDetailComponent } from './gist-article-detail/gist-article-detail.component';

export const AppRoutes: Routes = [
  { path: '', component: GistArticleComponent},
  { path: 'posts', redirectTo: ''},
  { path: 'search', redirectTo: ''},
  { path: 'search/:search', component: GistArticleComponent },
  { path: 'posts/:id', component: GistArticleDetailComponent },
];
