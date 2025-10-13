import React from "react";

function Students(props) {
  return (
    <div className="flex items-center justify-center p-6 min-h-[60vh]">
      <div className="max-w-lg text-center sidebar-nav p-10 text-white text-lg rounded-xl shadow">
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