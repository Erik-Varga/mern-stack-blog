import React, { useEffect } from 'react'
import Image from './../components/Image';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="flex flex-col gap-8">
      <div className='flex gap-8'>
        <div className="md:w-full flex flex-col gap-8">

          {/* title */}
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi est, magnam.
          </h1>

          {/* post info */}
          <div className='flex flex-wrap items-center gap-2 text-gray-400 text-sm'>
            <span className=''>Written by</span>
            <Link className='text-blue-800 dark:text-blue-200'>Erik Varga</Link>
            <span className=''>|</span>
            <Link className='text-blue-800 dark:text-blue-200'>Web Design</Link>
            <span className=''>|</span>
            <span className=''>2 days ago</span>
          </div>

          {/* post summary */}
          <p className='text-gray-500 dark:text-gray-400 font-medium italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque placeat tempora nemo velit, earum molestias mollitia enim. Eius ut reiciendis, sed eligendi dolor quidem ipsa possimus voluptate eos porro!</p>
        </div>

        <div className="hidden md:block w-full">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* image */}
      <div className="block w-full md:hidden">
        <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
      </div>

      {/* content */}
      <div className="">
        <div className="flex flex-col md:flex-row gap-8">

          {/* text */}
          <div className="p-2 lg:text-lg flex flex-col gap-6 text-justify">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore at, pariatur minus obcaecati nostrum officia! Inventore fuga sunt voluptatum explicabo amet. Error earum minima incidunt enim modi magni quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ab libero? Magnam ullam sunt ratione nemo natus. Veniam asperiores cupiditate, minima culpa eius dolorem vero ipsam sapiente assumenda odit animi.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam eius fugit quas esse maiores necessitatibus cumque, consectetur modi ad eos dicta natus minima labore aliquam. Asperiores illo quibusdam animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet quae consequatur animi eum! Iusto, amet ipsa harum veritatis excepturi nobis ipsum nulla aliquam accusantium enim quisquam dolorem dignissimos ratione.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, optio iusto ex dolores voluptatem quaerat fugiat quos nihil, eum eligendi repellendus assumenda magnam quam! Mollitia error quo consectetur vitae harum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestias dicta dolor eos amet voluptatibus dolorum beatae ducimus facilis mollitia, animi iusto adipisci nostrum neque, ipsam in. Libero, temporibus doloribus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore at, pariatur minus obcaecati nostrum officia! Inventore fuga sunt voluptatum explicabo amet. Error earum minima incidunt enim modi magni quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ab libero? Magnam ullam sunt ratione nemo natus. Veniam asperiores cupiditate, minima culpa eius dolorem vero ipsam sapiente assumenda odit animi.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam eius fugit quas esse maiores necessitatibus cumque, consectetur modi ad eos dicta natus minima labore aliquam. Asperiores illo quibusdam animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet quae consequatur animi eum! Iusto, amet ipsa harum veritatis excepturi nobis ipsum nulla aliquam accusantium enim quisquam dolorem dignissimos ratione.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, optio iusto ex dolores voluptatem quaerat fugiat quos nihil, eum eligendi repellendus assumenda magnam quam! Mollitia error quo consectetur vitae harum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestias dicta dolor eos amet voluptatibus dolorum beatae ducimus facilis mollitia, animi iusto adipisci nostrum neque, ipsam in. Libero, temporibus doloribus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore at, pariatur minus obcaecati nostrum officia! Inventore fuga sunt voluptatum explicabo amet. Error earum minima incidunt enim modi magni quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ab libero? Magnam ullam sunt ratione nemo natus. Veniam asperiores cupiditate, minima culpa eius dolorem vero ipsam sapiente assumenda odit animi.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam eius fugit quas esse maiores necessitatibus cumque, consectetur modi ad eos dicta natus minima labore aliquam. Asperiores illo quibusdam animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet quae consequatur animi eum! Iusto, amet ipsa harum veritatis excepturi nobis ipsum nulla aliquam accusantium enim quisquam dolorem dignissimos ratione.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, optio iusto ex dolores voluptatem quaerat fugiat quos nihil, eum eligendi repellendus assumenda magnam quam! Mollitia error quo consectetur vitae harum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestias dicta dolor eos amet voluptatibus dolorum beatae ducimus facilis mollitia, animi iusto adipisci nostrum neque, ipsam in. Libero, temporibus doloribus!</p>
          </div>

          {/* menu */}
          <div className="px-4 h-max md:sticky top-8 bg-gray-200 dark:bg-gray-700 pt-2 pb-8 rounded-sm shadow-md">
            <h1 className='mb-2 text-sm font-medium'>Author</h1>
            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-8">
                <Image src="userImg2.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
                <Link className='text-blue-800 dark:text-blue-200'>Erik Varga</Link>
              </div>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam optio molestias amet assumenda modi.</p>
              <div className="flex gap-2">
                <Link><FaFacebook className="text-2xl" /></Link>
                <Link><FaXTwitter className="text-2xl" /></Link>
              </div>
            </div>

            <PostMenuActions />

            <h1 className='mt-8 mb-2 text-sm font-medium'>Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
              <Link to='/' className='underline'>All</Link>
              <Link to='/' className='underline'>Web Design</Link>
              <Link to='/' className='underline'>Development</Link>
              <Link to='/' className='underline'>Databases</Link>
              <Link to='/' className='underline'>SEO</Link>
              <Link to='/' className='underline'>Marketing</Link>
            </div>

            <h1 className='mt-8 mb-2 text-sm font-medium'>Search</h1>
            <Search />
          </div>
        </div>

        <Comments />
      </div>
    </div>
  )
}

export default SinglePostPage