import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CircledPhotoComponent} from './circled-photo.component';

describe('CircledPhotoComponent', () => {
  let component: CircledPhotoComponent;
  let fixture: ComponentFixture<CircledPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircledPhotoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircledPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
