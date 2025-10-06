import React from "react"

function Header(){

        return (
            <>
                <header className ="text-center flex flex-col items-center p-4 bg-green-200 rounded-lg shadow-md mb-4">
                    <nav className="w-full flex justify-center">
                        <ul className="flex justify-center gap-4">
                            <li><a href="#"
                            className='hover;text-emerald-500 transition-colors duration-300'>
                            Home
                            </a>
                            </li>
                             <li><a href="#"
                            className='hover;text-emerald-500 transition-colors duration-300'>
                            About
                            </a>
                            </li>
                             <li><a href="#"
                            className='hover;text-emerald-500 transition-colors duration-300'>
                            Contact
                            </a>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                </header>
             </>

        )
}

export default Header;