import { Injectable } from '@angular/core';
import { Proposal } from '../model/Proposal';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProposalService {

  private proposalsUrl = 'api/proposals';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /*
   of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
   In the HTTP tutorial, you'll call HttpClient.get<Hero[]>() which also returns an Observable<Hero[]>
   that emits a single value, an array of heroes from the body of the HTTP response.
   */
  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(this.proposalsUrl)
      .pipe(
        tap(proposals => this.log('fetched proposals')),
        catchError(this.handleError('getProposals', [])));
  }

  getProposal(id: number): Observable<Proposal> {
    const url = `${this.proposalsUrl}/${id}`;
    return this.http.get<Proposal>(url).pipe(
      tap(_ => this.log(`fetched proposal id=${id}`)),
      catchError(this.handleError<Proposal>(`getProposal id=${id}`))
    )
  }

  private log(message: string) {
    this.messageService.add('Proposal Service: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateProposal(proposal: Proposal) {
    return this.http.put(this.proposalsUrl, proposal, this.httpOptions).pipe(
      tap(_ => this.log(`updated proposal id=${proposal.id}`)),
      catchError(this.handleError<any>('updateProposal'))
    );
  }

  addProposal(newProposal: Proposal): Observable<Proposal> {
    return this.http.post<Proposal>(this.proposalsUrl, newProposal, this.httpOptions).pipe(
      tap((proposal: Proposal) => this.log(`added proposal w/ id=${proposal.id}`)),
      catchError(this.handleError<Proposal>('addProposal'))
    );
  }

  deleteProposal(proposal: Proposal | number): Observable<Proposal> {
    const id = typeof proposal === 'number' ? proposal : proposal.id;
    const url = `${this.proposalsUrl}/${id}`;

    return this.http.delete<Proposal>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted proposal id=${id}`)),
      catchError(this.handleError<Proposal>('deleteProposal'))
    );
  }
}
