import React from 'react'


const professor = {
    name: "John Aimiel Pena",
    subjects: "Application Development",
    email: "john.aimiel@EXAMPLE.COM"
}
function Card(){
    return (
       <div className="text-center flex flex-col items-center bg-pink-300 p-4 m-4 max-w-md mx-auto rounded-lg shadow-md">
        <h2> Professor Information</h2>
        <p>Professor Name: {professor.name}</p>
        <p>Professor Subject: {professor.subjects}</p>
        <p>Professor Email: {professor.email}</p>
       </div>
    );
}
export default Card;