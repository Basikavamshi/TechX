import React from 'react'
import { IoSearch } from "react-icons/io5";
function HeroSection() {
  return (
    <div className='flex flex-col justify-center align-top items-start '>
        <div className='flex flex-col justify-center align-top items-start gap-4  w-full lg:max-w-6xl p-2'>
           <div className='flex flex-col self-center justify-center align-middle items-center lg:gap-4'>
              <h1 className='text-[1.2em] sm2:text-nowrap sm2:text-[1.4em] md2:text-2xl lmd:text-3xl lg:text-4xl lg2:text-5xl font-semibold text-center mb-2 '><span className='text-red-500'>Explore</span> the Future of Technology</h1>
              <h2 className='text-[0.9em] text-gray-600 sm2:text-[1em] md2:text-1xl lmd:text-[1.2em] lg:text-[1.4em] lg2:text-2xl font-light text-center mb-2'>Mobiles, Laptops, Gadgets, EVs & Tech News</h2>
           </div>
           <div className='flex flex-col justify-center items-center  w-full max-w-full'>
              <div className='relative grid grid-cols-1 grid-rows-1 w-full md:max-w-10/12 lmd:max-w-11/12 justify-center items-center self-center '>
                <IoSearch className='absolute ml-2  text-gray-400 size-5 lg:size-6'/>
                <input type="text" placeholder="Search for products, brands and more" className='text-[0.8em] lmd:text-[1.2em] lg:text-[1.3em] pl-8 lg:pl-10 w-full h-10 lmd:h-12 lg:h-14 rounded-full border-2 border-blue-400 px-2 self-center'/>
              </div>
           </div>
           <div className='flex flex-row justify-start items-center  w-full md:max-w-10/12 lmd:max-w-11/12 justify-self-center self-center gap-4 lg:gap-6'>
              <span>trending..</span>
              <div className='flex flex-row justify-start items-center overflow-x-auto  w-full max-w-full box-border scroll-smooth bg-scroll  gap-2 scroll-ml-2 scroll-pl-2 '>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6 lg:h-6  text-[0.7em] pl-2 pr-2 box-border'>Smartphones</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border'>Laptops</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border text-nowrap'>Electric Vehicles</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border'>Wearables</button>
                <button className='bg-white text-black border-[1.4px] text-center align-middle  border-[#6E17F2] font-medium rounded-full w-fit h-6  lg:h-6 text-[0.7em] pl-2 pr-2 box-border text-nowrap'>Tech News</button>
              </div>
           </div>
        </div>
    </div>
  )
}

export default HeroSection