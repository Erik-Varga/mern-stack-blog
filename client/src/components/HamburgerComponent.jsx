import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import ToggleDarkMode from './ToggleDarkMode';

const HamburgerCompenent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        size={18}
        toggled={open}
        toggle={setOpen}
      />

      {open && <div className='absolute top-0 left-0 w-screen h-screen text-black bg-white dark:bg-slate-900 dark:text-white'>
        <header className="flex items-center justify-end mr-6 mt-2">
          <Hamburger
            size={18}
            toggled={open}
            toggle={setOpen}
          />
        </header>
        <div className='flex flex-col justify-center items-center gap-5 overflow-hidden bg-yellow-100 h-full'>
        <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/write">Write</Link> */}
                <SignedOut>
                    <Link to="/login"><button className='py-2 px-4 rounded-2xl bg-blue-400 text-white cursor-pointer'>Login</button></Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <ToggleDarkMode />
        </div>
      </div>}
    </div>
  )
}

export default HamburgerCompenent