import React from "react";

function Students(props) {
  return (
    <div className="flex justify-center p-4">
    <div className="max-w-lg border-4 text-center bg-gray-500 p-10 text-white text-lg rounded-xl shadow">
        <h2 className="text-2xl">{props.name}</h2>   
        <p>Student Number: {props.studnum}</p>
        <p>Age: {props.age} </p>
        <p>Course: {props.course}</p>
        <p>Year: {props.year}</p>
    </div>
    </div>
  );
}

export default Students;    