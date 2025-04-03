import React from 'react'
import { LuLogIn } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const LoginComponent = () => {
    return (
        <Link to="/login"><button className='flex items-center gap-2 py-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white text-sm cursor-pointer'>
            <LuLogIn className='text-2xl' title='Login' />
        </button></Link>
    )
}

export default LoginComponent