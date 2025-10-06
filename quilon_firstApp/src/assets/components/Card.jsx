import React from "react";

const jommel = {
    name: "John Aimiel C. Pena",
    subject: "Instructor of Application Development",
    email: "johnamiel.pena@cvsu.edu.ph",
}
function Card() {
    return(
        <div className="bg-white rounded-lg shadow p-6 max-w-sm mx-auto my-8 border border-gray-200">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{jommel.name}</h2>
            <p className="mb-1 text-gray-600">Subject: {jommel.subject}</p>
            <p className="text-gray-600">Email: {jommel.email}</p>
        </div>
    );
}

export default Card;