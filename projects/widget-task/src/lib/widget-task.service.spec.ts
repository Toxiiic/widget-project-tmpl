import { TestBed } from '@angular/core/testing';

import { WidgetTaskService } from './widget-task.service';

describe('WidgetTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetTaskService = TestBed.get(WidgetTaskService);
    expect(service).toBeTruthy();
  });
});
