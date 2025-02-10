import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='green-container px-6 pt-2 pb-2'>
     <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img onClick={() => navigate(-1) } className='w-10 p-2 cursor-pointer' src={assets.arrow_left} alt="" />
          <img onClick={() => navigate(1) } className='w-10 p-2 cursor-pointer' src={assets.arrow_right} alt="" />
        </div>

        <div className='flex items-center gap-4'>
          <p className='xp-button px-4 py-1 rounded hidden md:block cursor-pointer'>Explore Premium</p>
          <p className='xp-button active py-1 px-3 rounded text-[15px] cursor-pointer'>Install App</p>
          <img className='w-10 rounded flex items-center justify-center bg-white' src={assets.profile_pic} alt="" />

        </div>
     </div>

     <div className='flex items-center gap-2 mt-2'>
        <p className='xp-button active px-4 py-1 rounded cursor-pointer'>All</p>
        <p className='xp-button px-4 py-1 rounded cursor-pointer'>Music</p>
        <p className='xp-button px-4 py-1 rounded cursor-pointer'>Podcast</p>
     </div>
    </div>
    </>
  )
}

export default Navbar
