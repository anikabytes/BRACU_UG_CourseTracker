import React, { useState } from 'react';

const HandNotes = () => {
  const [message, setMessage] = useState('');

  const notes = [
    {
      title: "CSE110 HandNotes",
      link: "https://example.com/handnote1",
    },
    {
      title: "CSE111 HandNotes",
      link: "https://example.com/handnote2",
    },
    {
      title: "CSE220 HandNotes",
      link: "https://example.com/handnote3",
    },
    // Add more hand notes as needed
  ];

  const handleNoteClick = (note) => {
    if (!note.link) {
      setMessage("No hand notes available for this course.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setMessage('');
      window.open(note.link, '_blank'); 
    }
  };

  return (
    <div className="min-h-screen bg-opacity-35 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl m-5 sm:m-20 ">
        {message && (
          <div className="flex justify-center"> 
            <div className="font-mono text-center inline-block bg-headerNote-300  bg-opacity-100 p-1 text-coffee-200 mb-4 px-2">
              {message}
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-5">
          {notes.map((note, index) => (
            <div
              key={index}
              className="w-full rounded-xl shadow-md overflow-hidden cursor-pointer bg-greeny-500 border-greeny-300 hover:animate-pulse"
              onClick={() => handleNoteClick(note)}
            >
              <div className="p-8 text-center text-greeny-900">
                <div className="uppercase tracking-wide font-bold font-serif text-2xl">
                  {note.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandNotes;
