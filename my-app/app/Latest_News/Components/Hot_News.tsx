import React from 'react'
import img2l from '../../../public/img2l.jpg';
import Image from 'next/image';
import { newsData } from './Sampledata'
function Hot_News() {
  return (
    <div className='flex flex-1 flex-col w-full h-full border-2 border-gray-200 bg-[#eeeff0] p-2 box-border'>
        <div className='flex flex-col justify-start items-center gap-4'>
          <div className='flex flex-row justify-between items-center w-full '>
              <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                  <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                  </svg>
                  <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.3em] font-semibold'>Hot News On This Week</span>
              </div>
          </div>
            <div className='flex flex-col gap-4'>
                {

                newsData.map((news,id)=>{
                  return(
                    <div key={id} className='flex flex-row w-full h-max items-center justify-start gap-4 border-b-[0.1em] border-gray-400  pb-4'>
                      <div className='relative flex justify-center items-center w-full h-full aspect-4/3 '>
                        <Image src={img2l}  fill alt='img2' className='w-full h-full rounded-[0.5em]  '/>
                      </div>
                      <div className='flex flex-col justify-items-start justify-start items-center w-full h-full  gap-2'>
                          <span className='inline self-start  text-[0.9em]'>{news.category}</span>
                          <span className='inline self-start  text-[0.9em]'>{news.headline}</span>
                          <span className='inline self-start  text-[0.9em]'>{news.time}</span>
                      </div>
                  </div>
                  )
                 })
        
               }
            </div> 
        </div>
    </div>
  )
}

export default Hot_News