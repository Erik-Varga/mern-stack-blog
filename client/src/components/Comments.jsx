import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mt-4'>
        <h1 className='text-xl text-gray-500 dark:text-gray-300 underline'>Comments</h1>
        <div className="flex items-center justify-between gap-8 w-full">
            <textarea name="" id="" placeholder='Write a comment...' className='w-full p-4 rounded-xl bg-white dark:bg-gray-900'></textarea>
            <button className='bg-blue-400 px-4 py-3 text-white font-medium rounded-xl'>Send</button>
        </div>

        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments