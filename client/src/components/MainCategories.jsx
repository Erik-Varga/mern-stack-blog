import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white dark:bg-gray-900 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className='bg-blue-400 text-white rounded-full px-4 py-2'>All Posts</Link>
            <Link to="/posts?cat=web-design" className='hover:bg-blue-50 dark:hover:text-black rounded-full px-4 py-2'>Web Design</Link>
            <Link to="/posts?cat=development" className='hover:bg-blue-50 dark:hover:text-black rounded-full px-4 py-2'>Development</Link>
            <Link to="/posts?cat=databases" className='hover:bg-blue-50 dark:hover:text-black rounded-full px-4 py-2'>Databases</Link>
            <Link to="/posts?cat=seo" className='hover:bg-blue-50 rounded-full px-4 py-2'>SEO</Link>
            <Link to="/posts?cat=marketing" className='hover:bg-blue-50 dark:hover:text-black rounded-full px-4 py-2'>Marketing</Link>
        </div>

        <span className='text-xl font-medium'>|</span>

        {/* search */}
        <div className="bg-gray-100 dark:text-gray-900 px-5 py-2 rounded-full flex items-center gap-2">
            <FaSearch />
            <input type="text" placeholder='search a post...' className='bg-transparent' />
        </div>
    </div>
  )
}

export default MainCategories