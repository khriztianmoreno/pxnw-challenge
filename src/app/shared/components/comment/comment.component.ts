/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers:  [CommentService]
})

export class CommentComponent implements OnInit {

  @Input() commentUrl: string;
  public error: any;
  public comments = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.getCommetnGists(this.commentUrl);
  }

  /**
   * Gets the raw of a specific gist
   * @param url
   */
  public getCommetnGists(url) {
    return this.commentService.fetchCommentGists(url).subscribe(
      (response) => this.comments = response,
      (error) => this.error = error
    );
  }

}
