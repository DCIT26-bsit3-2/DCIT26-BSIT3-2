import React from "react";

const professor = {
    name: "John Amiel Pena",
    email: "jherecho.pilorin@example.com",
    subject: "Application Development",
    course: "BSIT",
    year: "3rd Year",
}

function Card() {
  return (  
    <div className="text-center flex flex-col items-center p-4 bg-yellow-100 rounded shadow text-gray max-w-md mx-auto my-4">
        <h2>Professor Information</h2>
        <p>{professor.name}</p>
        <p>Instructor of {professor.subject}</p>
        <p>email: {professor.email}</p>
    </div>
  );
}

export default Card;
