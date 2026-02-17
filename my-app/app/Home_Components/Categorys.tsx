import React from 'react'

function Categorys() {
  return (
    <div className='flex flex-col justify-start items-start p-4 w-dvw lg:max-w-3xl box-border  border-black '>
        <div className='flex justify-center self-center items-center  w-full h-full  p-1 box-border  bg-[#ebf6f9] rounded-lg max-w-3xl '>
                <div className='flex flex-row justify-start items-center gap-4 w-full  h-full  p-2 overflow-scroll '>
                    <div className='flex justify-center items-center p-[0.2em] sm2:p-1  font-medium border-2 border-black rounded-[0.9em] lg:rounded-full  bg-[#F5F5F5] w-full min-w-[90px]  '>
                        <span className='flex text-center text-[1em] md:text-[1.1em]'>Mobiles</span>
                    </div>
                    <div className='flex justify-center items-center p-[0.2em] sm2:p-1  font-medium border-2 border-black rounded-[0.9em] lg:rounded-full  bg-[#F5F5F5] w-full min-w-[90px]'>
                        <span className='flex text-center text-[1em] md:text-[1.1em]'>Laptops</span>
                    </div>
                    <div className='flex justify-center items-center p-[0.2em] sm2:p-1  font-medium border-2 border-black rounded-[0.9em] lg:rounded-full  bg-[#F5F5F5] w-full min-w-[90px]'>
                        <span className='flex text-center text-[1em] md:text-[1.1em]'>Gadgets</span>
                    </div>
                    <div className='flex justify-center items-center p-[0.2em] sm2:p-1  font-medium border-2 border-black rounded-[0.9em] lg:rounded-full  bg-[#F5F5F5] w-full min-w-[90px]'>
                        <span className='flex text-center text-[1em] md:text-[1.1em] '>Ev</span>
                    </div>
                    
                </div>
        </div>

        <div className="grid grid-cols-2 grid-rwos-3  ;g:grid-cols-3 lg:grid-rows-3 justify-center items-top w-full  box-border p-2 h-[400px] gap-4">
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>under 2k</span>
            </div>
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>under 3k</span>
            </div>
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>under 5k</span>
            </div>
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>hot mobiles</span>
            </div>
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>latest mobiles</span>
            </div>
            <div className='flex justify-center items-center border-1 gap-2 w-full h-full '>
                <span>awesome mobiles</span>
            </div>
        </div>
    </div>
  )
}

export default Categorys