import React from "react";

function Student(props) {
    return(
        <div className="bg-blue-50 rounded-lg shadow p-6 max-w-sm flex-1 min-w-[250px] border border-blue-200">
            <h2 className="text-xl font-bold mb-2 text-blue-800">{props.name}</h2>
            <p className="mb-1 text-blue-700">Course: {props.course}</p>
            <p className="text-blue-700">Email: {props.email}</p>
        </div>
    );
}

export default Student;