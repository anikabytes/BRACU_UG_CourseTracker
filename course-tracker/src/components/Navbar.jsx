

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


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing";

//   return (
//     <div className="w-full flex justify-between items-center p-5">
//       {/* <Link to="/handnotes" className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700">
//         HandNotes
//       </Link> */}

//       <a
//         href={spreadsheetLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700"
//       >
//         UG Courses
//       </a>
//     </div>
//   );
// };

// export default Navbar;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'; 

// const Navbar = ({ toggleOverlay }) => {
//   const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing"; 

//   const navigate = useNavigate(); // Initialize useNavigate

//     // Function to navigate to HandNotes page
//   const goToHandNotes = () => {
//     navigate('/handnotes'); // Navigate to HandNotes page
//   };

//   return (
//     <div className="w-full flex justify-between items-center p-5">
//       {/* Link to UG Courses */}
//       <a
//         href={spreadsheetLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700"
//       >
        
//       </a>

//       {/* Hand Notes link */}
//       {/* <Link
//         to="/handnotes"
//         className="text-coffee-200 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-choco-700 hover:text-choco-700"
//       >
//         Hand Notes
//       </Link> */}


//             {/* Button to navigate to HandNotes page */}
//       <button
//         className="mt-2 bg-choco-700 text-white font-bold py-2 px-4 rounded hover:bg-choco-800 hover:bg-coffee-300 hover:text-choco-900"
//         onClick={goToHandNotes}
//       >
//         Hand Notes
//       </button>

    
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ toggleOverlay }) => {
  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing"; 
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Function to navigate to HandNotes page
  const handleNavigation = () => {
    if (location.pathname === '/handnotes') {
      // If currently on Hand Notes, navigate back to Courses
      navigate('/'); // Navigate back to Courses
    } else {
      // If currently on Courses, navigate to Hand Notes
      navigate('/handnotes');
    }
  };

  // Conditional class names for button styles
  const buttonClass = location.pathname === '/handnotes'
    ? "bg-coffee-300 text-choco-900 hover:bg-yellow-100 hover:text-choco-900" // Style for 'Back to Courses'
    : "bg-headerNote-500 text-choco-900 hover:text-choco-900 hover:bg-greeny-300"; // Style for 'Hand Notes'

  return (
    <div className="w-full flex justify-between items-center p-5  ">
      {/* Link to UG Courses */}
      <a
        href={""}
        
      >
        
      </a>

      {/* Button to navigate to HandNotes or back to Courses */}
      <button
        className={`mt-2 font-bold py-2 px-4 rounded ${buttonClass}`}
        onClick={handleNavigation}
      >
        {location.pathname === '/handnotes' ? 'Courses' : 'Hand Notes'}
      </button>
    </div>
  );
};

export default Navbar;
