import InboxIcon from '@/icons/InboxIcon'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 w-fit h-screen flex'>
      <div className='text-white flex flex-col mt-40'>
        <button className='p-6'>
        <InboxIcon />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
