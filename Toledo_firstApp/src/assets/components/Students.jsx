
import React from 'react';


function Students(student) {
    return (
    <>
    <div>       
    <p>Student Name: {student.name}</p>
    <p>Student Number: {student.number}</p>
    <p> Age: {student.age}</p>
    <p> Course: {student.course}</p>
    <p> Year Level: {student.year}</p>
    <hr />    
    </div>
    
    </>
    )
}

export default Students;HH