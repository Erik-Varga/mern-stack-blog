import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import ToggleDarkMode from './ToggleDarkMode';

const Navbar = () => {
    const [open, setOpen] = useState(false);
        
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between bg-gray-100 dark:bg-gray-800'>
            {/* logo */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image src="favicon.jpg" alt="Spudev Logo" className='w-8 h-8 border-gray-900 rounded-sm shadow-md' />

                <span>spudevlog</span>
            </Link>

            {/* mobile */}
            <div className="md:hidden">
                {/* button */}
                <div className="cursor-pointer text-2xl flex items-center justify-center"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <IoClose /> : <FaBars />}
                </div>

                {/* links */}
                {open && (
                    <div className={`w-full h-screen py-12 flex flex-col items-center justify-start gap-8 text-lg bg-gray-100 dark:bg-gray-900 absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                        <Link to="/">Home</Link>
                        <Link to="/">Trending</Link>
                        <Link to="/">Most Popular</Link>
                        <Link to="/about">About</Link>
                        <Link to="/write">Write</Link>
                        <SignedOut>
                            <Link to="/login"><button className='py-2 px-4 rounded-2xl bg-blue-400 text-white cursor-pointer'>Login</button></Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <ToggleDarkMode />
                    </div>
                )}
            </div>
            {/* desktop menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/about">About</Link>
                <SignedOut>
                    <Link to="/login"><button className='py-2 px-4 rounded-2xl bg-blue-400 text-white cursor-pointer'>Login</button></Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <ToggleDarkMode />
            </div>
        </div>
    )
}

export default Navbar