import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMixComponent } from './view-mix.component';

describe('ViewMixComponent', () => {
  let component: ViewMixComponent;
  let fixture: ComponentFixture<ViewMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
