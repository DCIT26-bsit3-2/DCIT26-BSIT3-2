import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const student = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-screen fixed left-0 top-0 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Student Portal
      </h1>
      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className={`block px-3 py-2 rounded-md transition font-medium ${
            location.pathname === "/"
                ? "bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
              : "text-gray-300 hover:text-blue-500"
          }`}
        >
          Home
        </Link>
        <h2 className="text-sm text-gray-400 mt-4 mb-2 uppercase tracking-wider">Students</h2>
        {student.map((student) => (
          <Link
            key={student.id}
            to={`/student/${student.id}`}
            className={`block py-1 rounded-md px-2 transition ${
                  location.pathname === `/student/${student.id}`
                    ? "bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                }`}
          >
            {student.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
