import React from 'react';
import Courses from "./screens/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import backgroundVideo from './assets/bg4.mp4'; 

const App = () => {
  return (
    //<div className=" scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-violet-950 scrollbar-corner-purple-300 h-screen overflow-auto ">
      <div className="relative w-full min-h-screen overflow-auto  scrollbar-custom">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 min-h-screen ">
          <Navbar />
          <Courses />
          <Footer />
        </div>
      </div>
    //</div>
  );
};

export default App;
