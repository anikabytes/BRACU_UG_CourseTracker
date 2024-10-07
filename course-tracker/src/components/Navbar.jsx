import githubIcon from "../assets/github.jpg";

const Navbar = () => {
  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/14fWQqjFVNla1bhUlqJ5OVp72tKqxM2WPzxnc4RqdMss/edit?usp=sharing"; 
  const githubLink = "https://github.com/anikabytes"; 

  return (
    <div className=" w-full flex justify-between items-center p-5 ">
      {/* GitHub Logo */}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <span className="text-violet-300 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-slate-400 hover:text-slate-400">GitHub</span>
      </a>

      <a
        href={spreadsheetLink}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-violet-300 font-bold py-2 px-4 rounded hover:underline underline-offset-2 hover:underline-slate-400 hover:text-slate-400"
      >
        UG Courses 
      </a>
    </div>
  );
};

export default Navbar;


