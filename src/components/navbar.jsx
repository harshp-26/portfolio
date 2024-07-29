import React from 'react'
import logo from '../assets/NavbarLogo.png'
import { FaLinkedin } from 'react-icons/fa'

const navbar = () => {
  return <nav className='mb-15 flex items-center justify-between py-8'>
    <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='Logo'className='h-12 w-auto'/>
    </div>
    <div className='flex px-6 items-center justify-center text-4xl'>
      <a href="https://linkedin.com/in/harsh-palresha" target="_blank"><FaLinkedin color='white'/></a>
    </div>
  </nav>
}

export default navbar