

// const Navbar = () => {
//   const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing"; 
//   const githubLink = "https://github.com/anikabytes"; 

//   return (
//     <div className=" w-full flex justify-between items-center p-5 ">
      
//       <a
//         href={githubLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center"
//       >
//         <span className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700">GitHub</span>
//       </a>

//       <a
//         href={spreadsheetLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className=" text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700"
//       >
//         UG Courses 
//       </a>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing";

  return (
    <div className="w-full flex justify-between items-center p-5">
      <Link to="/handnotes" className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700">
        HandNotes
      </Link>

      <a
        href={spreadsheetLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700"
      >
        UG Courses
      </a>
    </div>
  );
};

export default Navbar;
