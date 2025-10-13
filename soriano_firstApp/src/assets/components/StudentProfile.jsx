// import React, { use } from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
    const { id } = useParams();

    const studentsData = {
        1: {
            name: "Student 1",
            age: 20,
            course: "BSIT",
            desc: "A diligent student.",
        },
        2: {
            name: "Student 2",
            age: 21,
            course: "BSCS",
            desc: "An enthusiastic learner.",
        },
        3: {
            name: "Student 3",
            age: 19,
            course: "BSIS",
            desc: "A tech-savvy individual.",
        },
    };

    const student = studentsData[id];

    if (!student) {
        return <p>Student not found</p>;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 w-96">
                <h2 className="text-3xl">{student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
                <p>{student.desc}</p>
            </div>
        </div>
    );
}

export default StudentProfile;
