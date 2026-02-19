import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { MdNavigateBefore } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'
function Pagination() {
  return (
    <div className='flex justify-center items-center w-full h-full   p-2 box-border  '>
            <div className='flex flex-row justify-center items-center gap-2 sm2:gap-4 w-full '>
                <div className='flex flex-row justify-center sm2:gap-2 pl-1 pr-2 sm2:pl-2 sm2:pr-2 items-center border-[0.1em] box-border rounded-[0.4em] border-black-400 bg-white'>
                    <GrFormPrevious className='inline size-4 sm2:size-5'/>
                    <span className='text-[1em] sm2:text-[1.1em]'>Prev</span>
                </div>
                <div className='border-[0.1em] rounded-[0.4em] border-black box-border pl-1 pr-1 sm2:pl-2 sm2:pr-2'>
                    <span>1</span>    
                </div>
                <div className='border-[0.1em] rounded-[0.4em] border-black box-border pl-1 pr-1 sm2:pl-2 sm2:pr-2'>
                    <span>2</span>    
                </div>
                <div className='border-[0.1em] rounded-[0.4em] border-black box-border pl-1 pr-1 sm2:pl-2 sm2:pr-2'>
                    <span>3</span>    
                </div>
                <div className='border-[0.1em] rounded-[0.4em] border-black box-border pl-1 pr-1 sm2:pl-2 sm2:pr-2'>
                    <span>4</span>    
                </div>
                <div className='flex flex-row justify-center sm2:gap-2 pl-1 pr-2 sm2:pl-2 sm2:pr-2 items-center border-[0.1em] box-border rounded-[0.4em] border-black-400 bg-white'>
                    <span className='text-[1em] sm2:text-[1.1em]'>Next</span>
                    <MdNavigateNext className='inline size-4 sm2:size-5'/>
                </div>
            </div>
        </div>
  )
}

export default Pagination