import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../mockBackend';
import { Item } from '../types';
import './ReportForm.css';

const ReportForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'lost' | 'found'>('lost');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = {
      id: (Math.random() * 1000).toString(),
      title,
      description,
      date: new Date().toISOString(),
      type,
    };
    addItem(newItem);
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="title">Report Lost or Found Item</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
          />
        </div>
        <div className="form-group">
          <label className="label">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'lost' | 'found')}
            className="select"
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;