import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPieComponent } from './widget-pie.component';

describe('WidgetPieComponent', () => {
  let component: WidgetPieComponent;
  let fixture: ComponentFixture<WidgetPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
