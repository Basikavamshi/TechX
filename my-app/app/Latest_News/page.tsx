'use client'
import React from 'react'
import { DiJava } from 'react-icons/di'
import { useState } from 'react'
import Search from '../Shared_Components/Search'
import { CiStar } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import News from './Components/News';
import Hot_News from './Components/Hot_News'
import LatestNews from '../Home_Components/LatestNews'
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
<div className="relative flex flex-col bg-linear-to-b from-blue-50 to-gray-50 min-h-screen justify-top items-center box-border p-2.5 min-w-[200px] gap-4">
    {/* search bar and # tags*/}
      <div className='flex flex-col w-9/12 self-center h-max gap-4 justify-center '>
          <Search/>
          <div className='flex flex-row justify-start items-center  w-full md:max-w-10/12 lmd:max-w-11/12 justify-self-center self-center gap-4 lg:gap-6 '>
              <span>trending..</span>
              <div className='flex flex-row justify-start items-center overflow-x-auto  w-full max-w-full box-border scroll-smooth bg-scroll  gap-2 scroll-ml-2 scroll-pl-2  '>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6 lg:h-6  text-[0.7em] pl-2 pr-2 box-border'>#Smartphones</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border'>#Laptops</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border text-nowrap'>#Electric Vehicles</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border'>#Wearables</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border text-nowrap'>#Tech News</button>
              </div>
         </div>
      </div>
    {/* Trending news*/}
    <div >
        <LatestNews header_name="Trending On TechX"  value="Latest_News"/>
    </div>

    {/*main_news*/}
    
    <div className='flex flex-col w-dvw h-fit  gap-4 p-3 md2:p-4 md:p-8 box-border lg:max-w-5xl '>
        {/*nav header */}
        <div className='flex flex-row justify-between items-center w-full '>
            <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.3em]'>Latest News</span>
            </div>
        </div>
        {/*main */}
        <div className='flex flex-col lg:flex-row  w-full gap-15'>
           <News/> 
           <Hot_News/>
        </div>
           
    </div>   


    

</div>
  )
}

export default page