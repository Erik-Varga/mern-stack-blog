import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>

        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>

        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className='text-4xl font-semibold'>
                Veniam neque, dignissimos atque, voluptatem fugiat at, totam repudiandae vitae aspernatur quos officiis.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Written by</span>
                <Link className='text-blue-800 dark:text-blue-400'>Juan Dough</Link>
                <span>on</span>
                <Link className='text-blue-800 dark:text-blue-400'>Web Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi vel possimus ratione, facilis labore laboriosam soluta obcaecati, impedit enim cumque ut modi aut magnam nulla architecto facere fugiat id?
            </p>
            <Link to="/text" className='underline text-blue-800 dark:text-blue-400 text-sm'>Read more</Link>
        </div>
    </div>
  )
}

export default PostListItem