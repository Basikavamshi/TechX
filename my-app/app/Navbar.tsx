'use client'
import React, { useState } from 'react'
import { BiBookmarkHeart } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
function Navbar() {
  const [menu,setmenu]=useState(false);
  const menuhandler=()=>{
      if(menu){
          setmenu(false);
          
      }
      else{
            setmenu(true);
            
      }
    
  }
  return (
    <div className='sticky top-0 bg-white shadow-neutral-50 grid grid-cols-1 grid-rows-1  min-h-[fit_content] min-w-[200px] overflow-hidden w-full z-3'>
        <div className='grid grid-cols-[0.5fr_0.5fr] grid-rows-1 h-14 w-full justify-between content-center align-middle items-center'>
            <div className='flex flex-row justify-start content-center align-middle items-center gap-2 ml-2 lg:gap-4 lg:ml-4'>
                <div className='md:hidden justify-center content-center items-center'>
                  
                    <IoMenu className=" size-6.5 " onClick={menuhandler}/>
                {/* Mobile menu - hidden on medium and larger screens */}
                <div id='menu' className={`${menu ? 'flex' : 'hidden'} fixed z-3  top-0 left-0 h-dvh  w-dvw bg-white  flex-col justify-start items-start gap-4 p-4 box-border min-w-[200px] overflow-hidden border-0`}>
                        <div className='flex justify-end items-center w-full'>
                            <IoClose className='size-8' onClick={menuhandler}/>
                        </div>
                        <div className='flex flex-col gap-4 w-full p-4'>
                          <Link href={'/Mobiles'} className='hover:text-blue-500 w-full ' >
                            <div className='flex flex-row items-center gap-4 justify-between w-11/12 ' >
                                <span className='text-2xl  font-medium '>Mobiles</span>
                                <HiOutlineExternalLink className='inline size-6 ml-1'/>
                            </div>
                         </Link>
                         <Link href={'/Laptops'} className='hover:text-blue-500 w-full'>
                            <div className='flex flex-row items-center gap-4 justify-between w-11/12'>
                                <span className='text-2xl font-medium '>Laptops</span>
                                <HiOutlineExternalLink className='inline size-6 ml-1'/>
                            </div>
                        </Link>
                        <Link href={'/Gadgets'} className='hover:text-blue-500 w-full'>
                            <div className='flex flex-row items-center gap-4 justify-between w-11/12'>
                                <span className='text-2xl font-medium '>Gadgets</span>
                                <HiOutlineExternalLink className='inline size-6 ml-1'/>
                            </div>
                        </Link>
                        <Link href={'/EV'} className='hover:text-blue-500 w-full'>
                            <div className='flex flex-row items-center gap-4 justify-between w-11/12'>
                                <span className='text-2xl font-medium '>EV</span>
                                <HiOutlineExternalLink className='inline size-6 ml-1'/>
                            </div>
                        </Link>
                        <Link href={'/Latest_News'} className='hover:text-blue-500 w-full'>
                            <div className='flex flex-row items-center gap-4 justify-between w-11/12'>
                                <span className='text-2xl font-medium '>Latest News</span>
                                <HiOutlineExternalLink className='inline size-6 ml-1'/>
                            </div>
                        </Link>
                        </div>
                     
                        <div className='flex flex-row justify-center items-center w-full gap-4'>
                           <FaInstagramSquare className='inline size-6 mr-2'/>
                           <FaLinkedin className='inline size-6 mr-2'/>
                           <FaGithubSquare className='inline size-6 mr-2'/>
                           <FaTelegram className='inline size-6 mr-2'/>     
                        </div>
                    </div>
                {/* End of mobile menu */}
                </div>
                <div className='justify-center content-center align-middle items-center'>
                    <span className='text-[1em]  lg:text-[1.3em] font-medium'>TECHX</span>
                </div>
                
                <div className='hidden md:flex flex-row justify-start content-center align-middle items-center gap-4 ml-2 lg:gap-4 lg:ml-4'>
                  <Link href={'/Mobiles'}>
                    <span className='text-[0.9em]  lg:text-1 hover:text-blue-500'>Mobiles</span>
                  </Link>
                  <Link href={'/Laptops'}>
                    <span className='text-[0.9em]  lg:text-1 hover:text-blue-500'>Laptops</span>
                  </Link>
                  <Link href={'/Gadgets'}>
                    <span className='text-[0.9em]  lg:text-1 hover:text-blue-500'>Gadgets</span>
                  </Link>
                  <Link href={'/EV'}>
                    <span className='text-[0.9em]  lg:text-1 hover:text-blue-500'>EV</span>
                  </Link>
                  <Link href={'/Latest_News'}>
                    <span className='text-[0.9em]  lg:text-1 hover:text-blue-500 whitespace-nowrap'>Latest News</span>
                  </Link>
                </div>
                
            </div>
            <div className='flex flex-row justify-end content-center align-middle items-center gap-2 lg:gap-4 mr-2 lg:mr-4'>
               <div><BiBookmarkHeart className="size-6.5 lg:size-7" /></div>
               <div>
                  <Link href="/login">
                    <button className="bg-blue-500 text-white w-14 h-6.5 text-[0.9em] text-center rounded-md">
                      Login
                    </button>
                  </Link>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
