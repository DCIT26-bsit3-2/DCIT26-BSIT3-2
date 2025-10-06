import React from 'react';

const Cards = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 w-full max-w-md text-center">
      <p><span className="font-semibold">Professor Name:</span> John Amiel Pena</p>
      <p><span className="font-semibold">Subject:</span> Application Development</p>
      <p><span className="font-semibold">Email:</span> <a href="mailto:johnamiel@example.com" className="text-emerald-400 hover:underline">johnamiel@example.com</a></p>
    </div>
  );
};

export default Cards;
