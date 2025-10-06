import React from "react";

function student(student){
    return(
        <>
        <div>
            <p>Student Name: {student.name}</p>
            <p>Student Number: {student.number}</p>
            <p>age: {student.age}</p>
            <p>course: {student.course}</p>
            <p>year level: {student.year}</p>
            <hr/>
        </div>
        </>
    )
}
export default student;
