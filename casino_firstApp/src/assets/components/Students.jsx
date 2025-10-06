import React from "react";

function Students(props) {
    return (
        <div className="text-center flex flex-col items-center bg-gray-300 p-8 me-10 mt-40 max-w-md rounded-lg shadow-md">
            <p>Student Name: {props.name}</p>
            <p>Student Number: {props.number}</p>
            <p>Student age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Year Level: {props.year}</p>
        </div>

    );

}

export default Students;