// src/components/TicketCard.js
import React from 'react';
import '../styles/TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Tags: {ticket.tag.join(', ')}</p>
    </div>
  );
};

export default TicketCard;