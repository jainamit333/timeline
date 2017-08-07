import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHolderComponent } from './events-holder.component';

describe('EventsHolderComponent', () => {
  let component: EventsHolderComponent;
  let fixture: ComponentFixture<EventsHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
