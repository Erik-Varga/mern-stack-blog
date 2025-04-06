import { useAuth, useUser } from '@clerk/clerk-react';
import React from 'react'
import { FaRegTrashAlt, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { RiFileMarkedLine } from "react-icons/ri";

const PostMenuActions = ({ post }) => {
  const {user} = useUser()
  const {getToken} = useAuth()

  return (
    <div className="">
      <h1 className='mt-8 mb-2 text-sm font-medium'>Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <RiFileMarkedLine className="text-2xl" />
        <span>Save this post</span>
      </div>
      {user && post.user.username === user.username && (
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
          <FaTrashAlt className="text-2xl" />
          <span>Delete this post</span>
        </div>
      )}
    </div>
  )
}

export default PostMenuActions