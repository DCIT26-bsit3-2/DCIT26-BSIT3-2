import React from 'react';
import { useParams } from 'react-router-dom';


function StudentProfile() {
    const { id } = useParams();

    const studentData = {
        1: { name: "Charls Sampaga", number: "202301234", age: 20, course: "BSIT", description: "HARDWORKING STUDENT" },
        2: { name: "Jayson Reyes", number: "202302345", age: 19, course: "BSCS", description: "MEDIUM HARDWORKING STUDENT" },
        3: { name: "David Lasac", number: "202303456", age: 18, course: "BCE", description: "NOT WORKING STUDENT" },
    };

    const student = studentData[id];

    if (!student) {
        return <div className="p-4">Student not found.</div>;
    }

    return (
       <div className='flex justify-center items-center h-full'>
        <div className='flex bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 min-w-md w-full'>
            <h2 className='text-2xl font-bold mb-2 text-gray-800 dark:text-white'>
                {student.name}
                </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>Student Number: {student.number}</p>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>Age: {student.age}</p>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>Course: {student.course}</p>
            <p className='text-gray-600 dark:text-gray-400 italic'>Description: {student.description}</p>
        </div>
       </div>
    );
}

export default StudentProfile;