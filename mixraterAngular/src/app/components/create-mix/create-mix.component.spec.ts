import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMixComponent } from './create-mix.component';

describe('CreateMixComponent', () => {
  let component: CreateMixComponent;
  let fixture: ComponentFixture<CreateMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
