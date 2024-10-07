import React from 'react';
import Courses from "./screens/Courses";
import Navbar from "./components/Navbar";
import backgroundVideo from './assets/bg2.mp4'; // Import the video

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-auto scrollbar-custom">
      
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <Courses />
      </div>
    </div>
  );
};

export default App;

