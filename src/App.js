import React, { useState } from 'react'; 
import './App.css';
import Calendar from './components/Calendar';
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([]);  
  const [selectedDate, setSelectedDate] = useState('');

  const handleNoteAdded = (newNote) => {
    setNotes([...notes, { date: selectedDate, note: newNote }]); 
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <div className="page-container">
        <div className="left-side">
          <Calendar times={notes} onDateSelect={handleDateSelect} />
        </div>
        <div className="right-side">
          <Notes add={notes} onNoteAdded={handleNoteAdded} selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
