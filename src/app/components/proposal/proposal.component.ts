import { Component, OnInit } from '@angular/core';

import { ProposalService } from '../../shared/proposal.service';
// Proposal template class
import {Proposal} from '../../model/Proposal';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  proposals: Proposal[];

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    this.getProposals();
  }

  /*
  The new version waits for the Observable to emit the array of heroes—
  which could happen now or several minutes from now.
  Then subscribe passes the emitted array to the callback,
  which sets the component's heroes property.
  This asynchronous approach will work when the HeroService requests heroes from the server.
   */
  private getProposals(): void {
    this.proposalService.getProposals()
      .subscribe(proposals => this.proposals = proposals);
  }

  add(name: String): void {
    name = name.trim();
    if (!name) { return; }
    this.proposalService.addProposal({ name } as Proposal)
      .subscribe(proposal => {
        this.proposals.push(proposal);
      });
  }

  /*
  If you neglect to subscribe(), the service will not send the delete request to the server!
   As a rule, an Observable does nothing until something subscribes!
   */
  delete(proposal: Proposal): void {
    this.proposals = this.proposals.filter(p => p !== proposal);
    this.proposalService.deleteProposal(proposal).subscribe();
}

}
