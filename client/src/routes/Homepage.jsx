import React, { useEffect } from 'react'
import { FaArrowUp, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostList from '../components/PostList';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='h-full mt-24'>
      <h1 className='text-2xl text-gray-800 mb-5'>
        {/* Breadcrumb */}
        <div className="flex items-center gap-4">
          <Link to="/"><FaHome /></Link>
          <span>•</span>
          <span className='text-blue-800 dark:text-blue-400'>Blogs and Articles</span>
        </div>
      </h1>


      {/* Introduction */}
      <div className="flex items-center justify-between">

        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate eum hic similique animi id cumque facere.</p>
        </div>

        {/* animated button */}
        <div className="dark:bg-gray-300 rounded-full">
          <Link to="/write" className='hidden md:block relative'>
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className='text-lg tracking-widest animate-spin animatedButton'
            >
              <path
                id="circlePath"
                fill='none'
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href='#circlePath' startOffset="0%">Write your story •</textPath>
                <textPath href='#circlePath' startOffset="50%">Share your idea •</textPath>
              </text>
            </svg>
            <button className="absolute top-0 right-0 bottom-0 left-0 w-20 h-20 m-auto bg-blue-800 rounded-full flex items-center justify-center">
              <FaArrowUp className='text-white rotate-45 text-4xl hover:rotate-1 transition-all ease-in-out duration-500 cursor-pointer' />
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-5">
        <MainCategories />
      </div>

      {/* Featured Posts */}
      <FeaturedPosts />

      <hr className='text-gray-300 m-5' />
      {/* Post List */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600 dark:text-gray-400">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  )
}

export default Homepage