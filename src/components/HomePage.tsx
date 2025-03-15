import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItems, updateItem } from '../mockBackend';
import { Item } from '../types';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
      const fetchItems = async () => {
        const items = await getItems();
        setItems(items);
      };
      fetchItems();
    }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckboxChange = (id: string) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem: Item = { ...item, type: item.type === 'found' ? 'lost' : 'found' };
        updateItem(updatedItem);
        return updatedItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />
      {searchQuery && (
        <ul className="item-list">
          {filteredItems.map(item => (
            <li key={item.id} className="item">
              <Link to={`/item/${item.id}`} className="item-link">{item.title}</Link>
              <label>
                <input
                  type="checkbox"
                  checked={item.type === 'found'}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                Found
              </label>
            </li>
          ))}
        </ul>
      )}
      <Link to="/report" className="report-button">Report Item</Link>
    </div>
  );
};

export default HomePage;