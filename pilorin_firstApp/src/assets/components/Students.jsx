import React from "react";

function Students (props) {
  return (
    <div className="text-center flex flex-col items-center p-4 bg-blue-100 rounded shadow text-gray max-w-md mx-auto my-4">

      <p>Student Name: {props.name}</p>
      <p>Student Number: {props.number}</p>
      <p>Student Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Year Level: {props.year}</p>
      
    </div>
  );
}

export default Students;
