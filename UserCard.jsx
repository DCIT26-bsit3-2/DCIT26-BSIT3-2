import React from 'react'

export default function UserCard( {user, onClick} ){
    return(
        <div className='border rounded-lg p-4 shadow hover:shadow-md cursor-pointer transition'
             onClick={onClick}
        >
            <h3 className='text-lg font-semibold'> {user.name} </h3>
            <p className='text-gray-600'>{user.email}</p>
            <p className='text-sm text-blue-600 italic'>{user.username}</p>
        </div>
    )
}