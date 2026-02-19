import React from 'react'
import img2l from '../../../public/img2l.jpg';
import Image from 'next/image';
import { newsData } from './Sampledata';
import Pagination from '@/app/Shared_Components/Pagination';
function News() {
  return (
    <div className='flex flex-2 flex-col w-full h-full p-2 box-border justify-start items-start gap-4 '>
        
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

      <Pagination/>
      
    </div>
  
)}

export default News