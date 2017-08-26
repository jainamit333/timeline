import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardRightComponent } from './profile-card-right.component';

describe('ProfileCardRightComponent', () => {
  let component: ProfileCardRightComponent;
  let fixture: ComponentFixture<ProfileCardRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
