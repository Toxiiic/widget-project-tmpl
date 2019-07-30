import { TestBed } from '@angular/core/testing';

import { WidgetEchartsService } from './widget-echarts.service';

describe('WidgetEchartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetEchartsService = TestBed.get(WidgetEchartsService);
    expect(service).toBeTruthy();
  });
});
