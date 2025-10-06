import React from 'react'

function Student(props){
    return (
       <div className="text-center flex flex-col items-center bg-pink-300 p-4 m-4 max-w-md mx-auto rounded-lg shadow-md">
        <p>Student Name: {props.name}</p>
        <p>Student Number: {props.number}</p>
        <p>Age: {props.age}</p>
        <p>Course: {props.course}</p>
        <p>Year: {props.year}</p>
       </div>
       
    )
}
export default Student;