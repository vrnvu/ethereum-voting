import { TestBed, inject } from '@angular/core/testing';

import { ProposalService } from './proposal.service';

describe('ProposalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProposalService]
    });
  });

  it('should be created', inject([ProposalService], (service: ProposalService) => {
    expect(service).toBeTruthy();
  }));
});
