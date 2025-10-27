import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function UserDetails(){
    const { id } = useParams
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/user/${id}`)
        .then(res => res.json)
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        .catch(() => setLoading(false))
    }, [id])

    if (loading) return <p className='text-center mt-10 text-gray-500'>Loading User Details...</p>
    if (!user) return <p className='text-center mt-10 text-red-500'>User not Found.</p>

    return (
        <div className='w-auto h-48 mx-auto border p-6 rounded-lg shadow mt-10'>
            <h2 className='text-2xl font-bold mb-4 text-blue-600'>{user.fullname}</h2>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Phone: </b>{user.phon}</p>
            <p><b>Website: </b>{user.website}</p>
            <p><b>Company: </b>{user.company.name}</p>
        </div>
    )
}
