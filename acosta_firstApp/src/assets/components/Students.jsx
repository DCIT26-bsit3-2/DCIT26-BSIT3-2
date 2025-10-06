import React from "react";

function Students(props) {
  return (
    <div className= "flex">
        <div className= "text-center justify-center border-2 border-round m-20 p-5 bg-gray-500 text-white max-w-sm">
            <p>Name: {props.name} </p>
            <p>Stud Number: {props.number} </p>
            <p>Age: {props.age} </p>
            <p>Course: {props.course} </p>
            <p>Year Level: {props.year}</p>
        </div> 
    </div>   
  );
}

export default Students;