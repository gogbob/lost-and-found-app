import { Item } from './types';

let items: Item[] = [
  { id: '1', title: 'Lost Wallet', description: 'Black leather wallet', date: '2025-03-01', type: 'lost' },
  { id: '2', title: 'Found Keys', description: 'Set of car keys', date: '2025-03-05', type: 'found' },
];

export const getItems = (): Item[] => {
  return items;
};

export const addItem = (item: Item): void => {
  items.push(item);
};

export const getItemById = (id: string): Item | undefined => {
  return items.find(item => item.id === id);
};