import axios from 'axios';
import { Item } from './types';

const BASE_URL = 'http://127.0.0.1:8000/item';

export const getItems = async (): Promise<Item[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addItem = async (item: Item): Promise<void> => {
  await axios.post(BASE_URL, item);
};

export const updateItem = async (updatedItem: Item): Promise<void> => {
  await axios.put(`${BASE_URL}/${updatedItem.id}`, updatedItem);
};

export const getItemById = async (id: string): Promise<Item | undefined> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};