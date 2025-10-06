import React from "react";

const Professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.amiel@example.com"
};

function Card() {
    return (
        <div className="text-center flex flex-col items-center bg-slate-300 p-4 m-4 max-w-md mx-auto rounded-lg shadow-md">
            <h2>Professor Information</h2>
            <p className="text-4xl"> {Professor.name}</p>
            <p>Subject: {Professor.subject}</p>
            <p>Email: {Professor.email}</p>
        </div>
    );
}

export default Card;