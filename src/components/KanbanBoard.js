// src/components/KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';
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
import { ReactComponent as Add } from '../icons/add.svg';
import { ReactComponent as Three } from '../icons/3 dot menu.svg';
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

  

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "Urgent": return <UrgentIcon />;
      case "High": return <HighIcon />;
      case "Medium": return <MediumIcon />;
      case "Low": return <LowIcon />;
      case "No Priority": return <NoPriorityIcon />;
      default: return null;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="group">
          <div className='headq' style={{display:'flex', justifyContent:"space-between"}}>
          <h2>  {getPriorityIcon(getGroupName(group))}  {getGroupName(group)} {getStatusIcon(getGroupName(group))} 
          <span style={{color:"gray",fontSize:"16px" , paddingLeft:"10px"}}>{groupedTickets[group].length}   </span> 
          </h2>
          <span style={{paddingTop:"20px"}}><Add/> <Three/></span> 
            </div>
          <div>
          {groupedTickets[group].map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} grouping={grouping} />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;