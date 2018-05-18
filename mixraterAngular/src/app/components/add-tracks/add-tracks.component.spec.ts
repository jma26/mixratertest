import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTracksComponent } from './add-tracks.component';

describe('AddTracksComponent', () => {
  let component: AddTracksComponent;
  let fixture: ComponentFixture<AddTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
