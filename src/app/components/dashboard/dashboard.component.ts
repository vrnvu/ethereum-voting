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
  jumbotron_title = 'Democracy on the blockchain';
  jumbotron_description = 'Blockchain has been touted as everything from the future of finance to the cure to poverty and the only way to' +
    ' secure land registries. Now it is being pushed as the future of the very democratic process, but can it really work this way?';

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    this.getProposals();
    this.getProposalByCategory('');
  }

  getProposals(): void {
    this.proposalService.getProposals()
      .subscribe(proposals => this.proposals = proposals.slice(0, 3));
  }


  getProposalByCategory(category: String): void {
    this.proposalService.getProposals()
      .subscribe(proposals => this.healthProposals = proposals.slice(1, 5));
  }

}
