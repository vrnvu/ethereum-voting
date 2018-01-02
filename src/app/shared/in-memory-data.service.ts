import { InMemoryDbService } from 'angular-in-memory-web-api';

const cat0 = {
  id: 0,
  name: 'General'
};

const cat1 = {
    id: 1,
    name: 'Health'
  };

const cat2 = {
  id: 2,
  name: 'Economy'
};

const cat3 = {
  id: 3,
  name: 'Environment'
};

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const proposals = [
      { id: 11, name: 'Propose to change env', category: cat1 },
      { id: 12, name: 'Reduce Polution', category: cat1 },
      { id: 13, name: 'Pension Funds Approval' , category: cat2 },
      { id: 14, name: 'Tax Law Approval', category: cat2 },
      { id: 15, name: 'Global Warming', category: cat3 },
      { id: 16, name: 'Stop Oil Wars', category: cat0 },
      { id: 17, name: 'National Elecion', category: cat2 },
      { id: 18, name: 'Global Warming 2' , category: cat3 },
      { id: 19, name: 'Tax Law Aproval 2', category: cat2 },
      { id: 20, name: 'Random Proposition', category: cat0}
    ];
    return {proposals};
  }
}
