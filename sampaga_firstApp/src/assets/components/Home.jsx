import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='flex items-center justify-center h-full p-6'>
            <h1 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>Welcome to the Home Page</h1>
        </div>
    );
}

export default Home;