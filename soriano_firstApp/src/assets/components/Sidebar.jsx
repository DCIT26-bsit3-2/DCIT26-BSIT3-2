import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const students = [
        { id: 1, name: "Student 1" },
        { id: 2, name: "Student 2" },
        { id: 3, name: "Student 3" },
    ];

    return (
        <aside className="h-full w-64 bg-white dark:bg-gray-800 shadow-md b-screen fixed left-0 top-0 p-6">
            <h1 className="text-2xl font-semibold mb-6 text-center">
                Student Portal
            </h1>

            <nav className="flex flex-col space-y-3">
                <Link
                    to="/"
                    className={`text-lg text-gray-700 hover:text-blue-500 hover:bg-white ${
                        location.pathname === "/"
                            ? "font-bold text-blue-500"
                            : "text-gray-700 dark:text-grau-300 hover:text-blue-500"
                    }`}
                >
                    Home
                </Link>

                <h2>Students</h2>

                {students.map((student) => (
                    <Link
                        key={student.id}
                        to={`/student/${student.id}`}
                        className={`text-lg hover:text-blue-500 hover:bg-white ${
                            location.pathname === `/student/${student.id}`
                                ? "font-bold text-blue-500 bg-white"
                                : "text-gray-700"
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
