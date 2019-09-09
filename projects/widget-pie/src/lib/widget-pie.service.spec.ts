import { TestBed } from '@angular/core/testing';

import { WidgetPieService } from './widget-pie.service';

describe('WidgetPieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetPieService = TestBed.get(WidgetPieService);
    expect(service).toBeTruthy();
  });
});
