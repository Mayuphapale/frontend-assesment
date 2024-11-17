// src/components/TicketCard.js
import React from 'react';
import '../styles/TicketCard.css';
import { ReactComponent as UrgentIcon } from '../icons/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighIcon } from '../icons/Img - High Priority.svg';
import { ReactComponent as MediumIcon } from '../icons/Img - Medium Priority.svg';
import { ReactComponent as LowIcon } from '../icons/Img - Low Priority.svg';
import { ReactComponent as NoPriorityIcon } from '../icons/No-priority.svg';
import { ReactComponent as TodoIcon } from '../icons/To-do.svg';
import { ReactComponent as InProgressIcon } from '../icons/in-progress.svg';
import { ReactComponent as DoneIcon } from '../icons/Done.svg';
import { ReactComponent as CancelledIcon } from '../icons/Cancelled.svg';
import { ReactComponent as BacklogIcon } from '../icons/Backlog.svg';

const TicketCard = ({ ticket,grouping }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return <UrgentIcon />;
      case 3: return <HighIcon />;
      case 2: return <MediumIcon />;
      case 1: return <LowIcon />;
      case 0: return <NoPriorityIcon />;
      default: return null;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Todo': return <TodoIcon />;
      case 'In progress': return <InProgressIcon />;
      case 'Done': return <DoneIcon />;
      case 'Cancelled': return <CancelledIcon />;
      case 'Backlog': return <BacklogIcon />;
      default: return null;
    }
  };

  return (
    <div className="ticket-card">
      <div style={{display:'flex', justifyContent:"space-between"}}>
      <h3 style={{color:"#666"}} >{ticket.id}</h3>
       <img src='https://lh3.googleusercontent.com/-JpwwielaxPo/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkk0dbyLY5VpwKDv4vSqsNUuE3-93Q/photo.jpg?sz=46'  style={{height:"20px" , borderRadius: "100%"}} ></img>
      </div>
      <h3>{ticket.title}</h3>
      <p> <span className="tag-circle"></span> {ticket.tag.join(', ')}</p>

    </div>
  );
};

export default TicketCard;