import React from "react";

function Header() {
  return (
    <header className="text-center flex flex-col items-center p-4 bg-blue-300 rounded shadow text-gray">
        <nav className="w-full flex justify-center">
            <ul className="flex justify-center gap-4">
                <li><a href="#" className='hover:text-emerald-500 transition-colors duration-500'>Home</a></li>
                <li><a href="#" className='hover:text-emerald-500 transition-colors duration-500'>About</a></li>
                <li><a href="#" className='hover:text-emerald-500 transition-colors duration-500'>Contact</a></li>
            </ul>
        </nav>
    </header>
  );    
}

export default Header; 