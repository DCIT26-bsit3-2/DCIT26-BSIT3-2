import React from "react"

function Students (props){
    return(
        <div classname="text-center-p4">
            <p>Student Name:{props.name}</p>
            <p>Student Number:{props.number}</p>
            <p>Age:{props.age}</p>
            <p>Course:{props.course}</p>
            <p>Year Level:{props.year}</p>
        </div>
    );
}

export default Students;