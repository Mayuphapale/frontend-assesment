// src/components/KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const groupAndSortTickets = () => {
    let groupedTickets = {};

    tickets.forEach(ticket => {
      const groupKey = grouping === 'user' ? ticket.userId : grouping === 'priority' ? ticket.priority : ticket.status;
      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }
      groupedTickets[groupKey].push(ticket);
    });

    Object.keys(groupedTickets).forEach(group => {
      groupedTickets[group].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedTickets;
  };

  const groupedTickets = groupAndSortTickets();

  const getGroupName = (groupKey) => {
    if (grouping === 'user') {
      const user = users.find(user => user.id === groupKey);
      return user ? user.name : 'Unknown User';
    } else if (grouping === 'priority') {
      switch (groupKey) {
        case '4': return 'Urgent';
        case '3': return 'High';
        case '2': return 'Medium';
        case '1': return 'Low';
        case '0': return 'No Priority';
        default: return 'Unknown Priority';
      }
    } else {
      return groupKey;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="group">
          <h2>{getGroupName(group)}</h2>
          {groupedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;