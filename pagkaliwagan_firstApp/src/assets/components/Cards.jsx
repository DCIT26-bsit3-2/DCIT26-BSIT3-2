import React from 'react'

const professor = {
    name: "John Amiel Pena",
    subject: "Application Development",
    email: "johnamiel@example.com"
}

function Cards() {
  return (
    <div className  ="text-center p-4 bg-yellow-500 text-white justify-content-center align-items-center max-w-md mx-auto my-4 shadow-lg rounded-lg">
        <h2> PROFESSOR INFORMARTION</h2>
        <p> Name: {professor.name}</p>
        <p> Subject: {professor.subject}</p>
        <p> Email: {professor.email}</p>
    </div>
  )
}
export default Cards;