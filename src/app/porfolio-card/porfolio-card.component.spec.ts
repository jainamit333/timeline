import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioCardComponent } from './porfolio-card.component';

describe('PorfolioCardComponent', () => {
  let component: PorfolioCardComponent;
  let fixture: ComponentFixture<PorfolioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
