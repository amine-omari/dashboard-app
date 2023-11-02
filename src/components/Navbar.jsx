import InboxIcon from '@/icons/InboxIcon'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 w-fit h-screen flex'>
      <div className='text-white flex flex-col mt-40'>
        <button className='p-6 focus:border-l-4 focus:border-violet-500 focus:bg-gradient-to-r focus:from-violet-950/40 focus:to-gray-900'>
        <InboxIcon />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
