import { useState } from 'react';


export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Liza Soberano', course: 'BSIT', section: 'BSIT 3-1' },
    { id: 2, name: 'Kathryn Bernardo', course: 'BSIT', section: 'BSIT 3-2' },
    { id: 3, name: 'Nadine Lustre', course: 'BSIT', section: 'BSIT 3-3' },
    { id: 4, name: 'Enrique Iglesias', course: 'BSIT', section: 'BSIT 3-1' },
    { id: 5, name: 'Daniel Laudit', course: 'BSIT', section: 'BSIT 3-2' },
    { id: 6, name: 'James Yap', course: 'BSIT', section: 'BSIT 3-3' }
  ]);

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const addStudent = () => {
    const newId = students.length + 1;
    const newStudent = {
      id: newId,
      name: 'New Student',
      course: 'BSIT',
      section: 'BSIT 3-2'
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-900 via-blue-800 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-12">
          List of Students
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-blue-600 rounded-md p-6 shadow-lg"
            >
              <div className="text-blue-200 text-sm mb-2">
                Student Number: {student.id}
              </div>
              <div className="text-white text-xl font-semibold mb-3">
                Name: {student.name}
              </div>
              <div className="text-blue-100 mb-2">
                Course: {student.course}
              </div>
              <div className="text-blue-100 mb-2">
                Section: {student.section}
              </div>
              <button
                onClick={() => deleteStudent(student.id)}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded transition-colors"
              >
                Delete Student
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={addStudent}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg font-semibold transition-colors"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
}