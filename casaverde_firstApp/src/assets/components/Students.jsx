import React from 'react'


function Students(props) {
  return (
    <div className='text-center flex flex-col items-center p-4  bg-yellow-200 max-w-md mx-auto my-4 m-4 cards rounded-lg shadow-lg '>
        <p> STUDENT NAME: {props.name}</p>
        <p> STUDENT AGE: {props.age}</p>
        <p> STUDENT NUMBER: {props.number}</p>
        <p> STUDENT COURSE: {props.course}</p>
        <p> STUDENT YEAR: {props.year}</p>
    </div>
    
  );
}
export default Students;