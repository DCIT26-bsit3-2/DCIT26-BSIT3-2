
import React from 'react';

const professor= {
    name: "John Amiel Pena",
    subject: "Application Development",
    email: "johnamiel@example.com"
}

function Cards() {
    return (
    <>
    <div>
        <h2>Professor Name: {professor.name}</h2>
        <p> Subject: {professor.subject}</p>
        <p> Email: {professor.email}</p>
        <hr />
    </div>
    
    </>
    )
}

export default Cards;