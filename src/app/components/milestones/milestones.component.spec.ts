import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesComponent } from './milestones.component';

describe('MilestonesComponent', () => {
  let component: MilestonesComponent;
  let fixture: ComponentFixture<MilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestonesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
