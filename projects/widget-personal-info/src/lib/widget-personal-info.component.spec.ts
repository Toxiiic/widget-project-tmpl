import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPersonalInfoComponent } from './widget-personal-info.component';

describe('WidgetPersonalInfoComponent', () => {
  let component: WidgetPersonalInfoComponent;
  let fixture: ComponentFixture<WidgetPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
