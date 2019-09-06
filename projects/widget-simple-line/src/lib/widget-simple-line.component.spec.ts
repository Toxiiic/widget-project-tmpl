import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSimpleLineComponent } from './widget-simple-line.component';

describe('WidgetSimpleLineComponent', () => {
  let component: WidgetSimpleLineComponent;
  let fixture: ComponentFixture<WidgetSimpleLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSimpleLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSimpleLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
