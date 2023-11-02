import InboxIcon from '@/icons/InboxIcon'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 w-fit p-6 h-screen'>
      <div className='text-white flex flex-col mt-40'>
        <InboxIcon />
      </div>
    </nav>
  )
}

export default Navbar
