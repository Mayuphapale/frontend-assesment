// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Correct the path to the App component
import './styles/index.css'; // Correct the path to index.css

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);