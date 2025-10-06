import React from "react";

function Header() {
    return(
        <header className="bg-blue-600 text-white p-4 shadow">
            <ul className="flex space-x-6 justify-center">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Contacts</li>
            </ul>
        </header>
    );
}

export default Header;