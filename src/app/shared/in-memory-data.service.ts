import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const proposals = [
      { id: 11, name: 'Propose to change env' },
      { id: 12, name: 'National Elecion' },
      { id: 13, name: 'Global Warming' },
      { id: 14, name: 'Tax Law Aproval' },
      { id: 15, name: 'Pension Funds Aproval' }
    ];
    return {proposals};
  }
}
