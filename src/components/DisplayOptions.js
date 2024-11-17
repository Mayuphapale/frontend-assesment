
import React, { useState, useEffect, useRef } from 'react';
import '../styles/DisplayOptions.css';
import { ReactComponent as DisplayIcon } from '../icons/Display.svg';
import { ReactComponent as DownIcon } from '../icons/down.svg';

const DisplayOptions = ({ setGrouping, setSorting }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="display-options" ref={dropdownRef}>
      <div className="display-icon" onClick={toggleDropdown}>
        <DisplayIcon />
        <span>Display</span>
        <DownIcon />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <div className="dropdown-section">
            <label>Grouping</label>
            <select onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-section">
            <label>Ordering</label>
            <select onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayOptions;