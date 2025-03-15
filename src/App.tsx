import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReportForm from './components/ReportForm';
import ItemDetails from './components/ItemDetails';
import ItemList from './components/ItemList';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Link to="/" className="title-link">
          <h1>Lost and Found</h1>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
        <footer className="footer">
          <p>By Christophe and Kevin</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;