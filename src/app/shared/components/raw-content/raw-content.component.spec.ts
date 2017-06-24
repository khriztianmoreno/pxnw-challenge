/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule} from '@angular/http';

import { RawContentService } from './raw-content.service';
import { RawContentComponent } from './raw-content.component';
import { TruncatePipe } from './../../helpers/truncate';

describe('RawContentComponent', () => {
  let component: RawContentComponent;
  let fixture: ComponentFixture<RawContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawContentComponent , TruncatePipe],
      providers:  [RawContentService],
      imports: [
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
