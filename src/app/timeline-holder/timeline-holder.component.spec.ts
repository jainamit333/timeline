import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHolderComponent } from './timeline-holder.component';

describe('TimelineHolderComponent', () => {
  let component: TimelineHolderComponent;
  let fixture: ComponentFixture<TimelineHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
