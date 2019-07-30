import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEchartsComponent } from './widget-echarts.component';

describe('WidgetEchartsComponent', () => {
  let component: WidgetEchartsComponent;
  let fixture: ComponentFixture<WidgetEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
