import React from 'react'

function Student(props) {
  return (
    <div className="bg-purple-300 p-4 m-4 rounded-lg shadow-md flex flex-col items-center text-center w-64">
      <p>Student Name: {props.name}</p>
      <p>Student Number: {props.number}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Year: {props.year}</p>
    </div>
  )
}

export default Student;
