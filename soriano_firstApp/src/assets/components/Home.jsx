import React from "react";
import { Routes } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center items-center h-full">
            <h1 className="text-3xl font-bold text-blue-500 mb-4">
                Welcome to the Student Portal
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">
                Select a student fromt he sidebar to ver their profile.
            </p>
        </div>
    );
}

export default Home;
