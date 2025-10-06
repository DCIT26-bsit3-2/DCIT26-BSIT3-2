import React from 'react'

function Header() {
  return (
    <header className="text-center p-4 bg-blue-500 text-white justify-content-center align-items-center ">
      <nav className ="">
        <ul className="flex justify-center gap-4">
            <li>
              <a href="#"className="hover:text-emerald-500 transitions-color duration-100">
                Home
              </a>
            </li>
            <li><a href="#"className="hover:text-emerald-500 transitions-color duration-100">
                About
              </a>
            </li>
            <li><a href="#"className="hover:text-emerald-500 transitions-color duration-100">
                Contacts
              </a>
            </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header;