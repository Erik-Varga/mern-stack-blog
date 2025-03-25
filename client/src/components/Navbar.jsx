import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { IKImage } from "imagekitio-react";
import Image from './Image';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between bg-gray-100'>
            {/* logo */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                {/* <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} path='/favicon.jpg' className='w-8 h-8 border-gray-900 rounded-sm shadow-md' /> */}

                <Image src="favicon.jpg" alt="Spudev Logo" className='w-8 h-8 border-gray-900 rounded-sm shadow-md' />

                <span>spudevlog</span>
            </div>

            {/* mobile */}
            <div className="md:hidden">
                {/* button */}
                <div className="cursor-pointer text-2xl flex items-center justify-center"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <IoClose /> : <FaBars />}
                </div>

                {/* links */}
                <div className={`w-full h-screen py-12 flex flex-col items-center justify-start gap-8 text-lg bg-gray-100 absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a>
                    <a href="/"><button className='py-2 px-4 rounded-2xl bg-blue-400 text-white'>Login</button></a>
                </div>
            </div>
            {/* desktop menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12">
                <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Most Popular</a>
                <a href="/">About</a>
                <a href="/"><button className='py-2 px-4 rounded-2xl bg-blue-400 text-white'>Login</button></a>
            </div>
        </div>
    )
}

export default Navbar