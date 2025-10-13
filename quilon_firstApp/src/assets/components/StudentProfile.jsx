import React from "react";
import { useParams } from "react-router-dom";

function StudentProfile() {
    const { id } = useParams();

    const studentData = {
        student1: {
            name: "Jommel",
            age: 20,
            course: "BSIT",
            description:
                "Jommel is a dedicated student who loves coding and technology.",
        },
        student2: {
            name: "Lenerd",
            age: 30,
            course: "BSIT",
            description:
                "Lenerd is passionate about software development and enjoys working on innovative projects.",
        },
        student3: {
            name: "Nico",
            age: 21,
            course: "BSIT",
            description:
                "Nico is an enthusiastic learner who is always eager to explore new programming languages and frameworks.",
        },
    };

    const student = studentData[id];

    if (!student)
        return (
            <div className="container mx-auto p-4">Student not found.</div>
        );

    // Create initials for avatar
    const initials = student.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 flex items-center gap-6">
                    <div className="w-28 h-28 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {initials}
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800">{student.name}</h2>
                        <p className="text-gray-600 mt-1">{student.course}</p>
                        <div className="mt-4 text-sm text-gray-700">
                            <p>
                                <strong>Age:</strong> {student.age}
                            </p>
                            <p className="mt-2">{student.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;