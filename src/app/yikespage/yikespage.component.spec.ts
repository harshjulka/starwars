import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YikespageComponent } from './yikespage.component';

describe('YikespageComponent', () => {
  let component: YikespageComponent;
  let fixture: ComponentFixture<YikespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YikespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YikespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
