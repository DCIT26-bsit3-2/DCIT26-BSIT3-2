import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
  const { id } = useParams();

  const studentData = {
    1: { name: "Student 1", age: 20, major: "Computer Science", description: "A passionate learner of all things tech." },
    2: { name: "Student 2", age: 22, major: "Mathematics", description: "Loves solving complex problems." },
    3: { name: "Student 3", age: 21, major: "Physics", description: "Fascinated by the laws of the universe." },
  }

  const student = studentData[id];

  if (!student) return <p>Student not found</p>;

  return (
    <div className="flex justify-center items-center h-full">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-96">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {student.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300"> Age: {student.age}</p>
            <br />
            <p className="text-gray-700 dark:text-gray-300"> Course: {student.major}</p>
            <br />
             <p className="text-gray-700 dark:text-gray-300 italic">{student.description}</p>
        </div>
    </div>
  )
}

export default StudentProfile;