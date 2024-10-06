import Courses from "./screens/Courses";
import Projects from "./screens/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  

  return (
    <div className="bg-slate-900 w-full h-screen overflow-auto scrollbar-custom">
      <Navbar />
     <Courses />

     <Projects />
    </div>
  );
};

export default App;


