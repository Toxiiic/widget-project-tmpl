import { TestBed } from '@angular/core/testing';

import { WidgetPersonalInfoService } from './widget-personal-info.service';

describe('WidgetPersonalInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetPersonalInfoService = TestBed.get(WidgetPersonalInfoService);
    expect(service).toBeTruthy();
  });
});
