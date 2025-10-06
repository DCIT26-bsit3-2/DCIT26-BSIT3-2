import React from 'react'

const professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.aimiel@example.com",
}

function Card () {
  return (
    <div className=' text-center flex flex-col items-center p-4  bg-blue-200 rounded-lg shadow-lg max-w-md m-4 mx-auto my-4 cards'>
        <h2>PROFESSOR INFORMATION</h2>
        <p>Name: {professor.name}</p>
        <p>Subject: {professor.subject}</p>
        <p>Email: {professor.email}</p>
    </div>    
  );
}

export default Card;