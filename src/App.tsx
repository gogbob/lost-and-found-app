import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ReportForm from './components/ReportForm';
import ItemDetails from './components/ItemDetails';
import './App.css'; // Import the App.css file

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Lost and Found</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
        <footer className="footer">
          <p>By Kevin and Christophe</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;