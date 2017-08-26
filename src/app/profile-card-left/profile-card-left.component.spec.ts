import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardLeftComponent } from './profile-card-left.component';

describe('ProfileCardLeftComponent', () => {
  let component: ProfileCardLeftComponent;
  let fixture: ComponentFixture<ProfileCardLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
