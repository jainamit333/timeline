import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHolderComponent } from './gallery-holder.component';

describe('GalleryHolderComponent', () => {
  let component: GalleryHolderComponent;
  let fixture: ComponentFixture<GalleryHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
