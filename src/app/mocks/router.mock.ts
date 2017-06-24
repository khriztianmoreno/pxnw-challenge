/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { Router, NavigationExtras, UrlTree } from '@angular/router';

export class MockRouter extends Router {

  public url: string;
  private route: any[];
  public parent;

  constructor() {
    super(null, null, null, null, null, null, null, []);
    Object.defineProperty(this, 'url', {
      get: () => {
        return 'test';
      },
      set: (value) => {
        this.parent = value;
      }
    });
  }

  public navigate(commands: any[], extras ?: NavigationExtras): Promise < boolean > {
    this.route = commands;
    return Promise.resolve(true);
  }

  public navigateByUrl(url: string | UrlTree, extras ?: NavigationExtras): Promise < boolean > {
    return Promise.resolve(true);
  }

}
