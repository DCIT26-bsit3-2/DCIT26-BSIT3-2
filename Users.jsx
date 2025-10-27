import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCard from '../component/UserCard.jsx' // ❌ Wrong folder name

export default function Users(){
    const [users, setUser] = useState() // ❌ Wrong state variable and no default value
    const [loading, setLoading] = useState(true)
    const navigation = useNavigate // ❌ Not called properly

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/user') // ❌ Typo in endpoint ("user" instead of "users")
        .then(res => res.json) // ❌ Missing parentheses for json()
        .then(data =>{
            setUsers(data) // ❌ Wrong function name (should match state variable)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }, [])

    if (loading) return <p className='text-center mt-10 text-gray-500'> Loading Users...</p>

    return (
        <div className='flex justify-center flex-col items-center mx-auto'>
            <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>User List</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {users.map(user => ( // ❌ If users is undefined, this will crash
                    <UserCard
                        key={user.id}
                        userData={user} // ❌ Wrong prop name, should match UserCard expectations
                        onClick={() => navigation(`/user/${user.id}`)} // ❌ Wrong path & navigation variable
                    />
                ))}
            </div>
        </div>
    )
}
