import React from 'react'
import Image from './Image'
import { format } from 'timeago.js'

const Comment = ({ comment }) => {
  return (
    <div className='p-4 bg-slate-50 dark:bg-gray-700 dark:text-gray-300 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            {comment.user.img && (
              <Image 
                  src="userImg.jpeg" 
                  className="w-10 h-10 rounded-full object-cover"
                  w="40"
              />
            )}
            <span className="font-medium">{comment.user.username}</span>
            <span>|</span>
            <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        </div>
        <div className="mt-4">
            <p>{comment.description}</p>
        </div>
    </div>
  )
}

export default Comment