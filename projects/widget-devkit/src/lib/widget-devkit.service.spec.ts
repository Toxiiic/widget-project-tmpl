import { TestBed } from '@angular/core/testing';

import { WidgetDevkitService } from './widget-devkit.service';

describe('WidgetDevkitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetDevkitService = TestBed.get(WidgetDevkitService);
    expect(service).toBeTruthy();
  });
});
