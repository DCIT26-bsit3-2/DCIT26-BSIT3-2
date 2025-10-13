import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();

  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
  ];

  return (
    <aside className="w-64 bg-gray dark:bg-gray-800 shadow-md h-screen fixed left-0 top-0 p-6">
      <h1 className="text-lg font-bold mb-4">Student Portal</h1>

      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className={`transition font-medium ${
            location.pathname === "/"
              ? "text-blue-600"
              : "text-gray-300 hover:text-blue-500"
          }`}
        >
          Home
        </Link>
      </nav>
      <div>
        <h2 className="text-md font-semibold mb-2">Students</h2>
        {students.map((student) => (
          <Link
            key={student.id}
            to={`/students/${student.id}`}
            className={`block py-1 rounded-md px-2 transition ${
              location.pathname === `/students/${student.id}`
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {student.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
