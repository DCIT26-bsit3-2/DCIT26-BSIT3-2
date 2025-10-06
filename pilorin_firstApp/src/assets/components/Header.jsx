import React from "react";

function Header() {
  return (
    <header className="text-center flex flex-col items-center p-4 bg-green-400"> 
        <nav >
            <ul className="flex justify-center gap-4">
                <li><a href="#" className="hover:text-green-500 transition-colors duration-300 rounded shadow">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors duration-300 rounded shadow">About</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 rounded shadow">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
