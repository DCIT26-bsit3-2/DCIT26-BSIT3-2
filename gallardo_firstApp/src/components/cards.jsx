import React from "react";
const professor = {
    name: "John Amel Pena",
    subject: "Application development",
    email: "johnamel@example.com"
}
function cards(){
    return (
        <>
        <div>
            <h2> Professor name: {professor.name}</h2>
            <p>subject: {professor.subject}</p>
            <p>Email: {professor.email}</p>
            <hr/>
        </div>
        </>
    )
}
export default cards;