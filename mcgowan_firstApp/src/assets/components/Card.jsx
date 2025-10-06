import React from "react"; 

const prof = {
  name: "John Aimiel Pena",
  subject: "Instructor of Application Development",
email: "JohnAimiel.Pena@cvsu.edu.ph",
}
function Card() {
  return (
    <div className="flex justify-center p-4">
    <div className="text-center border-4 bg-gray-500 max-w-lg p-5 m-5 text-white rounded-xl ">
      <h2 className="text-5xl p-5 font-bold" >{prof.name}</h2>
      <p>Subject: {prof.subject}</p>
      <p>Email: {prof.email}</p>
    </div>
    </div>
  );
}

export default Card;