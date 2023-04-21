import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectSummaryComponent } from './defect-summary.component';

describe('DefectSummaryComponent', () => {
  let component: DefectSummaryComponent;
  let fixture: ComponentFixture<DefectSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefectSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
