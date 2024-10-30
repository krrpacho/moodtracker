import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

const Calendar = ({ times = [], onDateSelect }) => { 
  const events = times;

  const handleDateClick = (arg) => {
    onDateSelect(arg.dateStr); 
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventDisplay="block"
      />
    </div>
  );
};

export default Calendar;
