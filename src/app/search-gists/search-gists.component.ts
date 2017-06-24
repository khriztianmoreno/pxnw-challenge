/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-gists',
  templateUrl: './search-gists.component.html'
})
export class SearchGistsComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });
  }

  /**
   * Search all gist of a username
   * @param param0 input value
   */
  public onSearch({ search }) {
    this.router.navigate(['/search', search]);
  }

}
