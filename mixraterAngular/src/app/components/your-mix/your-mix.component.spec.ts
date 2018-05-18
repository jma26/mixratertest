import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMixComponent } from './your-mix.component';

describe('YourMixComponent', () => {
  let component: YourMixComponent;
  let fixture: ComponentFixture<YourMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
