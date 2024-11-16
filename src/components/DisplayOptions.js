// src/components/DisplayOptions.js
import React from 'react';
import '../styles/DisplayOptions.css';

const DisplayOptions = ({ setGrouping, setSorting }) => {
  return (
    <div className="display-options">
      <select onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">By Status</option>
        <option value="user">By User</option>
        <option value="priority">By Priority</option>
      </select>
      <select onChange={(e) => setSorting(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default DisplayOptions;