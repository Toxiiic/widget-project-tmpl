import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTaskComponent } from './widget-task.component';

describe('WidgetTaskComponent', () => {
  let component: WidgetTaskComponent;
  let fixture: ComponentFixture<WidgetTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
