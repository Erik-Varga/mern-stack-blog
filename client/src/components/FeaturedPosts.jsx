import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
    return (
        <div className='mt-8 flex flex-col lg:flex-row gap-8'>

            {/* first post */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">

                {/* image */}
                <img src="https://images.unsplash.com/photo-1742654230443-7c19cb55cd46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-3xl object-cover" />

                {/* <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895" /> */}

                {/* details */}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>

                {/* title */}
                <Link to="/test" className='text-xl lg:text-3xl font-semibold lg:font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
            </div>

            {/* other posts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <img src="https://images.unsplash.com/photo-1600389909356-02d673eff36f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-3xl object-cover w-full h-full" w="298" />

                        {/* <Image src="featured2.jpeg" className="rounded-3xl object-cover w="298" /> */}
                    </div>

                    {/* details and title */}
                    <div className="w-2/3">

                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className='font-semibold'>02.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                    
                        {/* title */}
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Link>
                    </div>
                </div>

                {/* third */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <img src="https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-3xl object-cover w-full h-full" w="298" />

                        {/* <Image src="featured3.jpeg" className="rounded-3xl object-cover" w="298" /> */}
                    </div>

                    {/* details and title */}
                    <div className="w-2/3">

                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className='font-semibold'>03.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                    
                        {/* title */}
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Link>
                    </div>
                </div>

                {/* fourth */}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-3xl object-cover w-full h-full" w="298" />

                        {/* <Image src="featured4.jpeg" className="rounded-3xl object-cover" w="298" /> */}
                    </div>

                    {/* details and title */}
                    <div className="w-2/3">

                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className='font-semibold'>04.</h1>
                            <Link className='text-blue-800'>Web Design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>
                    
                        {/* title */}
                        <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts