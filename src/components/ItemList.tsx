import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../mockBackend';
import { Item } from '../types';
import './ItemList.css';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setItems(items);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <h1 className="title">All Items</h1>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item">
            <Link to={`/item/${item.id}`} className="item-link">{item.title}</Link>
            <p>ID: {item.id}</p> {/* Display the item ID */}
            <p>{item.description}</p>
            <p>{item.type === 'lost' ? 'Lost' : 'Found'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;