import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfSettingComponent } from './cf-setting.component';

describe('CfSettingComponent', () => {
  let component: CfSettingComponent;
  let fixture: ComponentFixture<CfSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
