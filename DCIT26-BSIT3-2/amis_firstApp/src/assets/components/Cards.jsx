import React from "react"

const professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "john.aimiel@example.com"
}

function Cards () {
    return(
        <div>
            <h2>Professor Information</h2>
            <p>Name: {professor.name}</p>
            <p>Instructor of {professor.subject}</p>
            <p>Email: {professor.email}</p>
        </div>
    );
}

export default Cards;