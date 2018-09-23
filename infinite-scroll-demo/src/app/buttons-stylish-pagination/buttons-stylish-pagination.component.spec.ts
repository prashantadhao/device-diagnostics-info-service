import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsStylishPaginationComponent } from './buttons-stylish-pagination.component';

describe('ButtonsStylishPaginationComponent', () => {
  let component: ButtonsStylishPaginationComponent;
  let fixture: ComponentFixture<ButtonsStylishPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsStylishPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsStylishPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
