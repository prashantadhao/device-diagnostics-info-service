import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteDeviceDetailComponent } from './infinite-device-detail.component';

describe('InfiniteDeviceDetailComponent', () => {
  let component: InfiniteDeviceDetailComponent;
  let fixture: ComponentFixture<InfiniteDeviceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteDeviceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
