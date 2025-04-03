import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='w-full flex flex-col justify-between text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout