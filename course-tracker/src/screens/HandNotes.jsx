import React, { useState } from 'react';


const HandNotes = () => {
  const [message, setMessage] = useState('');

  const notes = [
    {
      title: "CSE110",
      link: "",
      updated: "no",
      semester: "Summer'21"
    },
    {
      title: "CSE111",
      link: "",
      updated: "no",
      semester: "Spring'22"
    },
    {
      title: "CSE220",
      link: "",
      updated: "no",
      semester: "Summer'22"
    },
    {
      title: "CSE221",
      link: "",
      updated: "no",
      semester: "Fall'22"
    },
    {
      title: "CSE230",
      link: "",
      updated: "no",
      semester: "Spring'22"
    },
    {
      title: "CSE250",
      link: "https://drive.google.com/drive/u/0/folders/1izyOvRFhQHkKsK9CO4tlkd6lN4HGyAcD",
      updated: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE251",
      link: "https://drive.google.com/drive/u/0/folders/1IBCjX10qMkKLKnxhb-FKTJz7-uPvqrqd",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE260",
      link: "",
      updated: "no",
      semester: "Spring'22"
    },
    {
      title: "CSE320",
      link: "",
      updated: "no",
      semester: "Spring'24"
    },
    {
      title: "CSE321",
      link: "https://drive.google.com/drive/folders/1mMLskfur4hSfROb1JAVfubnUhYXx0JCw?usp=drive_link",
      updated: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE330",
      link: "",
      updated: "no",
      semester: "Fall'22"
    },
    {
      title: "CSE331",
      link: "https://drive.google.com/drive/folders/14M2LWv7wZBQtx_2-dyCdQ2AsgaoAXJ2P?usp=drive_link",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE340",
      link: "https://drive.google.com/drive/folders/1_rDn4XnccJP89bVgLtcftWSHcODClsWq?usp=drive_link",
      updated: "yes",
      semester: "Fall'24"
    },
    {
      title: "CSE341",
      link: "",
      updated: "no",
      semester: "Spring'24"
    },
    {
      title: "CSE350",
      link: "",
      updated: "no",
      semester: "Summer'23"
    },
    {
      title: "CSE360",
      link: "",
      updated: "no",
      semester: "Summer'24"
    },
    {
      title: "CSE370",
      link: "https://drive.google.com/drive/folders/1Hj9SrgUgfDRVpqIGcEAdqbyfbNtCIDv6?usp=drive_link",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE420",
      link: "https://drive.google.com/drive/folders/1amlEUDQPRRLWqBYsG5rSe-BKuLMF8FxX?usp=drive_link",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE421",
      link: "",
      updated: "no",
      semester: "Summer'24"
    },
    {
      title: "CSE422",
      link: "https://drive.google.com/drive/folders/1RlcsaPm26cuGwlwbLTL6gzDFxMsm3RAe?usp=drive_link",
      updated: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE423",
      link: "https://drive.google.com/drive/folders/1zrsbxDbZ9Q_7oa5l3tmlHyZ7ylVelh6N?usp=drive_link",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE427",
      link: "https://drive.google.com/drive/u/0/folders/1yn7gPXbmEv261SHCoxrFrQG7gtTHVnx7",
      updated: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE428",
      link: "https://drive.google.com/drive/folders/1Bomnq0--fMK4bMNyxDeDxym8BUgAni--?usp=drive_link",
      updated: "yes",
      semester: "Fall'24"
    },
    {
      title: "CSE460",
      link: "https://drive.google.com/drive/folders/1PKCfN6e7gw-1J6chvamKIgj8DlICY7e5?usp=drive_link",
      updated: "yes",
      semester: "Fall'24"
    },
    {
      title: "CSE461",
      link: "https://drive.google.com/drive/folders/1kuxAqxVQqADnY6v_DAxj3g2Kjommuwfz?usp=drive_link",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE470",
      link: "",
      updated: "no",
      semester: "Spring'24"
    },
    {
      title: "CSE471",
      link: "https://drive.google.com/drive/folders/1ccs-0YaDCQOh1x0al7AnFBTLr9iLAwl_?usp=drive_link",
      updated: "yes",
      semester: "Fall'23"
    },
  ];

  const handleNoteClick = (note) => {
    if (note.link) {
      setMessage('');
      window.open(note.link, '_blank'); 
    }
  };

  return (
    <div className="min-h-screen bg-opacity-35 text-white flex flex-col justify-center items-center">
      <h1 className=" text-3xl text-coffee-300 mt-10 font-serif font-extrabold">
        HAND NOTES 
      </h1>
      <div className="w-full max-w-5xl m-5 sm:m-20 ">
        {message && (
          <div className="flex justify-center"> 
            <div className="font-mono text-center inline-block bg-headerNote-300 bg-opacity-100 p-1 text-coffee-200 mb-4 px-2">
              {message}
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-5">
          {notes
            .filter(note => note.updated === "yes") // Filter notes that are updated
            .map((note, index) => (
              <div
                key={index}
                className="w-full rounded-xl shadow-md overflow-hidden cursor-pointer bg-yellow-100 border-greeny-300 hover:animate-pulse"
                onClick={() => handleNoteClick(note)}
              >
                <div className="p-8 text-center text-yellow-800">
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
