import React from 'react'
import Image from 'next/image'
import img from '../../public/iphone.png'
function Laptops() {
  return (
    <div className='flex flex-col w-dvw h-full gap-4 p-3 md2:p-4 md:p-8 box-border lg:max-w-5xl'>
        <div className='flex flex-row justify-between items-center w-full '>
            <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.3em]'>Popular Laptops</span>
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-[0.9em]'>View All</button>
            </div>
        </div>
        <div className='flex flex-row justify-start items-start gap-4 w-full h-full overflow-scroll p-1 pt-0 '>
            <div className='relative flex flex-col w-full min-w-[150px] max-w-[200px] h-fit  gap-2'>
                <div className='relative w-full h-[170px]'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image55.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.6em]'/>
                    <span>4.5/5</span>
                </div>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>Samsung Galaxy S21</span>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>$799</span>
            </div>
            <div className='relative flex flex-col w-full min-w-[150px] max-w-[200px] h-fit  gap-2'>
                <div className='relative w-full h-[170px]'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image55.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.6em]'/>
                    <span>4.5/5</span>
                </div>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>Samsung Galaxy S21</span>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>$799</span>
            </div>
            <div className='relative flex flex-col w-full min-w-[150px] max-w-[200px] h-fit  gap-2'>
                <div className='relative w-full h-[170px]'>
                    <Image src={img} alt="Trending Image" fill className='w-full h-full object-cover bg-blue-50 border-2 border-amber-50 rounded-[0.6em]'/>
                    <span>4.5/5</span>
                </div>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>Samsung Galaxy S21</span>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>$799</span>
            </div>
            <div className='relative flex flex-col w-full min-w-[150px] max-w-[200px] h-fit  gap-2'>
                <div className='relative w-full h-[170px]'>
                    <Image src={img} alt="Trending Image" fill className='w-full h-full object-cover bg-blue-50 border-2 border-amber-50 rounded-[0.6em]'/>
                    <span>4.5/5</span>
                </div>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>Samsung Galaxy S21</span>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>$799</span>
            </div>
            
            <div className='relative flex flex-col w-full min-w-[150px] max-w-[200px] h-fit  gap-2'>
                <div className='relative w-full h-[170px]'>
                    <Image src="https://images.indianexpress.com/2026/01/Tech-featured-image55.jpg?w=1600" alt="Trending Image" fill className='w-full h-full object-cover border-2 border-amber-50 rounded-[0.6em]'/>
                    <span>4.5/5</span>
                </div>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>Samsung Galaxy S21</span>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.1em]'>$799</span>
            </div>
           
        </div>
    </div>
  )
}

export default Laptops