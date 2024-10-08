import React, { useState } from 'react';

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className="grid justify-items-center m-5 md:m-10">
      <h1 className="animate-pulse text-7xl text-fuchsia-200 mt-10 font-serif font-extrabold">
        COURSE TRACKER
      </h1>

      <button
        className="animate-pulse font-bold text-sky-300 font-mono text-lg inline-block px-1 hover:underline underline-offset-2 hover:underline-slate-300 hover:text-slate-300"
        onClick={toggleOverlay}
      >
        Note from Creator
      </button>

      {/* Overlay Section */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-slate-950 bg-opacity-70 flex justify-center items-center z-50"
          onClick={toggleOverlay} // Close overlay on background click
        >
          <div
            className="relative bg-violet-300 bg-opacity-90 p-10 rounded-lg text-center max-w-md mx-auto shadow-xl shadow-violet-200 selection:text-slate-900"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
          >
            <p className="text-violet-950 font-mono font-medium">
              The content for
              <b className="text-sky-900"> CSE320, CSE470, CSE360, and CSE421 </b>
              is currently being updated and will be uploaded soon. Stay tuned!
            </p>

            <p className="text-red-800 font-mono font-medium mt-4">
              The materials are included as supplementary resources. Please refrain from any kind of plagiarism.
            </p>

            <p className="text-green-600 font-extrabold font-mono  mt-4">
              UI will be further updated 
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
