// import React from 'react';
// import Courses from "./screens/Courses";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import backgroundVideo from './assets/bg4.mp4'; 
// // import backgroundImage from './assets/img1.png';

// const App = () => {
//   return (
//     //<div className=" scrollbar-thin scrollbar-thumb-violet-300 scrollbar-track-violet-950 scrollbar-corner-purple-300 h-screen overflow-auto ">
//       <div className="relative bg-coffee-950 w-full min-h-screen overflow-auto  scrollbar-custom">
//         {/* <img
//           src = {backgroundImage}
//           alt="Background"
//           className="absolute top-0 left-0 w-full h-full object-cover -z-10">
//         </img> */}

//         {/* <video 
//           autoPlay 
//           loop 
//           muted 
//           className="absolute top-0 left-0 w-full h-full object-cover -z-10"
//         >
//           <source src={backgroundVideo} type="video/mp4" />
//         </video> */}

//         <div className="relative z-10 min-h-screen ">
//           <Navbar />
//           <Header />
//           <Courses />
//           <Footer />
//         </div>
//       </div>
//     //</div>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './screens/Courses';
import HandNotes from './screens/HandNotes';
import Header from './components/Header';

const App = () => {
  return (

    <Router>
      <div className="relative bg-coffee-950 w-full min-h-screen overflow-auto  scrollbar-custom">
        <Navbar />
        <Header />
        <Routes>
          {/* Default route for Courses */}
          <Route path="/" element={<Courses />} />
          {/* HandNotes route */}
          <Route path="/handnotes" element={<HandNotes />} />
          {/* Fallback route to handle any invalid paths */}
          <Route path="*" element={<Courses />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
