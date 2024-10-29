import React, { useState } from 'react';
import './Notes.css';

const Notes = ({ add = [], onNoteAdded }) => {
    const [note, setNote] = useState('');
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

    const handleAddNote = () => {
        if (note.trim() || selectedEmoji) {
            onNoteAdded(`${selectedEmoji} ${note}`);
            setNote('');
            setSelectedEmoji('');
        }
    };

    const emojis = ["😁", "😀", "😊", "🙂", "😐", "😔", "☹️", "😭"];

    return (
        <div className="notes-container">
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
