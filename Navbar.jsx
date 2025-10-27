import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='bg-blue-600 text-white py-4'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <h1 className='font-bold text-xl'>User Directory</h1>
                <div className='space-x-4'>
                    <Link to="/" className='hover:text-blue-300'>Home</Link>
                    <Link to="/users" className='hover:text-blue-300'>Users</Link>
                </div>
            </div>
        </nav>
    )
}