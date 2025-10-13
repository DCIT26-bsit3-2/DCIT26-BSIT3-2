import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const student = [
        {id: 1, name: "Student 1"},
        {id: 2, name: "Student 2"},
        {id: 3, name: "Student 3"}  
    ];

    return (
       <aside className="w-64 bg-white dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Student Portal</h2>
            <nav className="flex flex-col space-y-4">
                
                <Link to="/" 
                className={`transition font-medium ${
                location.pathname === '/' ? "text-blue-500" : "text-gray-700 dark:text-gray-300 hover:text-blue-500 "
                }`}>
                    Home
                </Link>

            <h2 className="text-sm text-gray-500 mt-4 mb-2 uppercase tracking-wider">Students</h2>
            {student.map((stud) => (
                <Link 
                key={stud.id}
                to={`/students/${stud.id}`}
                className={`block py-1 rounded-md px-2 transition ${
                    location.pathname === `/students/${stud.id}` ? "text-blue-500 bg-white" : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                }`}>
                    {stud.name}
                </Link>
            ))}
            </nav>
       </aside>
    );
}



export default Sidebar