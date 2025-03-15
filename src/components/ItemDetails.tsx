import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../mockBackend';
import { Item } from '../types';
import './ItemDetails.css';

const ItemDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedItem = getItemById(id);
      if (fetchedItem) {
        setItem(fetchedItem);
      }
    }
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{item.title}</h1>
      <p className="description">{item.description}</p>
      <p className="status">{item.type === 'lost' ? 'Lost' : 'Found'}</p>
    </div>
  );
};

export default ItemDetails;