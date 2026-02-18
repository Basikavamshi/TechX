'use client'
import React from 'react'
import { useState } from 'react'
import { MdCheckBox } from 'react-icons/md'
import { TiArrowSortedDown } from "react-icons/ti";
function Filter({onClose}:{onClose:()=>void}) {
    const [dropdown,setdropdown]=useState<number | null>(null);
    const PriceRange=["Below $500","500-1000","1000-2000","Above $2000"]
    const TopBrands=["Samsung","Apple","Realme","Redmi","Vivo","Iqoo"]
    const Features=["Amoled Display","Fast Charging","Big Battery"]
    const Categories=[
        {
            "name":"Home Gadgets",
             "sub":["Smart LED lights","Smart plugs","Motion sensors","Wi-Fi security cameras","Smart doorbells","Extension boards with USB",
                   "Smart IR remotes"]
        },
        {
            "name":"Car Accessories",
             "sub":["Dash cameras","Car phone mounts","Tyre inflators","Car chargers","Air purifiers","Parking sensors"]
        },
        {
            "name":"Bike Accessories",
                "sub":["Phone holders","Action cam mounts","Helmet Bluetooth mounts","USB chargers","Anti-theft locks"]
        },
        {
            "name":"Gaming Gadgets",
             "sub":['Game controllers','Gaming mouse','Gaming keyboard','RGB light strips','Controller grips','Cooling pads ']
        },
        {
            "name":"Computer Access..",
             "sub":['Keyboard','Mouse','Webcam','USB hubs','External SSD / HDD','Monitor arms','Laptop stands']
        }
        ,
        {
            "name":"Lifestyle Tech",
             "sub":['Smart alarm clocks','Digital clocks','Desk lamps','Mini vacuum cleaners','Cable organizers','Smart scales','Automatic dispensers']
        }
    ]

    const handleDropdown=(id:number)=>{
        setdropdown((prev)=>prev==id?null:id)
    }

  return (
    <div className='flex relative flex-col justify-start itmes-start w-full h-full gap-4 lg:border-2 lg:border-gray-300  box-border p-0 lg:p-2 bg-white '>
        <div className='flex lg:hidden justify-start items-center border-b-2 border-gray-200 h-full p-2'>
            <span className='text-[1.2em] '>Filter</span>
        </div>
        <div className='flex flex-col justify-start itmes-start w-full h-full gap-2 p-2 lg:p-0'>
            <div className='flex flex-row gap-1 justify-start items-center'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[1.1em] font-medium'>Categories</span>
            </div>
            <div className='grid grid-cols-[repeat(1,minmax(120px,1fr))] grid-flow-row w-full h-full gap-2 justify-center itmes-center pl-2'>
                {
                    Categories.map((value,id)=>{
                        return(
                            <div className='relative'>
                                <div className='flex flex-row justify-between items-center border-[0.1em] border-gray-300 w-full box-border pl-2 p-0.5 rounded-[0.2em] rounded-b-none'>
                                    <span>{value.name}</span>
                                    <TiArrowSortedDown onClick={()=>handleDropdown(id)}/>
                                </div>
                                {/*  sub categories  */}
                                <div className={`flex flex-col border-[0.1em] border-t-0 border-gray-300 rounded-[0.2em] rounded-t-none pl-2 gap-1 pt-0.5 ${dropdown==id?"block":"hidden"}`}>
                                  {
                                    value.sub.map((subvalue,subid)=>{
                                        return(
                                            <div key={subid} className='flex flex-row justify-start items-center gap-2 w-full h-full '>
                                                <MdCheckBox></MdCheckBox>
                                                <span className='text-[1em]'>{subvalue}</span>
                                            </div>
                                        )})
                                  }
                                </div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
        </div>

        <div className='flex flex-col justify-start items-start w-full h-full gap-2 p-2 lg:p-0'>
                <div className='flex flex-row gap-1 justify-start items-center'>
                    <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                     </svg>
                    <span className='text-[1.1em] font-medium'>Price Range</span>
                </div>
                <div className='flex justify-center items-center w-full h-full '>
                    <span>progess bar</span>
                </div>

                <div className='flex flex-col justify-start items-center gap-2 pl-2'>
                  {
                    PriceRange.map((value,key)=>{
                        return(
                            <div key={key} className='flex flex-row justify-start items-center gap-1 w-full h-full '>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.6976 33.0676C24.8811 35.4449 23.9728 36.6335 22.9239 37.1749C21.4043 37.9592 19.5954 37.9592 18.0759 37.1749C17.0269 36.6335 16.1187 35.4449 14.3022 33.0676L8.26959 25.1726C7.16474 23.7267 6.61231 23.0037 6.33876 22.2297C5.94307 21.11 5.94307 19.8899 6.33876 18.7702C6.61231 17.9962 7.16474 17.2732 8.26959 15.8273L14.3022 7.93233C16.1187 5.55507 17.0269 4.36644 18.0759 3.82504C19.5954 3.04074 21.4043 3.04074 22.9239 3.82504C23.9728 4.36644 24.8811 5.55507 26.6976 7.93234L32.7302 15.8273C33.835 17.2732 34.3875 17.9962 34.661 18.7702C35.0567 19.8899 35.0567 21.11 34.661 22.2297C34.3875 23.0037 33.835 23.7267 32.7302 25.1726L26.6976 33.0676Z" fill="#FFA11E"/>
                                    </svg>
                                </div>
                                <span className='text-[1em]'>{value}</span>
                            </div>
                        )
                    })
                  }
                </div>

        </div>
        
        
        
        <div className='sticky z-4 bottom-0 lg:hidden flex flex-row items-center w-full h-full justify-evenly border-t-2 border-gray-200 bg-white'>
                <div className='flex justify-center items-center w-full h-full' onClick={onClose}>
                    <span className='text-[1.2em] font-medium'>Close</span>
                </div>
                <div >
                    <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                    </svg>
                </div>
                <div className='flex justify-center items-center w-full h-full' >
                    <span className='text-[1.2em] font-medium'>Clear</span>
                </div>
         </div>
        

    </div>
  )
}

export default Filter