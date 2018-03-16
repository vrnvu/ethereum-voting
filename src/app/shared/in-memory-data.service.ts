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
      { id: 11, name: 'Propose to change env', category: cat1, description: 'Lorem ipsum dolor sit amet,' +
        ' consectetur adipiscing elit.Cras quis lectus nec sapien sagittis cursus id in diam. Proin congue tellus a magna pellentesque,' +
        ' non sollicitudin risus fringilla.'},
      { id: 12, name: 'Reduce Polution', category: cat1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 13, name: 'Pension Funds Approval' , category: cat2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 14, name: 'Tax Law Approval', category: cat2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 15, name: 'Global Warming', category: cat3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 16, name: 'Stop Oil Wars', category: cat0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    ];
    return {proposals};
  }
}
