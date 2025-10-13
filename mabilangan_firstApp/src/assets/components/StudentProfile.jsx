import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
    const { id } = useParams();

    const studentData = {
        1: { name: "Messiahlyn Mae G. Mabilangan", age: 21, course: "BSIT", description: "I love dogs."},
        2: { name: "Mhar G. Granado", age: 20, course: "BSIT", description: "I love makeup."},
        3: { name: "Lanz Michael Casino", age: 21, course: "BSIT", description: "Bad boy."},
    };

    const student = studentData[id];

    if (!student) return <p>No student found.</p>;

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-96">
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
