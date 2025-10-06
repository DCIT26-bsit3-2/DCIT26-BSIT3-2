const Students = ({ name, number, age, course, year }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 text-center">
      <p><span className="font-semibold">Student Name:</span> {name}</p>
      <p><span className="font-semibold">Student Number:</span> {number}</p>
      <p><span className="font-semibold">Age:</span> {age}</p>
      <p><span className="font-semibold">Course:</span> {course}</p>
      <p><span className="font-semibold">Year Level:</span> {year}</p>
    </div>
  );
};

export default Students;
