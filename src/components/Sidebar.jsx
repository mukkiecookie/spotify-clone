import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-black hidden lg:flex'>
      <div className='xp-bigtab rounded h-[15%] flex flex-col justify-around'>

        <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt=''/>
          <p className='font-bold text-[10pt]'>Home</p>
        </div>

        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt=''/>
          <p className='font-bold text-[10pt]'>Search</p>
        </div>
      </div>

      <div className='xp-bigtab h-[85%] rounded'>
        <div className='green-container p-4 flex items-center justify-between'>

          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.stack_icon} alt=''/>
            <p className='font-semibold text-[10pt]'>Your Library</p>
          </div>

          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.plus_icon} alt=''/>
            <img className='w-5' src={assets.arrow_icon} alt=''/>
          </div>
        </div>

        <div className='white-boxes p-4  m-2 flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='text-[9pt] font-semibold'>Create your first playlist</h1>
          <p className='font-normal text-[8pt]'>it's easy we will help you</p>
          <button className='xp-button px-4 py-1.5 rounded  mt-4'>Create Playlist</button>
        </div>

        <div className='white-boxes p-4  m-2 flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='text-[9pt] font-semibold'>Let's find some podcasts to follow</h1>
          <p className='font-normal text-[8pt]'>we'll keep you updated on new episodes</p>
          <button className='xp-button px-4 py-1.5 rounded mt-4'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
