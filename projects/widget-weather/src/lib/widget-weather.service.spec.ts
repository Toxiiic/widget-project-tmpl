import { TestBed } from '@angular/core/testing';

import { WidgetWeatherService } from './widget-weather.service';

describe('WidgetWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetWeatherService = TestBed.get(WidgetWeatherService);
    expect(service).toBeTruthy();
  });
});
