'use client'
import React, { useEffect } from 'react'
import { DiJava } from 'react-icons/di'
import { useState } from 'react'
import Search from '../Shared_Components/Search'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { CiStar } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
function page() {
  const sort_data=[{"name":"Popularity","value":"Popularity"},{"name":"Price Low - High","value":"price_asc"},{"name":"Price High - Low","value":"price_desc"},{"name":"Most Viewed","value":"Viewed"}]
  const [filter,setfilter]=useState(false)
  const [suggestions,setSuggestions]=useState([])
  const [filteredData,setFilteredData]=useState({
    "tag":[],
    "min_price":0,
    "max_price":100000,
    "brand":[],
    "feature":[],
    "ordering":""
  });

  const [searchQuery,setSearchQuery]=useState("");
  const [sort,setsort]=useState(false)
  const handlefilter=()=>{
    setfilter(!filter);
  }
  const handlesort=()=>{
    setsort(!sort);
  }

 

  return (
<div className='bg-linear-to-b from-blue-50 to-gray-50 '>
    <div className=' flex flex-col h-full justify-self-center w-dvw max-w-5xl justify-start items-start  gap-4 p-3 md2:p-4 md:p-8 box-border min-w-[200px]  overflow-scroll '>
    {/* search bar*/}
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} suggestions={suggestions}/>
    {/*  title and sort  */}
       <div className='grid grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 justify-between items-center w-full '>
          <div className='grid col-span-2 lg:col-span-1 items-center'>
             <span className='text-[1.1em] sm2:text-[1.2em] font-medium  wrap-break-word'>Latest Mobiles in 2026</span>
          </div>
          <div className='flex lg:hidden flex-row items-center justify-center gap-2 border-2 rounded-2xl border-gray-400 sm2:w-full sm2:max-w-10/12 lmd:max-w-6/12 bg-white ' onClick={handlefilter}>
                <span className='flex items-center text-[1em] sm2:text-[1.1em] font-medium'>Filter</span>
                <div className='flex justify-center items-center '>
                    <TiArrowSortedDown className='inline size-5 '/>
                </div>  
          </div>
          <div className='relative flex sm2:justify-self-end sm2:w-full sm2:max-w-10/12 lmd:max-w-6/12 lg:max-w-4/12'>
              <div className='flex flex-row items-center justify-center gap-2 border-2 rounded-2xl border-gray-400 w-full h-full   bg-white ' onClick={handlesort}>
                <span className='text-[1em] sm2:text-[1.1em] '>Sort by</span>
                <div className='flex justify-center items-center '>
                    <TiArrowSortedDown className='inline size-5 '/>
                </div>
              </div>
                <div className={`absolute ${sort ? "flex":"hidden"} top-full left-0   flex-col gap-2  p-2 pt-0 mt-2 box-border border-[0.1em] border-black rounded-[0.2em] bg-white  w-full h-maxl shadow-2xl z-1`}>
                  {
                     sort_data.map((value,key)=>{
                        const isSelected=filteredData.ordering==value.value;
                        return(
                            <div key={key}  className='flex flex-row justify-start items-center gap-2 w-full h-full hover:cursor-pointer' onClick={()=>setFilteredData((prev)=>{
                                const alreadySelected=prev.ordering==value.value;
                               
                                return(
                                    {
                                        ...prev,
                                        ordering: alreadySelected ? "" : value.value
                                      
                                    }
                                )
                            })}>
                              <input type='checkbox' checked={isSelected} onChange={()=>{}}></input>
                              <span className='text-[1em]'>{value.name}</span>
                            </div>
                        )
                     })
                  }
                   
                </div>
          </div>
       </div>
    {/*  main  */}
        <div className='flex flex-row gap-4 items-start  w-full h-full  '>
            {/*  main left  */}
            <div className={` ${filter ? 'absolute' : 'hidden'}  z-3 lg:z-0 left-0 top-0 bg-white  w-full lg:flex lg:relative lg:flex-1 lg:w-full lg:h-full  `}>
                <Filter onClose={handlefilter} filteredData={filteredData} setFilteredData={setFilteredData} />
            </div>
            {/*  main right  */}
            <div className='flex flex-2 w-full h-full  '>
                <Cards filteredData={filteredData} searchQuery={searchQuery} setSuggestions={setSuggestions} />
            </div>

        </div>
        
        
 
    </div>
</div>
  )
}

export default page