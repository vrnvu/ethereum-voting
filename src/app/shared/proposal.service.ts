import { Injectable } from '@angular/core';
import { PROPOSALS } from '../model/mock-proposals';
import { Proposal } from '../model/Proposal';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class ProposalService {

  constructor(private messageService: MessageService) { }

  /*
   of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
   In the HTTP tutorial, you'll call HttpClient.get<Hero[]>() which also returns an Observable<Hero[]>
   that emits a single value, an array of heroes from the body of the HTTP response.
   */
  getProposals(): Observable<Proposal[]> {
    this.messageService.add('Proposal Service: Fetched all proposals.');
    return of(PROPOSALS);
  }

  getProposal(id: number): Observable<Proposal> {
    this.messageService.add('Proposal Service: Feteched proposal id=${id}');
    return of(PROPOSALS.find(proposal => proposal.id === id));
  }

}
