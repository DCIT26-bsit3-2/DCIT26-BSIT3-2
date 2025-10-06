import React from "react";

const Professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.amiel@example.com"
};

function Card() {
    return (
        <div className="text-center flex flex-col items-center bg-gray-300 p-10 me-30 mt-20 max-w-md mx-auto rounded-lg shadow-md">
            <h2>Professor Information</h2>
            <p className="text-4xl font-bold m-4">{Professor.name}</p>
            <p>Instructor of {Professor.subject}</p>
            <p>Email: {Professor.email}</p>
        </div>
    );
}

export default Card;