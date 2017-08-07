import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventaHolderComponent } from './eventa-holder.component';

describe('EventaHolderComponent', () => {
  let component: EventaHolderComponent;
  let fixture: ComponentFixture<EventaHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventaHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventaHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
