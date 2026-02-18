import React from 'react'
import { IoSearch } from 'react-icons/io5'
function Search() {
  return (
    <div className='flex flex-col justify-center items-center  w-full max-w-full'>
              <div className='relative grid grid-cols-1 grid-rows-1 w-full md:max-w-10/12 lmd:max-w-8/12 justify-center items-center self-center '>
                <IoSearch className='absolute ml-2  text-gray-400 size-5 lg:size-6'/>
                <input type="text" placeholder="Search for products, brands and more" className='text-[0.8em] lmd:text-[1.2em] lg:text-[1.3em] pl-8 lg:pl-10 w-full h-10 lmd:h-12 lg:h-14 rounded-full border-2 border-blue-400 px-2 self-center'/>
              </div>
    </div>
  )
}

export default Search