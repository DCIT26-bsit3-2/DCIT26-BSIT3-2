import React from 'react'


const professor = {
    name: "John Aimiel Pena",
    subjects: "Application Development",
    email: "john.aimiel@EXAMPLE.com"
}
function Card(){
    return(
         <div className="bg-purple-300 p-4 m-4 rounded-lg shadow-md flex flex-col items-center text-center w-64">
            <h2> Professor Information</h2>
            <p> Professor Name: {professor.name}</p>
            <p> Subjects: {professor.subject}</p>
            <p> Email: {professor.email}</p>
         </div>
    )
}

export default Card;