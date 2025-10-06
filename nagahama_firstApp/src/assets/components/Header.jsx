import React from "react";

function Header() {
  return (
    <header className="text-center flex flex col items-center">
      <nav className="bg-gray-700 text-white w-full flex justify-center p-4">
        <ul className="flex justify-center gap-4">
            <li><a href="#"
                    className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" 
                    className="hover:text-blue-500 transition-colors duration-300">About</a></li>
            <li><a href="#" 
                    className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
