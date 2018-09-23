import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollPaginationComponent } from './infinite-scroll-pagination.component';

describe('InfiniteScrollPaginationComponent', () => {
  let component: InfiniteScrollPaginationComponent;
  let fixture: ComponentFixture<InfiniteScrollPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
