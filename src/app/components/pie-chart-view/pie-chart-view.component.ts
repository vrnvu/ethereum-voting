import {Component, Input, OnInit} from '@angular/core';
import {Proposal} from '../../model/Proposal';

@Component({
  selector: 'app-pie-chart-view',
  templateUrl: './pie-chart-view.component.html',
  styleUrls: ['./pie-chart-view.component.css']
})
export class PieChartViewComponent implements OnInit {

  @Input() proposal: Proposal;

  data: any;

  constructor() {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  ngOnInit() {
  }

}
