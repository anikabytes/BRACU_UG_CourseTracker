import React, { useState } from 'react';

const Courses = () => {
  const [message, setMessage] = useState('');

  const courses = [
    {
      title: "CSE110",
      link: "https://github.com/anikabytes/BRACU_CSE110_Programming_Language_I",
      done: "yes",
      semester: "Summer'21"
    },
    {
      title: "CSE111",
      link: "https://github.com/anikabytes/BRACU_CSE111_Programming_Language_II",
      done: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE220",
      link: "https://github.com/anikabytes/BRACU_CSE220_Data_Structures",
      done: "yes",
      semester: "Summer'22"
    },
    {
      title: "CSE221",
      link: "https://github.com/anikabytes/BRACU_CSE221_Algorithms",
      done: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE230",
      link: "https://github.com/anikabytes/BRACU_CSE230_Discrete_Mathematics",
      done: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE250",
      link: "https://github.com/anikabytes/BRACU_CSE250_Circuits_And_Electronics",
      done: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE251",
      link: "https://github.com/anikabytes/BRACU_CSE251_Electronic_Devices_And_Circuits",
      done: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE260",
      link: "https://github.com/anikabytes/BRACU_CSE260_Digital_Logic_Design",
      done: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE320",
      link: "https://github.com/anikabytes/BRACU_CSE320_Data_Communications",
      done: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE321",
      link: "https://github.com/anikabytes/BRACU_CSE321_Operating_Systems",
      done: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE330",
      link: "https://github.com/anikabytes/BRACU_CSE330_Numerical_Methods",
      done: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE331",
      link: "https://github.com/anikabytes/BRACU_CSE331_Automata_And_Computability",
      done: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE340",
      link: "",
      done: "no",
      semester: "Fall'24"
    },
    {
      title: "CSE341",
      link: "https://github.com/anikabytes/BRACU_CSE341_Microprocessors",
      done: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE350",
      link: "https://github.com/anikabytes/BRACU_CSE350_Digital_Electronics_And_Pulse_Techniques",
      done: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE360",
      link: "https://github.com/anikabytes/BRACU_CSE360_Computer_Interfacing",
      done: "yes",
      semester: "Summer'24"
    },
    {
      title: "CSE370",
      link: "https://github.com/anikabytes/BRACU_CSE370_Database_Systems",
      done: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE420",
      link: "https://github.com/anikabytes/BRACU_CSE420_Compiler_Designs",
      done: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE421",
      link: "https://github.com/anikabytes/BRACU_CSE421_Computer_Networks",
      done: "yes",
      semester: "Summer'24"
    },
    {
      title: "CSE422",
      link: "https://github.com/anikabytes/BRACU_CSE422_Artificial_Intelligence",
      done: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE423",
      link: "https://github.com/anikabytes/BRACU_CSE423_Computer_Graphics",
      done: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE427",
      link: "https://github.com/anikabytes/BRACU_CSE427_Machine_Learning",
      done: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE428",
      link: "",
      done: "no",
      semester: "Fall'24"
    },
    {
      title: "CSE460",
      link: "",
      done: "no",
      semester: "Fall'24"
    },
    {
      title: "CSE461",
      link: "https://github.com/anikabytes/BRACU_CSE461_Introduction_to_Robotics",
      done: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE470",
      link: "https://github.com/anikabytes/BRACU_CSE470_Software_Engineering",
      done: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE471",
      link: "https://github.com/anikabytes/BRACU_CSE471_System_Analysis_And_Design",
      done: "yes",
      semester: "Fall'23"
    },
  ];

  const handleBoxClick = (courses) => {
    if (courses.done === "no") {
      setMessage("Course Not Done");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setMessage('');
      window.location.href = courses.link;
    }
  };

  return (
    <div className="min-h-screen bg-opacity-35 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl m-5 sm:m-20 p-5">
        <div className="grid justify-items-center m-5 md:m-10">
          <h1 className="animate-pulse text-7xl text-cyan-300 mt-10 font-serif font-extrabold">COURSE TRACKER</h1>
        </div>

        {message && (
          <div className="text-center  text-red-500 mb-4">
            {message}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-5">
          {courses.map((course, index) => {
            const isDone = course.done === "yes";
            const textColor = isDone ? 'text-blue-500' : 'text-red-500';
            const shadowColor = isDone ? 'shadow-blue-800' : 'shadow-red-800';
            const hover = isDone ? 'hover:animate-pulse' : '';

            return (
              <div
                key={index}
                className={`w-full rounded-xl shadow-md overflow-hidden cursor-pointer ${hover} ${shadowColor}`}
                onClick={() => handleBoxClick(course)}
              >
                <div className={`p-8 text-center ${textColor}`}>
                  <div className="uppercase tracking-wide text-lg font-semibold">
                    <a href={course.link} className={textColor} onClick={(e) => { if (!isDone) e.preventDefault(); }}>
                      {course.title}
                    </a>
                  </div>
                  <div className={`mt-2 text-sm text-yellow-200 font-mono`}>{course.semester}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
