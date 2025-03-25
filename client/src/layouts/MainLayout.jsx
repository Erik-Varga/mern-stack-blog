import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col justify-between h-full  bg-gray-100 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout