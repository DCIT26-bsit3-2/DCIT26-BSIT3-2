import React from "react"
import {Link, useLocation} from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    // Use numeric IDs so they match the route param expected by StudentProfile (/students/:id)
    const students = [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" }
    ];

    return (
        <aside className="w-64 bg-gray-800 dark:bg-gray-800 shadow-md p-6 text-white">
            <h1 className="text-2xl font-bold mb-6 text-white">
                Student Portal
            </h1>

            <nav className="flex flex-col space-y-3">
                <Link
                    to="/"
                    className={`transition font-medium ${
                        location.pathname === "/"
                        ? "text-blue-300"
                        : "text-white hover:text-blue-300"
                    }`}
                >
                    Home
                </Link>
                
             <h2 className="text-sm text-gray-300 mt-4 mb-2 uppercase tracking-wider">
                 Students
             </h2>

                {students.map((student) => (
                    <Link
                        key={student.id}
                        to={`/students/${student.id}`}
                        className={`block py-1 rounded-md px-2 transition ${
                            location.pathname === `/students/${student.id}`
                            ? "bg-blue-600 text-white font-semibold"
                            : "text-white hover:bg-gray-700"
                        }`}
                    >
                        {student.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}


export default Sidebar;