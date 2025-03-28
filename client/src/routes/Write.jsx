import React from 'react'
import { useUser } from "@clerk/clerk-react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className=''>Loading...</div>
  }
  
  if (!isLoaded && isSignedIn) {
    return <div className=''>You should login!</div>
  }

  return (
    <div className='h-full flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>

      {/* form */}
      <form className="flex flex-col gap-6 flex-1 mb-6">
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500">Add a cover image</button>
          <input type="text" placeholder='My Awesome Story' className='text-4xl font-semibold bg-transparent outline-none' />

          <div className="flex items-center gap-4">
            <label htmlFor="" className='text-sm'>Choose a category:</label>
            <select name="cat" id="" className='p-2 rounded-xl bg-white shadow-md'>
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="database">Database</option>
              <option value="seo">SEO</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        <textarea name="desc" id="" placeholder='A Short Description' className='p-4 rounded-xl bg-white shadow-md' />
        <ReactQuill theme='snow' className='flex-1 rounded-xl bg-white shadow-md' />
        <button className='bg-blue-400 text-white font-medium rounded-xl mt-4 p-2 w-36'>Send</button>
      </form>
    </div>
  )
}

export default Write