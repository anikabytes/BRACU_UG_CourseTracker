import React from 'react';

const Projects = () => {
  const projects = [

    
    {
      title: "Tic Tac Toe",
      course: "CSE341",
      link: "https://github.com/anikabytes/BRACU_CSE341_TicTacToe"
    },

    {
      title: "Music Streaming Service",
      course: "CSE370",
      link: "https://github.com/anikabytes/BRACU_CSE370_Database_Systems_Project"
    },
    {
      title: "Stress Level Detection",
      course: "CSE422",
      link: "https://github.com/anikabytes/BRACU_CSE422_Student_Stress_Level_Detection"
    },
    {
      title: "Snake Game",
      course: "CSE423",
      link: "https://github.com/anikabytes/BRACU_CSE423_Snake_Game"
    },
    {
      title: "DIY Design and Collaboration Website",
      course: "CSE470",
      link: "https://github.com/anikabytes/CSE470_DIY_Design_And_Collaboration_Website"
    },

  ];

  const handleBoxClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-opacity-35 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl   m-5 sm:m-20 p-5">
        <div className="grid justify-items-center m-5 md:m-10">
          <h1 className="animate-pulse text-7xl text-orange-400 mt-10 font-serif font-extrabold">PROJECTS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-border-pulse w-full bg-opacity-35 rounded-xl shadow-md shadow-orange-200 overflow-hidden hover:animate-pulse cursor-pointer"
              onClick={() => handleBoxClick(project.link)}
            >
              <div className="p-5 text-center">
                <div className="uppercase tracking-wide text-lg font-semibold text-orange-400 font-serif">
                  <a href={project.link}>{project.title}</a>
                </div>
              </div>
              <div className="text-center text-yellow-200 font-mono" > {project.course} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
