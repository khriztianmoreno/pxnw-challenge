/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import {
  ActivatedRoute
} from '@angular/router';
import {
  Observable
} from 'rxjs/Rx';

export class MockActivatedRoute extends ActivatedRoute {

  public params;

  constructor() {
    super();
    this.params = Observable.of({});

    Object.defineProperty(this, 'parent', {
      get: () => {
        return parent;
      },
      set: (value) => {
        parent = value;
      }
    });
  }
}
