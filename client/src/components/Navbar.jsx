import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import ToggleDarkMode from './ToggleDarkMode';
import { LuLogIn, LuNotebook } from 'react-icons/lu';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50">
            <div className="w-full flex align-items justify-between gap-2">
                {/* logo */}
                <Link to="/" className='mr-10 flex gap-2'>
                    
                    <Image src="favicon.jpg" alt="Spudev Logo" className='w-8 h-8 border-gray-900 rounded-sm shadow-md' />
                    <span className='flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300'>
                        spudevlog
                    </span>
                </Link>

                {/* nav */}
                <ul className="hidden md:flex items-center gap-10 justify-start ml-5 text-sm font-semibold">
                    <li><Link to='/' duration={500} className="hover:text-blue-600">Home</Link></li>

                    {/* <li><Link to='/' duration={500} className="hover:text-blue-600">Trending</Link></li> */}

                    {/* <li><Link to='/' duration={500} className="hover:text-blue-600">Popular</Link></li> */}

                    <li><Link to='/about' duration={500} className="hover:text-blue-600">About</Link></li>

                    <li><Link to='/write' duration={500} className="hover:text-blue-600">Write</Link></li>
                    <SignedOut>
                        <Link to="/login"><button className='py-2 px-4 rounded-2xl bg-blue-400 dark:bg-blue-500 hover:bg-blue-400 text-white text-xl cursor-pointer'><LuLogIn title='Login' /></button></Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <ToggleDarkMode />
                </ul>
            </div>

            {/* hamburger toggle */}
            <div className="md:hidden text-2xl z-10 cursor-pointer hover:text-blue-600" onClick={handleClick}>
                {!nav ? <FaBars /> : <IoClose />}
            </div>

            {/* hamburger menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-100 dark:bg-[#0a192f] font-semibold flex flex-col justify-center items-center gap-5 transition duration-200 ease-in-out'}>

                <li><Link to='/' onClick={handleClick} duration={500} className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 hover:text-blue-600">Home</Link></li>

                {/* <li><Link to='/' onClick={handleClick} duration={500} className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 hover:text-blue-600">Trending</Link></li> */}

                {/* <li><Link to='/' onClick={handleClick} duration={500} className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 hover:text-blue-600">Popular</Link></li> */}

                <li><Link to='/about' onClick={handleClick} duration={500} className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 hover:text-blue-700">About</Link></li>

                <li><Link to='/write' onClick={handleClick} duration={500} className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 hover:text-blue-700">Write</Link></li>
                
                <SignedOut>
                    <Link to="/login" onClick={handleClick}><button className='py-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white text-xl cursor-pointer'><LuLogIn title='Login' /></button></Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <ToggleDarkMode />
                <div className="text-2xl z-10 text-gray-500 dark:text-gray-100 cursor-pointer hover:text-gray-400" onClick={handleClick}>
                {!nav ? <FaBars /> : <IoClose />}
            </div>
            </ul>
        </div>
    )
}

export default Navbar