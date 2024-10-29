import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

const Calendar = ({ times = [], onTimeDeleted }) => { 

  const events = times; 

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <strong>{eventInfo.event.title}</strong>
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
        eventDisplay="block"
      />
    </div>
  );
};

export default Calendar;
