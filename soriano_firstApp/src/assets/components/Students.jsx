import React from "react";

function Students(props) {
    return (
        <div className="justify-center text-center m-5 p-5 border-1 border-black  rounded-lg bg-blue-200">
            <p className="text-2xl">Student Name: {props.name}</p>
            <p>Student Number: {props.studnum}</p>
            <p>Year Level: {props.yrLevel}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default Students;
