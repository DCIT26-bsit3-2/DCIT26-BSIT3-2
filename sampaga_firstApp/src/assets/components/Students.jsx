import React from 'react'

function Students(props) {
    return (
       <div className='text-center flex flex-col items-center p-4 bg-black text-white shadow max-w-md mx-auto my-4 rounded-lg shadow-lg'>
        <p>STUDENT NAME: {props.name}</p>
        <p>STUDENT NUMBER: {props.number}</p>
        <p>AGE: {props.age}</p>
        <p>COURSE: {props.course}</p>
        <p>YEAR LEVEL: {props.year}</p>
       </div>

       
    );
}

export default Students;