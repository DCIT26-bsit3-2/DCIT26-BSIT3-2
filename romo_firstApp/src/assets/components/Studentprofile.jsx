import React from "react";
import {useParams} from "react-router-dom";

function StudentProfile() {
    const {id} = useParams();

    const studentData = {
        1: {name: "Curlh Joseph Golez", age: "21",course: "BSIT", description: "Hardworking and Consistent Student"},
        2: {name: "Messiahlyn Mabilangan", age: "21",course: "BSIT", description: "Enjoys coding and Web Development"},
        3: {name: "Mhar Granado", age: "20",course: "BSIT", description: "Loves UI/UX design and Teamwork"},
    };

    const student = studentData[id];
    if (!student) return <p>No Student Found.</p>

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-x1 p-6 w-96">
                <h2 className="text-2x1 font-bold mb-2 text-gray-900 dark:text-white">
                    {student.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2"> Age: {student.age}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2"> Course: {student.course}</p>
                <p className="text-gray-600 dark:text-gray-300 italic"> {student.description}</p>
            </div>
        </div>
    );
}
export default StudentProfile;