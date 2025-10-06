import React from "react"

const professor = {
        name: "John Amiel Pena",
        subject: "Application development",
        email:  "john.al"

}

function Cards(){
    return(
        <div className="flex flex-row justify-center gap-4">
        <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
            <h2>Professor Information</h2>
            <p>Name: {professor.name}</p>
            <p>Subject: {professor.subject}</p>
            <p>Email: {professor.email}</p>
        </div>
        </div>
    )

}

export default Cards;