import { TestBed } from '@angular/core/testing';

import { WidgetSimpleLineService } from './widget-simple-line.service';

describe('WidgetSimpleLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetSimpleLineService = TestBed.get(WidgetSimpleLineService);
    expect(service).toBeTruthy();
  });
});
