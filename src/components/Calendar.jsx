import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

const Calendar = ({ entries, onDateSelect }) => { 
  const events = Object.keys(entries).map(date => ({
    title: entries[date].emoji,
    date: date,
  }));

  const handleDateClick = (arg) => {
    onDateSelect(arg.dateStr);
  };

  const renderEventContent = (eventInfo) => (
    <div
      onClick={() => handleDateClick({ dateStr: eventInfo.event.startStr })}
      style={{ cursor: 'pointer' }}
    >
      <strong>{eventInfo.event.title}</strong>
    </div>
  );

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        eventDisplay="block"
      />
    </div>
  );
};

export default Calendar;
