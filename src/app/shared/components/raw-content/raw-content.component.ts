/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Component, OnInit, Input } from '@angular/core';

import { RawContentService } from './raw-content.service';

@Component({
  selector: 'app-raw-content',
  templateUrl: './raw-content.component.html',
  providers:  [RawContentService]
})

export class RawContentComponent implements OnInit {

  @Input() rawUrl: string;
  @Input() truncate: boolean;
  public error: any;
  public raw: string;

  constructor(private rawContentService: RawContentService) { }

  ngOnInit() {
    this.fetchRawGist(this.rawUrl);
  }

  /**
   * Gets the raw of a specific gist
   * @param url
   */
  public fetchRawGist(url) {
    return this.rawContentService.getRawGist(url).subscribe(
      (response) => this.raw = response,
      (error) => this.error = error
    );
  }

}
