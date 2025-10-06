import React from "react";

const professor = {
  name: "John Aimiel Pena",
  subject: "Application Development",
  email: "john.aimiel@cvsu.edu.ph",
};

function Card () {
  return (
    <div className="text-center flex flex-col items-center p-4 bg-green-300 rounded shadow text-gray max-w-md mx-auto my-4">
        <h2>Professor Information</h2>
        <p>{professor.name}</p>
        <p>Instructor of {professor.subject}</p>
        <p>Email: {professor.email}</p>
    </div>
  );    
}

export default Card;