import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);
  
  const students = [
    { id: "student1", name: "Jommel" },
    { id: "student2", name: "Lenerd" },
    { id: "student3", name: "Nico" }
  ];

  return (
    <nav className="bg-gray-800 h-screen w-64 fixed left-0 top-0 p-4">
      <div className="mb-8">
        <h1 className="text-white text-xl font-bold mb-4">Students Profile</h1>
      </div>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg ${
                isActive 
                ? 'bg-gray-700 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Home
          </NavLink>
        </li>
        <li className="space-y-1">
          <button
            onClick={() => setIsStudentsOpen(!isStudentsOpen)}
            className="flex items-center w-full p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            Students
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              isStudentsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {students.map((student) => (
              <NavLink
                key={student.id}
                to={`/students/${student.id}`}
                className={({ isActive }) =>
                  `flex items-center p-2 pl-10 rounded-lg ${
                    isActive 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                {student.name}
              </NavLink>
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;