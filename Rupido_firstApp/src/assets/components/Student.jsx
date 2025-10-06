import React from "react"

function Students(props){
    return (
        <div className="flex flex-row justify-center gap-40">
            <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.Course}</p>
                <p>Year Level: {props.year}</p>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.Course}</p>
                <p>Year Level: {props.year}</p>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.Course}</p>
                <p>Year Level: {props.year}</p>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.Course}</p>
                <p>Year Level: {props.year}</p>
            </div>
            <div className="text-center flex flex-col items-center p-4 bg-pink-200 rounded-lg shadow-md mb-4">
                <p>Student Name: {props.name}</p>
                <p>Student Number: {props.number}</p>
                <p>Age: {props.age}</p>
                <p>Course: {props.Course}</p>
                <p>Year Level: {props.year}</p>
            </div>
        </div>
    )
}

export default Students;