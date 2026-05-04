'use client'
import React from 'react'
import Image from 'next/image'
import { Smartphone } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';



import { History } from 'lucide-react';

function SearchCard({ value,setRecentSearches,recent_tab}: { value: any,setRecentSearches?: any,recent_tab?:boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
   const handledeleteRecentSearches = (item:any) => {
        let data = JSON.parse(localStorage.getItem("data")) || [];

        // remove selected item
        const updated = data.filter((i) => i.value !== item.value);

        // update storage
        localStorage.setItem("data", JSON.stringify(updated));

        // update state
        setRecentSearches?.(updated);
};
  
  return (
    <div className='flex flex-col  gap-2 cursor-pointer ' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='flex flex-row items-center justify-center gap-2'>
            
            <div className='w-[36px] h-[36px] md:w-[42px] md:h-[42px] relative items-center justify-center '>
                {
                value["img"]!=""?
                <Image 
                    src={value["img"]} 
                    alt="product"
                    fill
                    className='rounded-[0.5em] object-cover'
                />:

                <div className='flex items-center justify-center w-full h-full  '>
                    <Smartphone className='w-full h-full text-gray-300 stroke-[1.5]'/>
                </div>

                



          }
            </div>

            <div className='flex flex-col flex-grow-1 '>
                <span className='text-[0.8em] md:text-[1em] font-semibold'>{value["value"]}</span>
                {value["img"]!=""&&<span className='text-[0.7em] md:text-[0.9em] font-semibold text-gray-500 tracking-wide'>$ {value["price"]}</span>}
            </div>

             {recent_tab && (
                    <>
                        {/* Desktop (hover based) */}
                        <div className="hidden md:flex">
                            {isHovered ? (
                                <X
                                className="size-5 text-gray-400"
                                onClick={() => handledeleteRecentSearches(value)}
                                />
                            ) : (
                                <History className="size-5 text-gray-400" />
                            )}
                        </div>

                        {/* Mobile (always show delete) */}
                        <div className="flex md:hidden">
                            <History className="size-5 text-gray-400" />
                        </div>
                    </>
        )}
        </div>
    </div>
  )
}

export default SearchCard