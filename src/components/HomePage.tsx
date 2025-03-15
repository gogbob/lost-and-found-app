import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../mockBackend';
import { Item } from '../types';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(getItems());
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lost and Found Items</h1>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item">
            <Link to={`/item/${item.id}`} className="item-link">{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/report" className="report-link">Report a new item</Link>
    </div>
  );
};

export default HomePage;