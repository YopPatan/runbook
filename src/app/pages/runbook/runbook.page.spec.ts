import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunbookPage } from './runbook.page';

describe('RunbookPage', () => {
  let component: RunbookPage;
  let fixture: ComponentFixture<RunbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
