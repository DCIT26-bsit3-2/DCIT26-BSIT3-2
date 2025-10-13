import React from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const students = [
    { id: "student1", name: "Jommel", course: "BSIT", avatar: "J" },
    { id: "student2", name: "Lenerd", course: "BSIT", avatar: "L" },
    { id: "student3", name: "Nico", course: "BSIT", avatar: "N" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Link
            key={student.id}
            to={`/students/${student.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-semibold mr-4">
                {student.avatar}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
                <p className="text-gray-600">{student.course}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Students;