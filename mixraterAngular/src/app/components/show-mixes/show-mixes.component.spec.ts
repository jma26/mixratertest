import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMixesComponent } from './show-mixes.component';

describe('ShowMixesComponent', () => {
  let component: ShowMixesComponent;
  let fixture: ComponentFixture<ShowMixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
