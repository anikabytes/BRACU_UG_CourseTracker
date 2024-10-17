import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center bottom-7">
        <div className="text-coffee-200 text-center mb-10 font-mono ">
        © October, 2024 |     
        <a
        href={"https://github.com/anikabytes"}
        target="_blank"
        rel="noopener noreferrer"
        className = "hover:text-orange-200 ">
          | by anikabytes 
        </a>
        

        {/* <p className="text-coffee-200 ">Version 1.0</p> */}
        </div>
    </div>
  )
}

export default Footer

