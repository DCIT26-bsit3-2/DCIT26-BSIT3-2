import React from "react";

const prof = {
    name: "John Aimiel Pena",
    subject: "Instructor of Application Development",
    email: "JohnAimiel.Pena@cvsu.edu.ph"
}

function Card() {
  return (
    <div className= "justify-center">
        <div className="text-center justify-center max-w-lg bg-red-700 text-white">
            <div className="text-7xl justify-center">
            <p> {prof.name} </p>
            </div>
            <p>Subject: {prof.subject} </p>
            <p>Email: {prof.email} </p>
        </div>
    </div>
  );
}

export default Card;