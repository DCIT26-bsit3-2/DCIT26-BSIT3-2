import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
  const { id } = useParams();

  const studentData = {
    1: {
      name: "Jimuel Clidoro",
      age: 20,
      course: "BSIT",
      description: "Harworking and consist",
    },
    2: {
      name: "Charls Sampaga",
      age: 21,
      course: "BSCS",
      description: "Bachelor of Science in Computer Science",
    },
    3: {
      name: "Kian Lhei Pagkaliwagan",
      age: 22,
      course: "BSIS",
      description: "Bachelor of Science in Information Systems",
    },
  };

  const student = studentData[id];

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-gray-700 text-gray-100 shadow-2xl rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-4 text-white">{student.name}</h2>
        <p className="text-gray-200 mb-2">Age: {student.age}</p>
        <p className="text-gray-200 mb-2">Course: {student.course}</p>
        <p className="text-gray-200">Description: {student.description}</p>
      </div>
    </div>
  );
}
export default StudentProfile;
