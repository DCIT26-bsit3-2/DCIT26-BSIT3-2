import React from "react";

const professor = {
    name: "John Aimiel Pena",
    subject: "Application Development",
    email: "emailexample@email.com",
};
function Card() {
    return (
        <div className="flex justify-center">
            <div className="m-2 p-2 border-1 border-black rounded-lg bg-blue-200 shadow-lg align-center text-center">
                <div className="text-center font-bold text-3xl">
                    <h1>Professor Information</h1>
                    <br />
                    <p>{professor.name}</p>
                </div>
                <p>Instructor of: {professor.subject}</p>
                <p>Email: {professor.email}</p>
            </div>
        </div>
    );
}

export default Card;
