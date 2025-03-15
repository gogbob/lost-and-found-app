export interface Item {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'lost' | 'found';
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }