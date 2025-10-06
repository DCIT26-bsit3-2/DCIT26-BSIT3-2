import React from "react";

const professor = {
    name: "John Aimiel Pena",
    subject: "application Development",
    email: "john.aimiel@example.com"
}

function Cards () {
    return (
        <div className="text-center flex flex-col items-center p-4 bg-gray-200 text-gray-800 rounded shadow-md max-w-md mx-auto my-4">
            <h2>Professor information</h2>
            <p className="text-lg font-semibold">Name: {professor.name}</p>
            <p>Subject: {professor.subject}</p>
            <p>Email: {professor.email}</p>
        </div>
    );
}

export default Cards;