"use client"
import { IoSearch } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Search_headers from './Search_Components/search_headers';
import { History } from 'lucide-react';
import img from "../../public/iphone.png";
import smartphone from "../../public/smartphone.svg";
import SearchCard from './Search_Components/search_card';
import { Smartphone } from 'lucide-react';
import { X } from 'lucide-react';

function Search({searchQuery,setSearchQuery,suggestions}:{suggestions:any,searchQuery:string, setSearchQuery:(query:string)=>void}) {
  const [isOpen,setisOpen]=useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [recentSearches,setRecentSearches]=useState([]);

  const mobilesByPrices=["Mobiles Under 10000","Mobiles Under 20000","Mobiles Under 30000","Mobiles Under 40000","Mobiles Under 50000"]
  const mobilesByFeatures=["5G Mobiles","Best Camera Phones","Best Gaming Phones","Flip Phones"]



  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setisOpen(false)
        
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRecentSearchClick=(query:any)=>{
    //setRecentSearches((prev: string[]) => [...new Set([query, ...prev])]);
    let data=JSON.parse(localStorage.getItem("data")) || [];
    data=data.filter((res)=>res["value"]!=query["value"]);
    data.unshift(query);
    localStorage.setItem("data",JSON.stringify(data));
    setSearchQuery(query["value"]);
    setRecentSearches((prev:any)=>[...new Set([query,...prev])]);
    setisOpen(false);
  }


  const handleSearchSubmit=(value:any)=>{
    setSearchQuery(value);
    setisOpen(false);
  }


 


  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("data")) || [];
    setRecentSearches(data);
  },[recentSearches])



  return (
    <div  className={`${isOpen?"fixed bg-white":"relative bg-transparent"} inset-0  md:relative flex flex-col justify-center items-center  w-full max-w-full z-4 md:z-1 p-2 md:p-0   md:bg-transparent `}>
          <div ref={searchRef} className='relative inset-0 flex flex-col gap-2  md:grid md:grid-cols-1 md:grid-flow-row justify-start  items-start md:justify-center md:items-center w-full h-full max-w-full md:max-w-11/12 lg:max-w-[633px]  rounded-[0.5em]  p-1 md:border-2 md:border-gray-300 md:focus-within:border-blue-500  md:bg-white '>
              <div  className={`relative grid grid-cols-1  border-2 focus-within:border-blue-500 border-gray-400 rounded-[0.6em] md:border-0 grid-rows-1 w-full justify-center  items-center md:self-center  bg-white`}>
                <IoSearch className='absolute ml-2  text-gray-400 size-5 md:size-5  lg:size-6'/>
                <input type="text" placeholder="Search for products, brands and more"  className='text-[1em] md:text-[1.2em] lmd:text-[1.2em] lg:text-[1.3em] pl-8 md:pl-8 lg:pl-10 w-full h-12 lmd:h-12   px-2 self-center focus:outline-none  ' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=>setisOpen(true)} />
              </div>
              <div className={`${isOpen?"flex":"hidden"} ${isOpen?"md:absolute":"md:hidden"}  md:top-1/1 md:mt-2 flex flex-col   w-full h-max md:border-2 md:border-white md:shadow-2xl  justify-evenly  rounded-[0.5em] p-2 box-border overflow-scroll md:bg-white`}>
               <div className='flex flex-col '>
                    <div className='flex flex-col gap-4 w-full h-full'>
                      {
                        suggestions&&suggestions.map((value:any,key:any)=>{
                            return(
                              value["type"]=="query"?
                              <div key={key} className='flex flex-row items-center justify-start gap-2 hover:bg-gray-100 p-1 cursor-pointer' onClick={()=>{
                                handleRecentSearchClick(value);

                              }}>
                              <SearchCard value={{ value: value["value"], price: "", img: "" }}/>
                              </div>
                              :
                              <div className='flex flex-col gap-2 w-full h-full cursor-pointer' onClick={()=>{
                                handleRecentSearchClick(value);

                              }} key={key}>
                                  <SearchCard value={value} />
                              </div>
                            )

                        })
                      }
                    </div>
                    <div className={`${suggestions?.length > 0 ? "hidden" : "flex"}  flex-col lg:flex-row gap-2 justify-between items-stretch`}>
                        <div className='flex flex-col gap-2 w-full h-full'>

                              <div className='flex flex-col gap-3 w-full h-full'>
                                  <Search_headers header_value="Recent Searches" />
                                  {
                                      recentSearches&&recentSearches.map((value:any,key:any)=>{
                                          return(
                                            value["type"]=="query"?
                                            <div className='flex flex-col gap-2 w-full h-full' key={key} onClick={handleSearchSubmit.bind(null,value["value"])}>
                                                <SearchCard value={{ value: value["value"], price: "", img: "" }} setRecentSearches={setRecentSearches} recent_tab={true}/>
                                            </div>
                                            
                                            :
                                            <div className='flex flex-col gap-2 w-full h-full' key={key} onClick={handleSearchSubmit.bind(null,value["value"])}>
                                                <SearchCard value={value} setRecentSearches={setRecentSearches} recent_tab={true}/>
                                            </div>
                                          )

                                      })
                              }
                                  
                              </div>
                            
                              <div className='flex flex-col gap-2 w-full h-full'>
                                  <Search_headers header_value="Trending Searches" />
                                  <div className='flex flex-col gap-2 w-full h-full cursor-pointer' onClick={handleSearchSubmit.bind(null,"iphone 17")}>
                                    <SearchCard value={{ value: "iphone 17", price: "79,000", img: img }} recent_tab={false} />
                                  </div>
                              </div>
                          </div>

                        <div className='w-[4px]  bg-[#AFABAB] '/>
                        <div className='flex flex-col gap-2 w-full h-full'>
                            <div className='flex flex-col gap-2'>
                                <Search_headers header_value="Mobiles By Prices" />
                                <div className='flex flex-col pl-2 box-border gap-2'>
                                  {
                                    mobilesByPrices.map((value,key)=>{
                                        return(
                                          <span key={key} className='text-[0.9em] md:text-[1em] font-medium hover:cursor-pointer' onClick={handleSearchSubmit.bind(null,value)}>
                                            {value}
                                          </span>
                                        )
                                    })
                                  }
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Search_headers header_value="Mobiles By Features" />
                                <div className='flex flex-col pl-2 box-border gap-2'>
                                  {
                                    mobilesByFeatures.map((value,key)=>{
                                        return(
                                          <span key={key} className='text-[0.9em] md:text-[1em] font-medium hover:cursor-pointer' onClick={handleSearchSubmit.bind(null,value)}>
                                            {value}
                                          </span>
                                        )
                                    })
                                  }
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                  

              </div>
              
          </div>
          <X className={`${isOpen?"absolute":"hidden"} md:hidden bottom-8 size-8 bg-blue-400 border-2 border-blue-400 text-white  font-bold rounded-full ' onClick={()=>setisOpen(false)}`}/>
    </div>
  )
}

export default Search