import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLineComponent } from './widget-line.component';

describe('WidgetLineComponent', () => {
  let component: WidgetLineComponent;
  let fixture: ComponentFixture<WidgetLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
