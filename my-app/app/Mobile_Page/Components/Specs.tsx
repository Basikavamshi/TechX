import React from 'react'
import { mobiles } from './SampleData'
import { Cpu } from 'lucide-react';
function Specs() {
  
  return (
    <div className='flex  flex-col gap-2 w-full h-full p-2 box-border border-2 border-gray-200 bg-gray-50 rounded-[0.5em]'>
        <div className='w-full h-full'>
            <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[1em] sm2:text-[1.1em] md2:text-[1.3em]'>Specs</span>
            </div>
        </div>
        <div className='flex flex-col gap-4 justify-start box-border p-2'>
        {
            mobiles.map((value,key)=>{
                return(
                    <div className='flex flex-col gap-2' key={key}>
             
                        <div className='flex flex-row gap-2 items-center justify-start'>
                            <Cpu className="text-blue-400 size-5"/>
                            <span className='text-[1.1em]'>value</span>
                        </div>
                        <div className="pl-5">
                            <span className='text-[1em] sm2:text-[1.2em]'>{value}</span>
                        </div>
                    </div>
                )
            })
            
        }
        </div>
    </div>
  )
}

export default Specs