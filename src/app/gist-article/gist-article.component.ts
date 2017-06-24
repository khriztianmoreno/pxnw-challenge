/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GistArticleService } from './gist-article.service';
import { SpinnerComponent } from './../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-gist-article',
  templateUrl: './gist-article.component.html',
  styleUrls: ['./gist-article.component.scss'],
  providers:  [GistArticleService]
})

export class GistArticleComponent implements OnInit, OnDestroy {

  public isRequesting: boolean;
  public gists = [];
  public error: any;
  public raw: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private gistArticleService: GistArticleService) { }

  public ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.getGists(params['search']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Get all gist of a user
   * @param search Value for search query
   */
  public getGists(search: string) {
    this.isRequesting = true;
    this.gistArticleService.fetchGists(search).subscribe(
      (response) => {
        this.gists = response;
        this.stopRefreshing();
      },
      (error) => {
        this.error = error;
        this.stopRefreshing();
      }
    );
  }

  /**
   * Get raw url of a gist
   * @param gist
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
