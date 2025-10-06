import React from "react";
const professor = {
    name: "Jonh Amiel Pena",
    subject: "Application development",
    email: "johname@gmail.com"
}
function cards(){
    return(
        <>
        <div>
            <h2>Professor Name: {professor.name} </h2>
            <p>subject: {professor.subject}</p>
            <p>Email: {professor.email}</p>
            <hr/>
        </div>
        </>
    )
}
export default cards;

