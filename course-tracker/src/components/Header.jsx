// import React, { useState } from 'react';

// const Header = () => {
//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);

//   const toggleOverlay = () => {
//     setIsOverlayVisible(!isOverlayVisible);
//   };

//   return (
//     <div className="grid justify-items-center m-5 md:m-10">
//       <h1 className=" text-7xl text-coffee-300 mt-10 font-serif font-extrabold">
//         COURSE TRACKER
//       </h1>

//       <button
//         className=" font-bold text-coffee-200 font-mono text-lg inline-block px-1 hover:underline-choco-700 hover:text-choco-700"
//         onClick={toggleOverlay}
//       >
//         Note from Creator
//       </button>

//       {/* Overlay Section */}
//       {isOverlayVisible && (
//         <div
//           className="fixed inset-0 bg-coffee-900 bg-opacity-90 flex justify-center items-center z-50"
//           onClick={toggleOverlay} // Close overlay on background click
//         >
//           <div
//             className="relative bg-headerNote-500 bg-opacity-100 p-10 rounded-lg text-center max-w-md mx-auto shadow-xl  selection:text-slate-900"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
//           >
//             <p className="text-choco-550 font-mono font-medium">
              
//                <b className="text-coffee-900"> Hand Notes will be uploaded gradually </b> 
             
//             </p>

//             <p className="text-choco-550 font-mono font-medium mt-4">
//               The materials are included as supplementary resources. Please refrain from any kind of plagiarism.
//             </p>

//             <p className="text-headerNote-300 font-extrabold font-mono  mt-4">
//               *** UI will be updated further !!! ***
//             </p>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  // Function to navigate to HandNotes page
  // const goToHandNotes = () => {
  //   navigate('/handnotes'); // Navigate to HandNotes page
  // };

  return (
    <div className="grid justify-items-center m-5 md:m-10">
      <h1 className=" text-7xl text-coffee-300 mt-10 font-serif font-extrabold">
        COURSE TRACKER
      </h1>

      <button
        className="font-bold text-coffee-200 font-mono text-lg inline-block px-1 hover:underline-choco-700 hover:text-choco-700 "
        onClick={toggleOverlay}
      >
        Note from Creator
      </button>

      {/* Button to navigate to HandNotes page */}
      {/* <button
        className="mt-2 bg-choco-700 text-white font-bold py-2 px-4 rounded hover:bg-choco-800 hover:bg-coffee-300 hover:text-choco-900"
        onClick={goToHandNotes}
      >
        Hand Notes
      </button> */}

      {/* Overlay Section */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-coffee-900 bg-opacity-90 flex justify-center items-center z-50"
          onClick={toggleOverlay} // Close overlay on background click
        >
          <div
            className="relative bg-headerNote-500 bg-opacity-100 p-10 rounded-lg text-center max-w-md mx-auto shadow-xl selection:text-slate-900"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
          >
            <p className="text-choco-550 font-mono font-medium">
              <b className="text-coffee-900"> Hand Notes will be uploaded gradually </b> 
            </p>

            <p className="text-choco-550 font-mono font-medium mt-4">
              The materials are included as supplementary resources. Please refrain from any kind of plagiarism.
            </p>

            <p className="text-headerNote-300 font-extrabold font-mono mt-4">
              *** UI will be updated further !!! ***
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;


