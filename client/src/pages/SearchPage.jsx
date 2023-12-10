import React from 'react';
import Note from './Note' ;

const SearchPage = () => {
   const [searchQuery, setSearchQuery] = React.useState('');

   handleSearch = (e) => {
       setSearchQuery(e.target.value);
   };

   ///////////// filter notes by search query ////////////////////////////////////////////////////////////
   const filterNotes = (note) => {
       return note.text.toLowerCase().includes(searchQuery.toLowerCase());
   };

   ///////////// filter journal ebntries by search query //////////////////////////////////////////////////
   const filterJournalEntries = (entry) => {
       return entry.title.toLowerCase().includes(searchQuery.toLowerCase())
           || entry.body.toLowerCase().includes(searchQuery.toLowerCase())
   };

   ///////////// combine notes and journal entries into one array /////////////////////////////////////////
   const filteredNotes = Note.notes.filter(filterNotes);
   const filteredJournalEntries = Note.journalEntries.filter(filterJournalEntries);

   return (
       <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
           <div className='bg-gray-100 bg-opacity-70 p-6 rounded-lg shadow-black-300 w-full max-w-lg lg:w-1/4'>
           <input
               className="search-bar"
               type="text"
               placeholder="Search"
               value={searchQuery}
               onChange={handleSearch}
           />
           <div className="search-results">
               {filteredNotes.map((note) => (
                   <Note
                       key={note.id}
                       id={note.id}
                       text={note.text}
                       date={note.date}
                       handleDelete={Note.handleDelete}
                   />
               ))}
               {filteredJournalEntries.map((entry) => (
                   <Note
                       key={entry.id}
                       id={entry.id}
                       title={entry.title}
                       body={entry.body}
                       date={entry.date}
                       handleDelete={Note.handleDelete}
                   />
               ))}
           </div>
       </div>
       
       
   </div>
       
   );
}

   export default SearchPage;