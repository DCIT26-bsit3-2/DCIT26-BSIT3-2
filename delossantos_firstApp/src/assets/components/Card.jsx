import React from "react";

const professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.aimiel@cvsu.edu.ph"
}

function Cards() {
    return(
        <div className="text-center  bg-yellow-500 rounded shadow m-20 p-7 max-w-md max-auto">
            <h2>Professor Information</h2>
            <p className="text-3xl m-5">{professor.name}</p>
            <p>Instructor of {professor.subject}</p>
            <p> email: {professor.email}</p>
        </div>
    );
}

export default Cards;