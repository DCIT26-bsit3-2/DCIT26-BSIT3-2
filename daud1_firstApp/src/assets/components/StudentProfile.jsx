import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile(){
    const { id } = useParams();

        const studentData = {
        1: {name: "Student 1", age: 20, course: "BSIT", description: "A diligent student."},
        2: {name: "Student 2", age: 22, course: "BSCS", description: "An excellent student."},
        3: {name: "Student 3", age: 21, course: "BSIS", description: "A hardworking student."}
        }

        const student = studentData[id];

        if (!student) {
            return <div>Student not found</div>;
        }
    return( 
       <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">{student.name}</h2>
                <p className="mb-2"><strong>Age:</strong> {student.age}</p>
                <p className="mb-2"><strong>Course:</strong> {student.course}</p>
                <p className="mb-2"><em>{student.description}</em></p>
            </div>
       </div>
    )

}

export default StudentProfile;