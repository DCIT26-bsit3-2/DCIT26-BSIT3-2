import React from "react";
import {Link, useLocation } from "react-router-dom";   

function Sidebar() {

    const location = useLocation();

    const students = [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
    ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Student Portal</h2>
      <nav className="flex  flex-col space-y-3">

        <Link 
        to="/" 
        className={`transition font-medium ${
            location.pathname === "/" ? "text-blue-500 " : 
            "text-gray-700 dark:text-gray-300 hover:text-blue-500"
        }`}>
            Home
        </Link>

        <h2 className="text-sm text-gray-400 mt-4 mb-2 uppercase tracking-wider">Students</h2>
        {students.map((student) => (
            <Link 
            key={student.id}
            to={`/students/${student.id}`}
            className={`block py-1 rounded-md px-2 transition ${
                location.pathname === `/students/${student.id}` ? "text-blue-500 bg-green-500" : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:bg-gray-700"
            }`}>
                {student.name}
            </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
