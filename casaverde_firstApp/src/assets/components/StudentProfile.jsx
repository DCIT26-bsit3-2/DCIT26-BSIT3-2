import React from 'react';
import { useParams } from 'react-router-dom';

function StudentProfile() {
    const { id } = useParams();

    const studentData = {
        1: { name: 'Mike Casaverde', number: 202301139, age: 20, course: 'BSIT', description: "Loving and caring son of their family." },
        2: { name: 'Charls Sampaga', number: 202301140, age: 21, course: 'BSCS', description: "Energetic and supportive brother." },
        3: { name: 'Kian Pagkaliwagan', number: 202301141, age: 22, course: 'BSIS', description: "Dedicated and hardworking student." },
    };

    const student = studentData[id];

    if (!student) {
        return <div className="p-4">Student not found</div>;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-80 min-h-64 flex flex-col justify-center"
                style={{ fontFamily: 'Montserrat, Lora, serif' }}
            >
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                    {student.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Student Number: {student.number}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Age: {student.age}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Course: {student.course}</p>
                <p className="text-gray-600 dark:text-gray-300">{student.description}</p>
            </div>
        </div>
    );
}

export default StudentProfile;