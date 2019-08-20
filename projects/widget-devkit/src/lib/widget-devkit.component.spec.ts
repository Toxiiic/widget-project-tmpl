import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDevkitComponent } from './widget-devkit.component';

describe('WidgetDevkitComponent', () => {
  let component: WidgetDevkitComponent;
  let fixture: ComponentFixture<WidgetDevkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetDevkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDevkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
