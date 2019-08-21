import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCommonFunctionsComponent } from './widget-common-functions.component';

describe('WidgetCommonFunctionsComponent', () => {
  let component: WidgetCommonFunctionsComponent;
  let fixture: ComponentFixture<WidgetCommonFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCommonFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCommonFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
