import React from "react";

function Header() {
  return (
    <header className="text-center flex flex-col items-center p-4 bg-gray-800 text-white rounded shadow-md">
      <nav className="w-full flex justify-center">
        <ul className="flex justify-center gap-4">
            <li><a href="#" className="hover:text-purple-500 transition-colors duration-100000">Home</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors duration-100000">About</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors duration-100000">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;