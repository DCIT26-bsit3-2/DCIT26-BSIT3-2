import React from "react";

function student(student){
    return (
        <>
        <div>
            <p>Student Name: {student.name}</p>
            <p>Student number: {student.number}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.coruse}</p>
            <p>Year level: {student.year}</p>
            <hr/>


        </div>
        
        </>
    )
}
export default student;