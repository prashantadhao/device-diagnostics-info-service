import { TestBed } from '@angular/core/testing';

import { DeviceDetailService } from './device-detail.service';

describe('DeviceDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceDetailService = TestBed.get(DeviceDetailService);
    expect(service).toBeTruthy();
  });
});
