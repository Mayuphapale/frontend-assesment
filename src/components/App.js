// src/components/App.js
import React, { useState, useEffect } from 'react';
import DisplayOptions from './DisplayOptions';
import KanbanBoard from './KanbanBoard';
import { fetchTicketsAndUsers } from '../api';
import '../styles/App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    const getTicketsAndUsers = async () => {
      const data = await fetchTicketsAndUsers();
      setTickets(data.tickets);
      setUsers(data.users);
    };
    getTicketsAndUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  return (
    <div className="app">
      <DisplayOptions setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard tickets={tickets} users={users} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default App;