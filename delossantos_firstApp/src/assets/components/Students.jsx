import React from "react"; 

function Students(props) {
    return(
            <div className="text-center p-4 bg-green-500 rounded shadow m-10 p-3 max-w-md max-auto ">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.course}</p>
                <p>Year Level: {props.year}</p>
            </div>
    );
}

export default Students;