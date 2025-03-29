import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-2 rounded-full flex items-center gap-2'>
        <FaSearch className='text-lg' />
        <input type="text" placeholder='search a post...' className='bg-transparent' />
    </div>
  )
}

export default Search