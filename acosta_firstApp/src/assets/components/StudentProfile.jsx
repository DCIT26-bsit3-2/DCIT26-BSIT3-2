import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
    const { id } = useParams(); 

    const studentData = {
        1: { name: "Nico Acosta", age: 20, course: "BSIT", description: "Malakas mag lol." },
        2: { name: "Geoffrey Soriano", age: 21, course: "BSCS", description: "Malakas mag valo." },
        3: { name: "Lenerd Mcgowan", age: 22, course: "BSIS", description: "Malakas mag code." },
    };

    const student = studentData[id];

    if (!student) {
        return <p>Student Not Found!</p>;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 w-96">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text:dark-white">{student.name}</h2>
            <p className="text-gray-900 text:dark-white">Age: {student.age}</p>
            <p className="text-gray-900 text:dark-white">Course: {student.course}</p>
            <p className="text-gray-900 text:dark-white">Description: {student.description}</p>
            </div>
        </div>
    );
}
export default StudentProfile;