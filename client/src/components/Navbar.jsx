import React, { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from '@clerk/clerk-react';
import ToggleDarkMode from './ToggleDarkMode';
import Hamburger from './HamburgerComponent';
import Modal from './MenuModal';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between bg-gray-100 dark:bg-gray-800'>
            {/* logo */}
            <Link to="/" onClick={closeModal} className="flex items-center gap-4 text-2xl font-bold">
                <Image src="favicon.jpg" alt="Spudev Logo" className='w-8 h-8 border-gray-900 rounded-sm shadow-md' />
                <span>spudevlog</span>
            </Link>

            {/* hamburger menu */}
            <div className="md:hidden z-100">
                <div className="mr-5 text-xl">
                    <button onClick={() => setIsModalOpen(!isModalOpen)}>{isModalOpen ? <></> : <FaBars />}</button>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className='z-100 text-2xl flex flex-col justify-start items-center gap-4 absolute top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-800'>
                        <div className="text-2xl flex justify-end w-full mt-5 mr-10">
                            <button onClick={() => setIsModalOpen(!isModalOpen)}>{isModalOpen ? <IoClose /> : <></>}</button>
                        </div>
                        <Link to="/" onClick={closeModal}>Home</Link>
                        <Link to="/" onClick={closeModal}>Trending</Link>
                        <Link to="/" onClick={closeModal}>Most Popular</Link>
                        <Link to="/about" onClick={closeModal}>About</Link>
                        {/* <Link to="/write">Write</Link> */}
                        <SignedOut>
                            <Link to="/login" onClick={closeModal}><button className='py-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500 text-white cursor-pointer'>Login</button></Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <ToggleDarkMode />
                    </div>
                </Modal>





                {/* button */}
                {/* <div className="mr-2 cursor-pointer text-2xl flex items-center justify-center"
                    onClick={() => setOpen((prev) => !prev)}
                > */}

                {/* {open ? <IoClose /> : <FaBars />} */}
                {/* <Hamburger /> */}
                {/* </div> */}


                {/* links */}
                {/* {open && (
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
                )} */}
            </div>

            {/* desktop menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/write">Write</Link> */}
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