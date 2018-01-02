import { Component, OnInit } from '@angular/core';
import {Proposal} from '../../model/Proposal';
import {ProposalService} from '../../shared/proposal.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  proposals: Proposal[] = [];
  healthProposals: Proposal[] = [];

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    this.getProposals();
    this.getProposalByCategory('');
  }

  getProposals(): void {
    this.proposalService.getProposals()
      .subscribe(proposals => this.proposals = proposals.slice(0, 4));
  }


  getProposalByCategory(category: String): void {
    this.proposalService.getProposals()
      .subscribe(proposals => this.healthProposals = proposals.slice(1, 5));
  }

}
