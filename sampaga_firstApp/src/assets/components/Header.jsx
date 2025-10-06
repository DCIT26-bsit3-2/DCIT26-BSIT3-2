import React from 'react'

function Header() {
    return (
        <header className="text-center flex flex-col items-center p-4 bg-black text-white">
            <nav className='w-full flex justify-center'>
                <ul className="flex justify-center gap-4">
                    <li><a href="a"
                            className='hover:text-emerald-500 transition-colors duration-300'>
                                Home
                            </a>
                    </li>
                    <li><a href="a"
                            className='hover:text-emerald-500 transition-colors duration-300'>
                                About
                            </a>
                    </li>
                    <li><a href="a"
                            className='hover:text-emerald-500 transition-colors duration-300'>
                                Contact
                            </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;