import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between h-full px-4 md:px-8 lg:px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 bg-gray-100'>
      {/* Navbar */}
      <Navbar />
      {/* Breadcrumb */}
      {/* Introduction */}
      {/* Featured Posts */}
      {/* Post List */}
      <Footer />
    </div>
  )
}

export default App
