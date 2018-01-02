export class Proposal {
  id: number;
  name: string;
  description: string;
  category: {id, name};
}

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
