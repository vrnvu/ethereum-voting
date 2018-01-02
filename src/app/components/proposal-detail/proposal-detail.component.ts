import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {ProposalService} from '../../shared/proposal.service';
import {Proposal} from '../../model/Proposal';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.css']
})
export class ProposalDetailComponent implements OnInit {

  @Input() proposal: Proposal;

  constructor(private route: ActivatedRoute,
              private proposalService: ProposalService,
              private location: Location) { }

  ngOnInit() {
    this.getProposal();
  }

  getProposal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.proposalService.getProposal(id)
      .subscribe(proposal => this.proposal = proposal);
  }

  goBack(): void {
    this.location.back();
  }

}
