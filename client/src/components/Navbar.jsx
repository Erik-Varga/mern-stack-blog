import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import ToggleDarkMode from './ToggleDarkMode';
import Hamburger from './HamburgerComponent';
import Modal from './MenuModal';
import { LuLogIn } from 'react-icons/lu';
import LoginComponent from './LoginComponent';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50">
            <div className="w-full flex align-items justify-between gap-2">
                {/* logo */}
                <Link to="/" className='mr-10'>
                    <Image src="favicon.jpg" alt="Spudev Logo" className='w-8 h-8 border-gray-900 rounded-sm shadow-md' />
                    <span className='text-xs font-semibold text-gray-600 dark:text-gray-400'>spudevlog</span>
                </Link>

                {/* nav */}
                <ul className="hidden md:flex items-center gap-10 justify-start ml-5 text-sm">
                    <li><Link to='/' smooth={true} duration={500} className="hover:text-black">Home</Link></li>
                    <li><Link to='/' smooth={true} duration={500} className="hover:text-black">Trending</Link></li>
                    <li><Link to='/' smooth={true} duration={500} className="hover:text-black">Popular</Link></li>
                    <li><Link to='/about' smooth={true} duration={500} className="hover:text-black">About</Link></li>
                    <li><Link to='/write' smooth={true} duration={500} className="hover:text-black">Write</Link></li>
                    <SignedOut>
                        <Link to="/login" onClick={handleClick}><button className='py-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white text-2xl cursor-pointer'><LuLogIn title='Login' /></button></Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <ToggleDarkMode />
                </ul>
            </div>

            {/* hamburger toggle */}
            <div className="md:hidden text-2xl z-10 mr-5 cursor-pointer hover:text-[#ccd6f6]" onClick={handleClick}>
                {!nav ? <FaBars /> : <IoClose />}
            </div>

            {/* hamburger menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-100 dark:bg-[#0a192f] flex flex-col justify-center items-center gap-5 transition duration-200 ease-in-out'}>

                <li><Link to='/' onClick={handleClick} smooth={true} duration={500} className="hover:text-color1">Home</Link></li>
                <li><Link to='/' onClick={handleClick} smooth={true} duration={500} className="hover:text-color1">Trending</Link></li>
                <li><Link to='/' onClick={handleClick} smooth={true} duration={500} className="hover:text-color1">Most Popular</Link></li>
                <li><Link to='/about' onClick={handleClick} smooth={true} duration={500} className="hover:text-color1">About</Link></li>
                <li><Link to='/write' onClick={handleClick} smooth={true} duration={500} className="hover:text-color1">Write</Link></li>
                <SignedOut>
                    <Link to="/login" onClick={handleClick}><button className='py-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white text-2xl cursor-pointer'><LuLogIn title='Login' /></button></Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <ToggleDarkMode />
            </ul>
        </div>
    )
}

export default Navbar