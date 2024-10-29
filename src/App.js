import React, { useState } from 'react'; 
import './App.css';
import Calendar from './components/Calendar';
import Notes from './components/Notes';

function App() {
  const times = []; 
  const [notes, setNotes] = useState([]);  

  const handleNoteAdded = (newNote) => {
    setNotes([...notes, newNote]);       
  };

  return (
    <div className="App">
      <div className="page-container">
        <div className="left-side">
          <Calendar times={times} />
        </div>
        <div className="right-side">
          <Notes add={notes} onNoteAdded={handleNoteAdded} />
        </div>
      </div>
    </div>
  );
}

export default App;
