import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-4 md:px-8 lg:px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
      {/* Navbar */}
      {/* Breadcrumb */}
      {/* Introduction */}
      {/* Featured Posts */}
      {/* Post List */}
      <Footer />
    </div>
  )
}

export default App
