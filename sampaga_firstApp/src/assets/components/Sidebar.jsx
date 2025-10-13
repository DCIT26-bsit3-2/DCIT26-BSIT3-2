import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    const students = [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-500 dark:text-white">
                Student Portal
            </h1>

            <nav className="flex flex-col space-y-3">
                <Link
                    to="/"
                    className={`transition font-medium ${
                        location.pathname === '/'
                            ? 'text-blue-400'
                            : 'text-white hover:text-blue-300 transition-colors duration-300'
                    }`}
                >
                    Home
                </Link>

                <h2 className="mt-4 mb-2 text-sm text-gray-400">Students</h2>

                {students.map((student) => (
                    <Link
                        key={student.id}
                        to={`/students/${student.id}`}
                        className={`block py-1 rounded-md px-2 transition ${
                            location.pathname === `/students/${student.id}`
                                ? 'bg-blue-100 text-blue-600 font-semibold'
                                : 'text-white dark:text-gray-300 hover:bg-gray-700'
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
