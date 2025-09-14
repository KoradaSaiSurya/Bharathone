import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StudentProvider>
      <App />
    </StudentProvider>
  </BrowserRouter>
);
