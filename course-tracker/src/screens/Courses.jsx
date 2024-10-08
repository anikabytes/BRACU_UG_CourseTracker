import React, { useState } from 'react';

const Courses = () => {
  const [message, setMessage] = useState('');
  

  const courses = [
    {
      title: "CSE110",
      link: "https://github.com/anikabytes/BRACU_CSE110_Programming_Language_I",
      done: "yes",
      updated: "yes",
      semester: "Summer'21"
    },
    {
      title: "CSE111",
      link: "https://github.com/anikabytes/BRACU_CSE111_Programming_Language_II",
      done: "yes",
      updated: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE220",
      link: "https://github.com/anikabytes/BRACU_CSE220_Data_Structures",
      done: "yes",
      updated: "yes",
      semester: "Summer'22"
    },
    {
      title: "CSE221",
      link: "https://github.com/anikabytes/BRACU_CSE221_Algorithms",
      done: "yes",
      updated: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE230",
      link: "https://github.com/anikabytes/BRACU_CSE230_Discrete_Mathematics",
      done: "yes",
      updated: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE250",
      link: "https://github.com/anikabytes/BRACU_CSE250_Circuits_And_Electronics",
      done: "yes",
      updated: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE251",
      link: "https://github.com/anikabytes/BRACU_CSE251_Electronic_Devices_And_Circuits",
      done: "yes",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE260",
      link: "https://github.com/anikabytes/BRACU_CSE260_Digital_Logic_Design",
      done: "yes",
      updated: "yes",
      semester: "Spring'22"
    },
    {
      title: "CSE320",
      link: "https://github.com/anikabytes/BRACU_CSE320_Data_Communications",
      done: "yes",
      updated: "no",
      semester: "Spring'24"
    },
    {
      title: "CSE321",
      link: "https://github.com/anikabytes/BRACU_CSE321_Operating_Systems",
      done: "yes",
      updated: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE330",
      link: "https://github.com/anikabytes/BRACU_CSE330_Numerical_Methods",
      done: "yes",
      updated: "yes",
      semester: "Fall'22"
    },
    {
      title: "CSE331",
      link: "https://github.com/anikabytes/BRACU_CSE331_Automata_And_Computability",
      done: "yes",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE340",
      link: "",
      done: "no",
      updated: "",
      semester: "Fall'24"
    },
    {
      title: "CSE341",
      link: "https://github.com/anikabytes/BRACU_CSE341_Microprocessors",
      done: "yes",
      updated: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE350",
      link: "https://github.com/anikabytes/BRACU_CSE350_Digital_Electronics_And_Pulse_Techniques",
      done: "yes",
      updated: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE360",
      link: "https://github.com/anikabytes/BRACU_CSE360_Computer_Interfacing",
      done: "yes",
      updated: "no",
      semester: "Summer'24"
    },
    {
      title: "CSE370",
      link: "https://github.com/anikabytes/BRACU_CSE370_Database_Systems",
      done: "yes",
      updated: "yes",
      semester: "Spring'23"
    },
    {
      title: "CSE420",
      link: "https://github.com/anikabytes/BRACU_CSE420_Compiler_Designs",
      done: "yes",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE421",
      link: "https://github.com/anikabytes/BRACU_CSE421_Computer_Networks",
      done: "yes",
      updated: "no",
      semester: "Summer'24"
    },
    {
      title: "CSE422",
      link: "https://github.com/anikabytes/BRACU_CSE422_Artificial_Intelligence",
      done: "yes",
      updated: "yes",
      semester: "Spring'24"
    },
    {
      title: "CSE423",
      link: "https://github.com/anikabytes/BRACU_CSE423_Computer_Graphics",
      done: "yes",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE427",
      link: "https://github.com/anikabytes/BRACU_CSE427_Machine_Learning",
      done: "yes",
      updated: "yes",
      semester: "Summer'23"
    },
    {
      title: "CSE428",
      link: "",
      done: "no",
      updated: "",
      semester: "Fall'24"
    },
    {
      title: "CSE460",
      link: "",
      done: "no",
      updated: "",
      semester: "Fall'24"
    },
    {
      title: "CSE461",
      link: "https://github.com/anikabytes/BRACU_CSE461_Introduction_to_Robotics",
      done: "yes",
      updated: "yes",
      semester: "Fall'23"
    },
    {
      title: "CSE470",
      link: "https://github.com/anikabytes/BRACU_CSE470_Software_Engineering",
      done: "yes",
      updated: "no",
      semester: "Spring'24"
    },
    {
      title: "CSE471",
      link: "https://github.com/anikabytes/BRACU_CSE471_System_Analysis_And_Design",
      done: "yes",
      updated: "yes",
      semester: "Fall'23"
    },
  ];

  const handleBoxClick = (course) => {
    if (course.done === "no" ) {
      setMessage("Course Not Done");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else if (course.updated === "no"){
      setMessage("No content Uplaoded");
      window.scrollTo({top:0,behaviour:'smooth'});
    }else {
      setMessage('');
      window.open(course.link, '_blank'); 
    }
  };



  return (
    <div className="min-h-screen bg-opacity-35 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl m-5 sm:m-20 ">

        {message && (
          <div className="flex justify-center"> 
            <div className="font-mono text-center inline-block bg-sky-300 bg-opacity-25 p-1 text-red mb-4 px-2">
              {message}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 p-5">
          {courses.map((course, index) => {
            const isDone = course.done === "yes";
            const notUpdated = course.updated === "no";
            const textColorPrev = isDone ? 'text-sky-300' : 'text-red-300';
            const textColor = notUpdated ? 'text-yellow-300' : textColorPrev;
            const shadowColorPrev = isDone ? 'shadow-blue-300' : 'shadow-red-300';
            const shadowColor = notUpdated ? 'shadow-yellow-300' : shadowColorPrev;
            const bgColorPrev =isDone ? 'bg-sky-800':'bg-red-800';
            const bgColor = notUpdated ? 'bg-yellow-500' : bgColorPrev;
            const hover = (isDone && !notUpdated) ? 'hover:animate-pulse' : '';


            return (
              <div
                key={index}
                className={`w-full rounded-xl shadow-md overflow-hidden cursor-pointer bg-opacity-35 ${hover} ${shadowColor} ${bgColor}`}
                onClick={() => handleBoxClick(course)}
              >
                <div className={`p-8 text-center ${textColor}`}>
                  <div className="uppercase tracking-wide text-lg font-semibold">
                    {course.title}
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
