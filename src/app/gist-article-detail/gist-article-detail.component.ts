/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GistArticleService } from './../gist-article/gist-article.service';
import { SpinnerComponent } from './../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-gist-article-detail',
  templateUrl: './gist-article-detail.component.html',
  styleUrls: ['./gist-article-detail.component.scss'],
  providers:  [GistArticleService]
})
export class GistArticleDetailComponent implements OnInit, OnDestroy {

  public isRequesting: boolean;
  private sub: any;
  public gist: any;
  public error: any;

  constructor(private route: ActivatedRoute, private gistArticleService: GistArticleService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.getSingleGist(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Gets detail of an gist
   * @param id Gist Id
   */
  public getSingleGist(id: string) {
    this.gistArticleService.fetchSingleGist(id).subscribe(
      (response) => {
        this.gist = response;
        this.stopRefreshing();
      },
      (error) => {
        this.error = error;
        this.stopRefreshing();
      }
    );
  }

  /**
   * Gets the url of the gist raw
   * @param gist Object gist
   */
  public getRawUrl(gist) {
    const key = Object.keys(gist.files).shift();
    return gist.files[key].raw_url;
  }

  /**
   * Stop spinner
   */
  private stopRefreshing() {
    this.isRequesting = false;
  }

}
