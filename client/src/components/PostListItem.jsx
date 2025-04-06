import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

const PostListItem = ({ post }) => {
    console.log(post)
  return (
    <div className='flex flex-col xl:flex-row gap-8 my-10'>

        {/* image */}
        {post.img && (
            <div className="md:w-2/3 xl:block xl:w-1/3">
                <Image src={post.img} className="rounded-2xl object-cover" w="735" />
            </div>
        )}

        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className='text-4xl font-semibold'>
                {post.title}
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className='text-blue-800 dark:text-blue-400'>{post?.user?.username}</Link>
                <span>on</span>
                <Link className='text-blue-800 dark:text-blue-400'>{post.category}</Link>
                <span>{format(post.createdAt)}</span>
            </div>
            <p>
                {post.description}
            </p>
            <Link to={`/${post.slug}`} className='underline text-blue-800 dark:text-blue-400 text-sm'>Read more</Link>

            <div><hr className='text-gray-200 dark:text-gray-800' /></div>
        </div>
    </div>
  )
}

export default PostListItem