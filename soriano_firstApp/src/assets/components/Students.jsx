import React from "react";

function Students(props) {
    return (
        <div className="justify-center text-center m-5 p-5 border-1 border-black  rounded-lg bg-blue-200">
            <p className="text-2xl">Student Name: {props.name}</p>
            <p>Student Number: {props.studnum}</p>
            <p>Year Level: {props.yrLevel}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>

            {/* <div className="flex justify-between m-10 p-10">
                <Students
                    name="Geoffrey Soriano"
                    studnum="202301671"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="Geoffrey Soriano"
                    studnum="202301671"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="Jane Doe"
                    studnum="202301672"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="John Smith"
                    studnum="202301673"
                    yrLevel="3rd Year"
                    age="21"
                    course="BSIT"
                />
                <Students
                    name="Alice Johnson"
                    studnum="202301674"
                    yrLevel="3rd Year"
                    age="19"
                    course="BSIT"
                />
            </div>
            <Card />
            <Footer /> */}
        </div>
    );
}

export default Students;
