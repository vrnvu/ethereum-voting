import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Proposal} from '../../model/Proposal';
import {Subject} from 'rxjs/Subject';
import {ProposalService} from '../../shared/proposal.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-proposal-search',
  templateUrl: './proposal-search.component.html',
  styleUrls: ['./proposal-search.component.css']
})
export class ProposalSearchComponent implements OnInit {

  proposals$: Observable<Proposal[]>;
  private searchTerms = new Subject<String>();

  constructor(private proposalService: ProposalService) { }

  search(term: String): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.proposals$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.proposalService.searchProposal(term)),
    );
  }

}
