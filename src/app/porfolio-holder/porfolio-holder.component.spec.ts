import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioHolderComponent } from './porfolio-holder.component';

describe('PorfolioHolderComponent', () => {
  let component: PorfolioHolderComponent;
  let fixture: ComponentFixture<PorfolioHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
