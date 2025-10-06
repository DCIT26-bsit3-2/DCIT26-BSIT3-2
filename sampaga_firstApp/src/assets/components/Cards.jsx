import React from 'react'

const professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.aimiel@example.com"

}
function Cards() {
    return (
        <div className='text-center flex flex-col items-center p-4 bg-black text-white shadow max-w-md mx-auto my-4 rounded-lg shadow-lg '>
            <h2>PROFESSOR INFORMATION</h2>
            <p>Name: {professor.name}</p>
            <p>Subject: {professor.subject}</p>
            <p>Email: {professor.email}</p>
        </div>
    );
}

export default Cards;