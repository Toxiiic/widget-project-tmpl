import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTitleBarComponent } from './widget-title-bar.component';

describe('WidgetTitleBarComponent', () => {
  let component: WidgetTitleBarComponent;
  let fixture: ComponentFixture<WidgetTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
