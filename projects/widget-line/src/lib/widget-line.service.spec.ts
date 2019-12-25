import { TestBed } from '@angular/core/testing';

import { WidgetLineService } from './widget-line.service';

describe('WidgetLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetLineService = TestBed.get(WidgetLineService);
    expect(service).toBeTruthy();
  });
});
