import React from "react";


function Students(props) {
    return (
        <div className="text-center flex flex-col items-center bg-slate-300 p-4 m-4 max-w-md mx-auto rounded-lg shadow-md">
            <p>Student Name: {props.name}</p>
            <p>Student Number: {props.number}</p>
            <p>Student Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Year Level: {props.year}</p>
        </div>
    );
}

export default Students;