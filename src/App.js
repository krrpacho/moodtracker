import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Notes from './components/Notes';

function App() {
  const [entries, setEntries] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('moodTrackerEntries')) || {};
    setEntries(savedEntries);
  }, []);

  const handleNoteAdded = (newNote, date) => {
    const updatedEntries = { ...entries, [date]: newNote };
    setEntries(updatedEntries);
    localStorage.setItem('moodTrackerEntries', JSON.stringify(updatedEntries));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <div className="page-container">
        <div className="left-side">
          <Calendar entries={entries} onDateSelect={handleDateSelect} />
        </div>
        <div className="right-side">
          <Notes
            onNoteAdded={handleNoteAdded}
            selectedDate={selectedDate}
            selectedEntry={entries[selectedDate] || { emoji: '', note: '' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
