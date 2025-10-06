import React from "react";

function Header() {
  return (
    <header className="text-center flex flex-col items-center">
      <nav className="bg-gray-800 text-white w-full p-4">
        <ul className="flex justify-center space-x-4">    
            <li><a href="#" className="hover:text-emerald-500 transition-colors durations-300">Home</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors durations-300">About</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition-colors durations-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;