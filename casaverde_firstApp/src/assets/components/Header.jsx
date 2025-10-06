import React from 'react' 

function Header() {
  return (
    <header className="text-center flex flex-col items-center  bg-green-200 rounded-lg shadow-md p-4">
      <nav className="w-full  flex justify-center">
            <ul className="flex justify-center gap-4">
                <li><a href="a"
                className='hover:text-red-500 transition-colors duration-500 '>Home
                </a>
                </li>

                <li><a href="a"
                className='hover:text-red-500 transition-colors duration-500'>About
                </a></li>

                <li><a href="a"
                className='hover:text-red-500 transition-colors duration-500'>Contact
                </a></li>

            </ul>
        </nav>
    </header>
  );
}

export default Header;
