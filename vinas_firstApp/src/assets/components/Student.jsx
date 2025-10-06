import React from "react";


    
function Student (props) {
    return(

        <div>
            <h2>{props.name}</h2>
            <p> Course: {props.course}</p>
            <p> Email: {props.email}</p>

        </div>
    );
}
export default Student;