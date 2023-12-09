import React, { useState } from 'react';

function Note() {
  const [notes, setNotes] = useState([
    { id: 1, type: 'quest', text: 'Sample quest 1' },
    { id: 2, type: 'quest', text: 'Sample quest 2' },
    // Add more initial quests if needed
  ]);

  const [journalEntries, setJournalEntries] = useState([
    { id: 1, type: 'journal', title: 'Sample Journal Entry 1', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, type: 'journal', title: 'Sample Journal Entry 2', content: 'Consectetur adipiscing elit.' },
    // Add more initial journal entries if needed
  ]);

  const [newNote, setNewNote] = useState('');
  const [newJournalTitle, setNewJournalTitle] = useState('');
  const [newJournalContent, setNewJournalContent] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: Date.now(), type: 'quest', text: newNote }]);
      setNewNote('');
    }
  };

  const addJournalEntry = () => {
    if (newJournalTitle.trim() !== '' && newJournalContent.trim() !== '') {
      setJournalEntries([
        ...journalEntries,
        { id: Date.now(), type: 'journal', title: newJournalTitle, content: newJournalContent },
      ]);
      setNewJournalTitle('');
      setNewJournalContent('');
    }
  };

  const editNote = (id, type) => {
    // Implement edit functionality here
    // You may open a modal or update the state to allow editing
  };

  const deleteNote = (id, type) => {
    if (type === 'quest') {
      setNotes(notes.filter((note) => note.id !== id));
    } else if (type === 'journal') {
      setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
      <div className='bg-gray-100 bg-opacity-80 p-6 rounded shadow-lg w-full max-w-lg lg:w-1/4'>
        <h1 className='text-3xl font-bold text-center mb-4'>Quest Log</h1>
        <div className='flex flex-col mb-4'>
          <input
            type="text"
            placeholder='Journal title'
            className='py-2 px-4 border rounded mb-2 focus:outline-none'
            value={newJournalTitle}
            onChange={(e) => setNewJournalTitle(e.target.value)}
          />
          <textarea
            placeholder='Journal content'
            className='py-2 px-4 border rounded h-20 focus:outline-none'
            value={newJournalContent}
            onChange={(e) => setNewJournalContent(e.target.value)}
          />
          <button
            className='bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded'
            onClick={addJournalEntry}
          >
            Add Journal Entry
          </button>
        </div>
        <ul>
          {journalEntries.map((entry) => (
            <li key={entry.id} className='bg-white p-3 rounded shadow-lg mb-3'>
              <h3 className='text-lg font-bold'>{entry.title}</h3>
              <p>{entry.content}</p>
              <div className='flex items-center justify-between mt-2'>
                <button
                  className='mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:to-gray-700'
                  onClick={() => editNote(entry.id, entry.type)}
                >
                  Edit
                </button>
                <button
                  className='mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:to-gray-700'
                  onClick={() => deleteNote(entry.id, entry.type)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Note;
