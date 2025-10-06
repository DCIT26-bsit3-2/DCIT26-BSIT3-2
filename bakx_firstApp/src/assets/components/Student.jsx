import React from "react";


function Student(props) {
  return (
    <div className="text-center flex flex-col items-center p-4 bg-gray-200 text-gray-800 rounded shadow-md max-w-md mx-auto my-4">
        <p>student name: {props.name}</p>
        <p>student number: {props.number}</p>
        <p>age: {props.age}</p>
        <p>course: {props.course}</p>
        <p>year level: {props.year}</p>
    </div>
  );
}

export default Student;
