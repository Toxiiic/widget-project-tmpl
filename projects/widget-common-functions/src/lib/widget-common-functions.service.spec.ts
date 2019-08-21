import { TestBed } from '@angular/core/testing';

import { WidgetCommonFunctionsService } from './widget-common-functions.service';

describe('WidgetCommonFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetCommonFunctionsService = TestBed.get(WidgetCommonFunctionsService);
    expect(service).toBeTruthy();
  });
});
