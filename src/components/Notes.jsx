import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = ({ onNoteAdded, selectedDate, selectedEntry }) => {
  const [note, setNote] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  useEffect(() => {
    
    if (selectedEntry) {
      setNote(selectedEntry.note || '');
      setSelectedEmoji(selectedEntry.emoji || '');
    }
  }, [selectedDate, selectedEntry]);

  const handleAddNote = () => {
    if (note.trim() || selectedEmoji) {
      onNoteAdded({ emoji: selectedEmoji, note }, selectedDate);
      setNote('');
      setSelectedEmoji('');
    }
  };

  const emojis = ["😁", "😀", "😊", "🙂", "😐", "😔", "☹️", "😭"];

  return (
    <div className="notes-container">
      <div className="date-display">{selectedDate}</div>
      <div className="notes-header">
        <button
          onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
          className="emoji-picker-toggle"
        >
          {selectedEmoji || "Choose Day's Emoji"}
        </button>
        {emojiPickerVisible && (
          <div className="emoji-picker">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedEmoji(emoji);
                  setEmojiPickerVisible(false);
                }}
                className={selectedEmoji === emoji ? "emoji-selected" : ""}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
        <button onClick={handleAddNote}>Add</button>
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write about your day..."
        rows="4"
        cols="50"
      />
    </div>
  );
};

export default Notes;
