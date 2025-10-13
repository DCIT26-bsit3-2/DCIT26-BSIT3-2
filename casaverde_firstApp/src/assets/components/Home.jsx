import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1
                className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center"c
            >
                Student Portal
            </h1>
            <p
                className="text-2xl text-gray-800 dark:text-white mt-8 text-center"
            >
                Welcome to the Student Portal! Navigate to the section to view student profiles.
            </p>
        </div>
    );
}
export default Home;