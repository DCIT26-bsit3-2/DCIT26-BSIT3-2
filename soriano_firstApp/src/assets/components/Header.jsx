import React from "react";

function Header() {
    return (
        <>
            <header className="text-center">
                <nav>
                    <ul className="flex justify-center gap-10 p-4 bg-blue-300 text-white">
                        <a href="#" className="hover:text-yellow-300">
                            <li>Home</li>
                        </a>
                        <a href="#" className="hover:text-yellow-300">
                            <li>About</li>
                        </a>
                        <a href="#" className="hover:text-yellow-300">
                            <li>Contact</li>
                        </a>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
