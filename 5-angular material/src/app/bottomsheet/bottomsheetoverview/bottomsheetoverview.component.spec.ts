import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetoverviewComponent } from './bottomsheetoverview.component';

describe('BottomsheetoverviewComponent', () => {
  let component: BottomsheetoverviewComponent;
  let fixture: ComponentFixture<BottomsheetoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomsheetoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
