import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
function YTvidoes() {
    return (
        <div className=' flex flex-col w-full h-full gap-4  justify-center p-2 '>
            <div className='flex flex-row gap-2 md:gap-16 items-center justify-self-center m-auto justify-between w-max h-full '>
                <div className='flex flex-row justify-between items-center border-2 gap-1 sm2:gap-2 p-1 pt-1 pb-1 border-red-500 box-border rounded-[8px]'>
                    <span className='text-[1em] sm2:text-[1.1em] font-medium'>Telugu</span>
                    <TiArrowSortedDown />
                </div>
                <div className='flex flex-row justify-between items-center border-2 gap-1 sm2:gap-2 p-2 pt-1 pb-1 border-red-500 box-border rounded-[8px]'>
                    <span className='text-[1em] sm2:text-[1.1em] font-medium'>Review</span>
                    <TiArrowSortedDown />
                </div>
                <div className='flex flex-row justify-between items-center border-2 gap-1 sm2:gap-2 p-2 pt-1 pb-1 border-red-500 box-border rounded-[8px]'>
                    <span className='text-[1em] sm2:text-[1.1em] font-medium'>Youtube</span>
                    <TiArrowSortedDown />
                </div>
            </div>

            <div className='flex justify-center w-full h-full'>
                <div className='w-2xl h-full aspect-4/2 border-2 bg-gray-50 justify-center items-center text-center rounded-2xl'>
                    youtube
                </div>
            </div>

        </div>
    )
}

export default YTvidoes