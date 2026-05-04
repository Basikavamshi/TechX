'use client'
import React from 'react'
import Image from 'next/image'
import SamImg from "../../../public/samimg.avif"
import { FaAmazon } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import { mobiles } from './SampleData';
import { useState } from 'react';
import { RiAddBoxLine } from "react-icons/ri";
import axios from 'axios';
import Pagination from "../../Shared_Components/Pagination"
import { useEffect ,useRef} from 'react';

function Cards({ filteredData,searchQuery ,setSuggestions}: { filteredData: any; searchQuery: string,setSuggestions:any }) {
  const [dropdown,setdropdown]=useState<number | null>(null);
  const [storeDropdown,setStoreDropdown]=useState<number | null>(null);;
  const [MobleData,setMobileData]=useState([]);
  const [totalpages,settotalpages]=useState(0);
  const [currentPage,setcurrentPage]=useState(1);
  const [cursor, setCursor] = useState(null);
  
 const loadRef = useRef(null);
  

  const toggleDropdown = (id: number) => {
    setdropdown(prev => (prev === id ? null : id));
    };

  const handledropdown=(id:number)=>{
    setdropdown(prev => (prev === id ? null : id));
  }
  const handleStoreDropdown=(id:number)=>{
    setStoreDropdown(prev => (prev === id ? null : id));
    }

//   const buildUrl = () => {
//         let url = `http://127.0.0.1:8000/api/products/?page=${currentPage}`;


//         if (filteredData.brand) url += `&brand=${filteredData.brand}`;
//         if (filteredData.min_price) url += `&min_price=${filteredData.min_price}`;
//         if (filteredData.max_price) url += `&max_price=${filteredData.max_price}`;
//         if (filteredData.tag) url += `&tags=${filteredData.tag}`;
//         if(filteredData.ordering) url+=`&ordering=${filteredData.ordering}`;

//         return url;
//     };

   

    // useEffect(()=>{ 
    //     axios.get(buildUrl()).then((response)=>{
    //         setMobileData(response.data.results);
    //         const page_size=10;
    //         const Totalpages=Math.ceil(response.data.count/page_size);
    //         console.log(Totalpages)
    //         settotalpages(Totalpages);
            
    //     })
        

    // },[currentPage,filteredData]);


    const loadMore = async () => {
        if (!cursor) return;
        console.log(filteredData);
        const res = await axios.get("http://127.0.0.1:8000/api/search/", {
            params: {
              search: searchQuery,
              brand: filteredData.brand,
              min_price: filteredData.min_price,
              max_price: filteredData.max_price,
              sort:filteredData.ordering,
              cursor: cursor
            }
        });
       

        setMobileData(prev => [...prev, ...res.data.results]);
        setCursor(res.data.next_cursor);
    };

    const intailSearch = async () => {

        const res = await axios.get("http://127.0.0.1:8000/api/search/", {
            params: {
                search: searchQuery ,
                brand: filteredData.brand,
                min_price: filteredData.min_price,
                max_price: filteredData.max_price,
                sort:filteredData.ordering,
            }
        });

        setMobileData(res.data.results);
        setCursor(res.data.next_cursor);
    };

    
    
    useEffect(()=>{
        const observer=new IntersectionObserver((entries) => {
                        if (entries[0].isIntersecting && cursor) {
                            loadMore();
                        }
                    },
                    {
                        threshold: 1.0
                    }
                );

            if (loadRef.current) {
                observer.observe(loadRef.current);

            }

            return () => {
                if (loadRef.current) {
                  observer.unobserve(loadRef.current);
                }
            };

        


         },[cursor])

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/suggestion/",{
            params:{
                search:searchQuery
            }

        }).then((res)=>{
            setSuggestions(res.data.results);
            console.log(res.data.results);
            console.log("hi")
        })

        
    },[searchQuery])

    useEffect(() => {
       setCursor(null);
       setMobileData([]);
       intailSearch();
       
    }, [filteredData,searchQuery]);


    

    


  
  return (
    <div className='flex flex-col w-full h-full justify-center lg:p-3 gap-4  items-start '>
        {
        MobleData.map((mobile,key)=>{
            return(
       
        <div className=' relative flex flex-col  rounded-[0.5em] border-2 border-gray-300 w-full h-max   gap-2 box-border p-2 pb-0 pl-0 pr-0  bg-white' key={key}>

           <div className='absolute top-1 md:top-2 right-2'>
             <div className='relative'>
              <IoMdMore className='size-6 cursor-pointer' onClick={() => handledropdown(key)}/>
              {/* dropdown  */}
              <div className={`absolute bg-white top-full right-full border-[0.1em] border-gray-500 rounded-[0.3em] w-max h-max ${dropdown === key ? 'block' : 'hidden'}`}>
                 <div className='flex flex-row justify-start items-center box-border p-2'>
                    <FaHeart className='size-4 mr-2 inline text-red-500'/>
                    <span className='text-[0.9em] font-medium'>Add to Whishlist</span>
                 </div>
                 <div className='flex flex-row justify-start items-center box-border p-2'>
                    <FaHeart className='size-4 mr-2 inline text-red-500'/>
                    <span className='text-[0.9em] font-medium'>Add to Whishlist</span>
                 </div>
                 <div className='flex flex-row justify-start items-center box-border p-2'>
                    <MdOutlineReport className='size-4 mr-2 inline text-red-500'/>
                    <span className='text-[0.9em] font-medium'>Report</span>
                 </div>
                    
                 
              </div>
             </div>
           </div>
           <div className=' flex flex-row justify-center items-center w-full h-full gap-2 sm2:gap-4 pl-1.5 lg:pl-4 '>
                <div className='relative flex flex-1 w-full justify-center items-center h-full aspect-4/6 sm2:aspect-1/1   box-border  '>
                    <Image src={mobile["img"][0] ? mobile["img"][0] : "/default-image.jpg"} fill alt='img' className='w-full h-full object-contain'/>
                </div>
                <div className='flex flex-2 flex-col gap-2 sm2:gap-4 w-full h-full mr-4 mt-8 md:mt-4 '>
                    <div>
                        <span className='text-[0.8em] sm2:text-[1.2em] font-medium'>{mobile["name"]}</span>
                    </div>
                    <div className='flex flex-col w-full h-full p-2 pt-0 gap-2 sm2:gap-4'>
                         <div className='flex flex-row items-center gap-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>
                            </div>
                            <span className='text-[0.8em] sm2:text-[1.1em] text-gray-600'>{mobile["specs"][0]}</span>
                         </div>
                         <div className='flex flex-row items-center gap-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>
                            </div>
                            <span className='text-[0.8em] sm2:text-[1.1em] text-gray-600'>{mobile["specs"][1]}</span>
                         </div>
                         <div className='flex flex-row items-center gap-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery-charging-icon lucide-battery-charging"><path d="M11 6h-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1"/><path d="M13 6h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1"/><path d="M8.5 10L11.5 6L10.5 6L13.5 10L12.5 10L15.5 14L14.5 14L17.5 18"/></svg>
                            </div>
                            <span className='text-[0.8em] sm2:text-[1.1em] text-gray-600'>{mobile["specs"][2]}</span>
                         </div>
                        
                         <div className='flex flex-row items-center gap-2'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-cloud-icon lucide-monitor-cloud"><path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>                            </div>
                            <span className='text-[0.8em] sm2:text-[1.1em] text-gray-600'>{mobile["specs"][3]}</span>
                         </div>
                    </div>
                    <div className='flex flex-row justify-between items-center p-2 pt-0 gap-4 '>
                        <span className='text-[0.8em] font-medium sm2:text-[1.1em] text-gray-600'>View All Specs</span>
                        <div className='flex flex-row justify-center items-center gap-1  p-0.5 box-border '>
                            <span className='text-[0.8em] inline items-center font-medium sm2:text-[1.1em] text-gray-600'>Compare</span>
                            <RiAddBoxLine className=' flex size-4 sm2:size-5 items-center justify-center' />
                        </div>
                    </div>
                </div>
           </div>
           <div className='flex flex-row justify-between items-center gap-2 sm2:gap-4 border-t p-2 sm2:p-4  box-border  '>
              <div className='flex flex-row gap-2 sm2:gap-4 justify-start items-center'>
                    <div className='relative'>
                    <div className='flex flex-row gap-2 justify-center items-center border border-grey rounded-2xl box-border p-1 cursor-pointer' onClick={()=>handleStoreDropdown(key)}>
                        <FaAmazon className='size-4 sm2:size-5' color="#FF9900"/>
                        <span className='text-[0.8em] sm2:text-1'>amazon</span>
                        <TiArrowSortedDown className='size-4' color="grey"/>
                    </div>
                    
                    {/* dropdown menu */}
                    <div className={`absolute bg-white top-full left-0 w-full border-[0.1em] border-gray-500 rounded-[0.3em] mt-1 h-max z-1 ${storeDropdown === key ? 'block' : 'hidden'}`}>
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


                    <span className='text-[0.8em] sm2:text-[1.1em] '>
                        {mobile["price"] ? `₹${mobile["price"]}` : "Price Not Available"}
                    </span>
                    <BsGraphUpArrow className='size-4' color="green"/>
                </div>
                <div className='justify-center items-center'>
                    <span className='text-[0.8em] sm2:text-[1.1em]  wrap-normal'>
                        Store
                    </span>
                </div>
           </div>
        </div>
     )})
  }


        {/* pagination  */}
        <Pagination pages={totalpages} currentPage={currentPage} setcurrentPage={setcurrentPage}/>

    </div>
  )
}

export default Cards