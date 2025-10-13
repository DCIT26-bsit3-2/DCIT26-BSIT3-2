import React from "react";

function AnotherHome() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Student Portal </h1>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                    Select a Student from the sidebar to view their profile
                </p>
        </div>
    );
}
export default AnotherHome;