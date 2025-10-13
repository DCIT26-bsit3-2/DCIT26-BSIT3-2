import React from "react";
import { useParams } from "react-router-dom";
function StudentProfile() {
  const { id } = useParams();

  const studentData = {
    1: { name: "Lenerd Mcgowan", age: "20", course: "BSIT", description: "Consistent Student" },
    2: { name: "Jommel Quilon", age: "22", course: "BSIT", description: "Goblin Giant" },
    3: { name: "Nico Acosta", age: "19", course: "BSIT", description: "Baby Faced Assasin" }
  }

  const student = studentData[id];
  if (!student) {
    return <div className="text-center p-4">Student not found</div>;
  }
  return (
    <div className="flex items-center justify-center p-6 min-h-[60vh]">
      <div className="max-w-lg text-center sidebar-nav p-10 text-white text-lg rounded-xl shadow">
        <>
          <h2 className="text-2xl">{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <p>Description: {student.description}</p>
        </>
      </div>
    </div>
  );
}

export default StudentProfile;    