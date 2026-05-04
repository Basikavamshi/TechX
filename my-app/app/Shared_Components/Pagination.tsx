'use client'
import React, { useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { MdNavigateBefore } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

function Pagination({pages,currentPage,setcurrentPage}) {
  
  
  console.log([...Array(pages)])
  
  return (
    <div className='flex justify-center items-center w-full h-full   p-2 box-border  '>
            <div className='flex flex-row justify-center items-center gap-2 sm2:gap-4 w-full '>
                <button className={`${currentPage==1?"hidden":"flex"} flex-row justify-center sm2:gap-2 pl-1 pr-2 sm2:pl-2 sm2:pr-2 items-center border-[0.1em] box-border rounded-[0.4em] border-black-400 bg-white`} onClick={()=>setcurrentPage(currentPage-1)}>
                    <GrFormPrevious className='inline size-4 sm2:size-5'/>
                    <span className='text-[1em] sm2:text-[1.1em]'>prev</span>
                </button>
                {
                
                [...Array(pages)].map((_,index)=>{
                return(
                
                <button className={`${
                    currentPage==index+1?"bg-black text-white":"bg-white"
                }  border-[0.1em] rounded-[0.4em] border-black box-border pl-1 pr-1 sm2:pl-2 sm2:pr-2 `} key={index} onClick={()=>{setcurrentPage(index+1)}}>
                    <span>{index+1}</span>    
                </button>

                )})

                }
               
                <button className={`${currentPage==pages?"hidden":"flex"} flex-row justify-center sm2:gap-2 pl-1 pr-2 sm2:pl-2 sm2:pr-2 items-center border-[0.1em] box-border rounded-[0.4em] border-black-400  bg-white`} onClick={()=>{setcurrentPage(currentPage+1)}}>
                    <span className='text-[1em] sm2:text-[1.1em]'>Next</span>
                    <MdNavigateNext className='inline size-4 sm2:size-5'/>
                </button>
            </div>
        </div>
  )
}

export default Pagination