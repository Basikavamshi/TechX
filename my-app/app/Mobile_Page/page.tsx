import React from 'react'
import Image from './Components/ProductImage'
import Specs from './Components/Specs'
import Title from './Components/Title'
import YTvidoes from '../Shared_Components/YTvidoes'
function page() {
  return (
<div className='flex justify-center bg-linear-to-b from-blue-50 to-gray-50 w-full h-full p-4 min-w-[200px] overflow-scroll'>
    <div className='flex flex-col max-w-4xl w-dvw h-full  gap-4 '>
        {/* title */}
        <div className='w-full h-full '>
            <Title/>
        </div>
        {/* rating and launch date */}
        <div className='flex flex-row gap-1 justify-between p-2 pb-0 pt-0 md:pl-2'>
            <span className='text-[0.7em] sm2:text-[0.9em] md:text-[1em] lg:text-[1.1em] font-medium text-gray-600'>Rating | 4.5/5</span>
            <span className='text-[0.7em] sm2:text-[0.9em] md:text-[1em] lg:text-[1.1em] font-medium text-gray-600'>Launch Date:25/02/2026</span>
        </div>
        {/* main */}
        <div className='flex flex-col md:flex-row w-full h-full gap-4 '>
            {/* image */}
            <div className='flex flex-1 w-full h-full'>
                <Image/>
            </div>
            {/* specs */}
            <div className='flex flex-1 w-full h-full p-2'>
                <Specs/>
            </div>
           

        </div>
         {/*yt videos*/}
        <div className='flex w-full h-full'>
            <YTvidoes/>
        </div>
    </div>
</div>
  )
}

export default page