import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartViewComponent } from './pie-chart-view.component';

describe('PieChartViewComponent', () => {
  let component: PieChartViewComponent;
  let fixture: ComponentFixture<PieChartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
