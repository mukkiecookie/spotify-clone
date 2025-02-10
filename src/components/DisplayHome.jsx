import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
     <Navbar />
      <div className='mb-4 px-6'>
        <h1 className='my-4 font-bold text-[10pt]'>Featured Charts</h1>
        <div className='white-boxes flex overflow-auto text-[9pt] pt-1'>
          {albumsData.map( (item,index) => (
          <AlbumItem
            key={index} 
            name={item.name} 
            desc={item.desc} 
            id={item.id} 
            image={item.image}
          />)
          )}
        </div>

        <h1 className='my-4 font-bold text-[10pt]'>Today's biggest hits</h1>
        <div className='white-boxes flex overflow-auto text-[9pt] pt-1'>
          {songsData.map( (item,index) => (
          <SongItem 
            key={index} 
            name={item.name} 
            desc={item.desc} 
            id={item.id} 
            image={item.image}
          />)
          )}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
