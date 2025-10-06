import React from "react";


function Students(props) {
  return (
    <div className="text-center p-4 bg-gray-500 text-white m-10 rounded-lg max-w-md">
      <p>Student Name: {props.name}</p>
      <p>Student Number: {props.number}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Year Level: {props.year}</p>
    </div>
  );
}

export default Students;
