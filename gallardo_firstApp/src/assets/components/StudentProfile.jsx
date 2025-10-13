import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
    const { id } = useParams();

    const studentData = {
        1: { name: "Student 1", age: 30, course: "BSCS", description: "Malupet" },
        2: { name: "Student 2", age: 80, course: "BSIT", description: "Tanda Mo" },
        3: { name: "Student 3", age: 10, course: "BSIS", description: "Anyare naka pasok ka" },
    };

    const student = studentData[id];

    if (!student) return <p>No student found.</p>

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-96">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {student.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Age: {student.age}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Course: {student.course}</p>
                <p className="text-gray-700 dark:text-gray-400 italic">{student.description}</p>
            </div>
        </div>

    );
}

export default StudentProfile;