"use client"
import React from 'react'
import Image from 'next/image'
import { MdExpandMore } from "react-icons/md";
import { BiMenu } from 'react-icons/bi'
import SamImg from "../../../public/samimg.avif"
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaAmazon } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiInfo } from "react-icons/fi";
function ProductImage() {
  return (
    <div className='flex  flex-col bg-transparent gap-2 md:gap-4 box-border w-full h-full p-2 pt-0 '>
       {/* image */}
       <div className='flex items-center w-full h-full border-2 p-2 pl-0 pr-0 md:p-4 border-gray-200 bg-white box-border rounded-lg'>
            <div className='flex items-center relative w-full h-full aspect-4/3  '>
                <Image src={SamImg} alt="mobile image" fill className='w-full h-full object-contain rounded-lg '/>
            </div>
        </div>
        {/* variant and price */}
        <div className='relative flex flex-col gap-4 md:gap-8 p-2 pt-4 pb-0 sm2:pb-4 md:pb-16 w-full h-full box-border rounded-lg border-t-2 border-gray-200 bg-linear-to-b from-white via-[#f8f5f59d] to-transparent  overflow-hidden ' >


             {/* left Gradient Border */}
            <div className='absolute left-0 top-0 h-full w-[2px] 
                  bg-gradient-to-b from-gray-200 via-gray-200/50 to-transparent  rounded-l-lg'></div>

            {/* Right Gradient Border */}
            <div className='absolute right-0 top-0 h-full w-[2px] 
                            bg-gradient-to-b from-gray-200 via-gray-200/50 to-transparent   rounded-r-lg'></div>

            <div className='flex flex-row gap-2 justify-between items-center'>
                <div className='flex flex-row justify-center items-center border-[0.1em] border-gray-300 p-0.5 pl-4 pr-4 box-border rounded-md'>
                        <span className='text-[0.9em] sm2:text-[1.1em] font-medium'>Varaint</span>
                        <MdExpandMore className='inline size-5 sm2:size-6 ml-1 font-medium'/>
                    
                </div>
                <div className='flex flex-row justify-center items-center border-[0.1em] border-gray-300 p-0.5 pl-4 pr-4 box-border rounded-md'>
                    <span className='text-[0.9em] sm2:text-[1.1em] font-medium'>Color</span>
                    <MdExpandMore className='inline size-5 sm2:size-6 ml-1 font-medium'/>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-2 border-[0.1em] bg-gray-50 border-gray-200 p-2 box-border rounded-lg  '>
                 <div className='flex flex-row justify-between items-center gap-2 sm2:gap-4   box-border '>
                    <div className='flex flex-row gap-2 sm2:gap-4 justify-start items-center'>
                            <div className='relative'>
                                <div className='flex flex-row gap-1 md:gap-2 justify-center items-center border-0 border-grey rounded-2xl box-border  cursor-pointer' onClick={()=>handleStoreDropdown(key)}>
                                    <FaAmazon className='size-4 sm2:size-5' color="#FF9900"/>
                                    <span className='text-[0.8em] sm2:text-1 font-medium'>Amazon</span>
                                    <TiArrowSortedDown className='size-4' color="grey"/>
                                </div>
                            
                                {/* dropdown menu */}
                                <div className={`hidden absolute bg-white top-full left-0 w-full border-[0.1em] border-gray-500 rounded-[0.3em] mt-1 h-max z-1 `}>
                                    <div className='flex flex-row justify-start items-center box-border p-2 hover:bg-gray-100 cursor-pointer'>
                                        <span className='text-[0.9em] font-medium'>Option 1</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center box-border p-2 hover:bg-gray-100 cursor-pointer'>
                                        <span className='text-[0.9em] font-medium'>Option 2</span>
                                    </div>
                                    <div className='flex flex-row justify-start items-center box-border p-2 hover:bg-gray-100 cursor-pointer'>
                                        <span className='text-[0.9em] font-medium'>Option 3</span>
                                    </div>
                                </div>
                        </div>
                            
                    </div>
                       <div className=' justify-center items-center'>
                          <span className='text-[0.8em] sm2:text-[1.1em] font-medium '>
                                $12000
                          </span>
                       </div>
                        
                        <div className='justify-center items-center'>
                            <span className='text-[0.8em] sm2:text-[1.1em]  font-medium   wrap-normal'>
                                Store
                            </span>
                        </div>
            </div>

                <div className='flex justify-start items-center w-full  gap-2 '>
                    <FiInfo className="size-3.5 text-gray-400"/>
                    <span className='text-[0.8em] text-gray-400 font-medium'>Lowest price ever</span>
                </div>
                
        </div>

            <div className='flex w-max justify-self-center self-center border-2 border-blue-600 p-2 pt-1 pb-1 rounded-full box-border items-center gap-1 '>
              <span className='text-[0.8em] sm:text-[0.9em]'>Price Graph</span>
              <TiArrowSortedDown className='size-4 md:size-5'/>
            </div>

       </div>

        

    </div>
  )
}

export default ProductImage