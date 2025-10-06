import React from 'react'

function Students(students) {
  return (
    <div className="text-center p-4 bg-gray-500 text-white justify-content-center align-items-center max-w-md mx-auto my-4 shadow-lg mgt-4 rounded-lg ">
      <p> STUDENT NAME: {students.name} </p>
      <p> STUDENT NUMBER: {students.number}</p>
      <p> AGE: {students.age}</p>
      <p> COURSE: {students.course}</p>
      <p> YEAR LEVEL: {students.year}</p>
    </div>

  );
};

export default Students;