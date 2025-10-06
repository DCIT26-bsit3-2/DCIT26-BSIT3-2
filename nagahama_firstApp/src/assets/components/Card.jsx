import React from "react";

const professor = {
  name: "John Aimiel Pena",
  subject: "Application Development",
  email: "john.aimiel@example.com"
}

function Card() {
  return (
    <div className="text-center p-4 bg-gray-600 text-white m-4 rounded-lg max-w-md mx-auto">
      <h2>Professor Information</h2>
      <p className="text-3xl m-5 font-bold">{professor.name}</p>
      <p className="text-xl">Instructor of {professor.subject}</p>
      <p className="text-lg">Email: {professor.email}</p>
    </div>
  );
}

export default Card;
