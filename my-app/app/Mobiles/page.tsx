'use client'
import React from 'react'
import { DiJava } from 'react-icons/di'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { CiStar } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
function page() {
  const [filter,setfilter]=useState(false)
  const [sort,setsort]=useState(false)
  const handlefilter=()=>{
    setfilter(!filter);
  }
  const handlesort=()=>{
    setsort(!sort);
  }

  return (
<div className='bg-linear-to-b from-blue-50 to-gray-50'>
    <div className=' flex flex-col h-full justify-self-center w-dvw max-w-5xl justify-start items-start  gap-4 p-3 md2:p-4 md:p-8 box-border min-w-[200px]  overflow-scroll '>
    {/* search bar*/}
          <div className='flex flex-col justify-center items-center  w-full max-w-full'>
              <div className='relative grid grid-cols-1 grid-rows-1 w-full md:max-w-10/12 lmd:max-w-8/12 justify-center items-center self-center '>
                <IoSearch className='absolute ml-2  text-gray-400 size-5 lg:size-6'/>
                <input type="text" placeholder="Search for products, brands and more" className='text-[0.8em] lmd:text-[1.2em] lg:text-[1.3em] pl-8 lg:pl-10 w-full h-10 lmd:h-12 lg:h-14 rounded-full border-2 border-blue-400 px-2 self-center'/>
              </div>
           </div>
    {/*  title and sort  */}
       <div className='grid grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 justify-between items-center w-full '>
          <div className='grid col-span-2 lg:col-span-1 items-center'>
             <span className='text-[1.1em] sm2:text-[1.2em] font-medium  wrap-break-word'>Latest Mobiles in 2026</span>
          </div>
          <div className='flex lg:hidden flex-row items-center justify-center gap-2 border-2 rounded-2xl border-gray-400 sm2:w-full sm2:max-w-10/12 lmd:max-w-6/12 bg-white ' onClick={handlefilter}>
                <span className='flex items-center text-[1em] sm2:text-[1.1em] font-medium'>Filter</span>
                <div className='flex justify-center items-center '>
                    <TiArrowSortedDown className='inline size-5 '/>
                </div>  
          </div>
          <div className='relative flex sm2:justify-self-end sm2:w-full sm2:max-w-10/12 lmd:max-w-6/12 lg:max-w-4/12'>
              <div className='flex flex-row items-center justify-center gap-2 border-2 rounded-2xl border-gray-400 w-full h-full   bg-white ' onClick={handlesort}>
                <span className='text-[1em] sm2:text-[1.1em] '>Sort by</span>
                <div className='flex justify-center items-center '>
                    <TiArrowSortedDown className='inline size-5 '/>
                </div>
              </div>
                <div className={`absolute ${sort ? "flex":"hidden"} top-full left-0   flex-col gap-2  p-2 pt-0 mt-2 box-border border-[0.1em] border-black rounded-[0.2em] bg-white  w-full h-maxl shadow-2xl z-1`}>
                    <span className='text-[1em] whitespace-nowrap '>Popularity</span>
                    <span className='text-[1em] whitespace-nowrap '>Price Low - High</span>
                    <span className='text-[1em] whitespace-nowrap '>Price High - Low</span>
                    <span className='text-[1em] whitespace-nowrap '>Most Viewed</span>
                </div>
          </div>
       </div>
    {/*  main  */}
        <div className='flex flex-row gap-4 items-start  w-full h-full  '>
            {/*  main left  */}
            <div className={` ${filter ? 'absolute' : 'hidden'}  z-3 lg:z-0 left-0 top-0 bg-white  w-full lg:flex lg:relative lg:flex-1 lg:w-full lg:h-full  `}>
                <Filter onClose={handlefilter}/>
            </div>
            {/*  main right  */}
            <div className='flex flex-2 w-full h-full  '>
                <Cards/>
            </div>

        </div>
        
        
 
    </div>
</div>
  )
}

export default page