import React from 'react'
import Image from "next/image";
function TrendingPage() {
  return (
    <div className=' flex flex-col justify-self-start items-start gap-4 w-dvw h-[400px] sm:h-[500px]  lg:h-[700px] lg:max-w-5xl  p-3 md2:p-4 md:p-8 box-border'>
        <div className='flex flex-row justify-between items-center w-full'>
            <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.3em]'>Trending on this week</span>
            </div>
            
        </div>
        <div className='grid grid-rows-[0.6fr_0.3fr] grid-cols-4 lg:grid-rows-3 lg:grid-cols-4 gap-2 sm:gap-4 w-full h-full p-1 pt-0 '>

            <div className='relative col-span-4 row-span-1 lg:col-span-3 lg:row-span-2 w-full h-full '>
                <Image src="https://images.indianexpress.com/2025/12/IE-2025-12-02T123710.427.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
            </div>
          <div className='relative lg:flex grid grid-rows-1 grid-flow-col   lg:flex-col col-span-4 lg:col-span-1 lg:row-span-2  w-full max-w-full max-h-full h-full gap-2  '>
                <div className=' relative  w-full h-full '>
                    <Image src="https://images.indianexpress.com/2025/12/Tech-featured-image10.jpg?w=1600" alt="Trending Image" fill   className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em] '/>
                </div>
                <div className='relative  w-full h-full '>
                    <Image src="https://images.indianexpress.com/2026/02/Pixel-10a.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
                </div>
                <div className='hidden md:grid relative  w-full h-full'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image48.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
                </div>
          </div> 
          <div className='hidden relative lg:flex  grid-rows-1 grid-flow-col lg:flex-row col-span-4 lg:col-span-4 lg:row-span-1 w-full h-full gap-2'>
                <div className='relative w-full h-full'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image55.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
                </div>
                <div className='relative  w-full h-full'>
                    <Image src="https://images.indianexpress.com/2026/01/IE-2026-01-19T154517.473.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
                </div>
                <div className='relative w-full h-full'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image66.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.3em]'/>
                </div>
          </div>

        </div>
        <div className='lg:hidden flex justify-center items-center w-full'>
           <div className='flex flex-row items-center gap-4'>
                <svg width="40" height="20" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0.585785 13.3138C-0.195263 14.0949 -0.195263 15.3612 0.585785 16.1422L13.3137 28.8702C14.0948 29.6512 15.3611 29.6512 16.1421 28.8702C16.9232 28.0891 16.9232 26.8228 16.1421 26.0417L4.82843 14.728L16.1421 3.41432C16.9232 2.63327 16.9232 1.36694 16.1421 0.585892C15.3611 -0.195157 14.0948 -0.195157 13.3137 0.585892L0.585785 13.3138ZM44 14.728V12.728L2 12.728V14.728V16.728L44 16.728V14.728Z" fill="black"/>
                </svg>
                <svg width="40" height="20" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12.728C0.89543 12.728 0 13.6235 0 14.728C0 15.8326 0.89543 16.728 2 16.728V14.728V12.728ZM45.4142 16.1422C46.1953 15.3612 46.1953 14.0949 45.4142 13.3138L32.6863 0.585892C31.9052 -0.195157 30.6389 -0.195157 29.8579 0.585892C29.0768 1.36694 29.0768 2.63327 29.8579 3.41432L41.1716 14.728L29.8579 26.0417C29.0768 26.8228 29.0768 28.0891 29.8579 28.8702C30.6389 29.6512 31.9052 29.6512 32.6863 28.8702L45.4142 16.1422ZM2 14.728V16.728H44V14.728V12.728H2V14.728Z" fill="black"/>
                </svg>
                
            </div>

        </div>
    </div>
  )
}

export default TrendingPage