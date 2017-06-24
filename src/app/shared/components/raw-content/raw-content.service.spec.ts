/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { TestBed, inject } from '@angular/core/testing';
import { HttpModule} from '@angular/http';

import { RawContentComponent } from './raw-content.component';
import { RawContentService } from './raw-content.service';

describe('RawContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RawContentService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([RawContentService], (service: RawContentService) => {
    expect(service).toBeTruthy();
  }));
});
