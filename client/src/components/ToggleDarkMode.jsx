import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { LuMoon, LuSun } from 'react-icons/lu';

const ToggleDarkMode = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    // <div
    //   onClick={toggleDarkMode}
    //   className="relative w-14 h-8 rounded-3xl bg-slate-300 dark:bg-zinc-700 place--center cursor-pointer"
    // >
    //   <div className={`absolute top-1 rounded-full w-6 h-6 bg-blue-500 ${isDarkMode ? "left-1" : "right-1"}`} />
    // </div>
    <div
      onClick={toggleDarkMode}
      className="text-2xl transition-all duration-700 ease-in-out flex items-center rounded-full"
    >
      <button>{isDarkMode ? <LuSun className='text-gray-200 cursor-pointer' /> : <LuMoon className='text-gray-800 cursor-pointer' />}</button>
    </div>
  )
}

export default ToggleDarkMode