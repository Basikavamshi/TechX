import React from 'react'

import { BiPlus } from 'react-icons/bi'

function Title() {
  return (
    <div className='flex flex-col gap-1 md:gap-2  box-border  '>
        <div className='flex flex-row justify-between gap-2 items-center p-2'>
            <span className='text-[1em] sm2:text-[1.1em] md:text-[1.2em] lg:text-[1.4em] font-medium '>Samsung S24 Ultra</span>
            <div className='flex flex-row gap-1 border-2 rounded-[0.3em] border-gray-300 items-center bg-gray-50 box-border p-0.5 pt-0 pb-0 '>
                <span className='text-[1em]  md:text-[1.1em] lg:text-[1.4em]'>Compare</span>
                <BiPlus className='size-4 md:size-5 lg:size-6'/>
            </div>
            
        </div>
        <div className='w-full box-border pl-2 '>
            <span className='text-[0.8em] sm2:text-[0.9em] md:text-[1em] lg:text-[1.1em] font-light text-gray-600 line-clamp-1'>There's so much more to love about Galaxy S24 and S24+. Especially now that Galaxy S24+ comes with the highest screen resolution on a Galaxy</span>
        </div>
    </div>
  )
}

export default Title