import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col 
    items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-60 mx-3'>
        <div className='h-52 w-40'>
            <img className='object-cover object-top w-full h-full' src = "https://m.media-amazon.com/images/I/51tkmHjrvPL._SX679_.jpg"/>
        </div>
        <div className='flex text-center flex-col'>
          <h2 className='font-bold text-lg'>Boldfit</h2>
          <p className='text-md'>Latest puffer winter jacket</p>
        </div>
    </div>
  )
}

export default HomeSectionCard