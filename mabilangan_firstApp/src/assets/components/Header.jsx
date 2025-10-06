import React from "react";

function Header() {
    return (
        <header className="text-center flex flex-col items-center">
            <nav className="bg-fuchsia-800 text-white w-full flex justify-center p-4">
                <ul className="flex justify-center gap-4">
                    <li><a href="#" className="hover:text-rose-500 transition-color duration-300">Home</a></li>
                    <li><a href="#" className="hover:text-rose-500 transition-color duration-300">About</a></li>
                    <li><a href="#" className="hover:text-rose-500 transition-color duration-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;