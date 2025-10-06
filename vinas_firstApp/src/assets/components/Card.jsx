import React from "react";

const Professor = {
    name:"John Aimiel Pena",
    subject:"Application Devlopmwent",
    email:"JohnAimiel@example.com",
}
function Card() {
    return(
    <div className="card">
        <h2>{Professor.name}</h2>
            <p>subject{Professor.subject}</p>
            <p>Age: {Professor.email}</p>
           
        </div>
    );
}
export default Card;