import React from "react"; 
import { useParams } from "react-router-dom";

function StudentProfile() {
    const {id} = useParams();

    const studentData= {
        1:{name: "Student 1", age: 20, course:"BSIT", description: "blah blah blah"},
        2:{name: "Student 2", age: 21, course:"BSCS", description: "bleh bleh bleh"},
        3:{name: "Student 3", age: 22, course:"BSCE", description: "blih blih blih"},
    };

    const student = studentData[id];

    if(!student) return <p>No Student Found</p>

    return(
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-96">
                <h2>
                    {student.name}
                </h2>
                    <p className="text-gray-600 dark:text-gray-300">Age: {student.age}</p>
                    <p className="text-gray-600 dark:text-gray-300">Course: {student.course}</p>
                    <p className="text-gray-700 dark:text-gray-400">{student.description}</p>
            </div>
        </div>
    );
}

export default StudentProfile;