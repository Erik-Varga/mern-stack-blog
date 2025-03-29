import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 dark:bg-gray-700 dark:text-gray-300 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Image 
                src="userImg.jpeg" 
                className="w-10 h-10 rounded-full object-cover"
                w="40"
            />
            <span className="font-medium">Erik Varga</span>
            <span>|</span>
            <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <div className="mt-4">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, qui repellat rerum quasi dolorum doloremque! Ea, minus reiciendis! Velit suscipit est molestiae commodi vel magnam! Porro repudiandae veritatis expedita voluptatum?</p>
        </div>
    </div>
  )
}

export default Comment