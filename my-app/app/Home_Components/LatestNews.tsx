import React from 'react'
import Image from 'next/image'
import img1l from '../../public/img1l.jpg';
import img2l from '../../public/img2l.jpg';
import img3l from '../../public/img3l.jpg';
function LatestNews() {
  return (
    <div className='flex flex-col w-dvw h-fit  gap-4 p-3 md2:p-4 md:p-8 box-border lg:max-w-5xl '>
        {/* nav header*/}
        <div className='flex flex-row justify-between items-center w-full '>
            <div className='flex flex-row items-center gap-1 sm2:gap-2'>
                <svg width="3" height="20" viewBox="0 0 3 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="31.5" x2="1.5" y2="1.5" stroke="#FF1803" strokeWidth="3" strokeLinecap="square"/>
                </svg>
                <span className='text-[0.9em] sm2:text-[1em] md2:text-[1.3em]'>Latest News</span>
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-[0.9em]'>View All</button>
            </div>
        </div>
        {/* news items */}
        <div className='grid grid-flow-row grid-cols-1 gap-4 w-full h-full '>
            <div className='flex flex-col lg:flex-row    justify-start items-start lg:items-center w-full h-full gap-2 lg:gap-4'>
                <div className='relative lg:flex-1/2 justify-center items-center w-full h-[180px] sm:h-[200px] md:h-[250px] lmd:h-[300px] lg:h-[300px] '>
                    <Image src="https://www.technewsworld.com/wp-content/uploads/sites/3/2026/02/vema-hydrogen-pilot-well-quebec.jpg" alt="LatestNews1" fill />
                </div>
                <div className='flex flex-col lg:flex-1/3 justify-start items-start gap-0.5'> 
                    <span className="text-gray-500  font-medium text-[0.9em] sm:text-[1.1em] md:text-[1.2em] lg:text-[1em]">mobiles</span>
                    <span className='text-black wrap-break-word text-[0.9em] sm:text-[1.1em] md:text-[1.2em] lg:text-[1.1em]'>The Trillionaire’s Paradox: Why Elon Musk Wants to Kill Money</span>
                    <span className='text-gray-500  font-medium text-[0.9em] sm:text-[1.1em] md:text-[1.2em] lg:text-[1em]'>date</span>
                </div>
            </div>

        <div className='grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 justify-start items-start w-full h-full gap-4'>
            <div className='flex flex-col  justify-start items-start w-full h-full gap-2'>
                <div className='relative  w-full h-[100px] sm:h-[150px] md:h-[200px] border-2'>
                    <Image src={img1l} alt="LatestNews2" fill />
                </div>
                <div className='flex flex-col  justify-start items-start gap-0.5 '>
                    <span className="text-gray-500 text-[0.8em] sm:text-[1em] font-medium">laptops</span>
                    <span className='text-black text-[0.8em]  sm:text-[1em] wrap-break-word'>Identity, Data Security Converging Into Trouble for Security Teams: Report</span>
                    <span className='text-gray-500 text-[0.8em] sm:text-[1em] font-medium'>date</span>
                </div>
            </div>
                 
            <div className='flex flex-col justify-start items-start w-full h-full gap-2'>
                <div className='relative w-full  h-[100px] sm:h-[150px] md:h-[200px] border-2'>
                    <Image src={img2l} alt="LatestNews3" fill />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <span className="text-gray-500 text-[0.8em] sm:text-[1em] font-medium">mobiles</span>
                    <span className='text-black text-[0.8em] sm:text-[1em]'>Apple’s Gemini partnership gives Siri a fast path to frontier-level AI, but it also ties iOS</span>
                    <span className='text-gray-500 text-[0.8em] sm:text-[1em] font-medium'>date</span>
                </div>
            </div>

            <div className='flex flex-col justify-start items-start w-full h-full gap-2'>
                <div className='relative w-full  h-[100px] sm:h-[150px] md:h-[200px]'>
                    <Image src={img3l} alt="LatestNews4" fill />
                </div>
                <div className='flex flex-col justify-start items-start overflow-scroll'>
                    <span className="text-gray-500 text-[0.8em] sm:text-[1em]  font-medium">gadgets</span>
                    <span className='text-black text-[0.8em] sm:text-[1em] '>OpenAI CFO Sarah Friar's call for “practical adoption” suggests the AI hype cycle is</span>
                    <span className='text-gray-500 text-[0.8em] sm:text-[1em]  font-medium'>date</span>
                </div>
            </div>

            </div>
        </div>
        <div className=' flex justify-center items-center w-full'>
           <div className='flex flex-row items-center gap-4'>
                <svg width="40" height="20" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0.585785 13.3138C-0.195263 14.0949 -0.195263 15.3612 0.585785 16.1422L13.3137 28.8702C14.0948 29.6512 15.3611 29.6512 16.1421 28.8702C16.9232 28.0891 16.9232 26.8228 16.1421 26.0417L4.82843 14.728L16.1421 3.41432C16.9232 2.63327 16.9232 1.36694 16.1421 0.585892C15.3611 -0.195157 14.0948 -0.195157 13.3137 0.585892L0.585785 13.3138ZM44 14.728V12.728L2 12.728V14.728V16.728L44 16.728V14.728Z" fill="black"/>
                </svg>
                <svg width="40" height="20" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12.728C0.89543 12.728 0 13.6235 0 14.728C0 15.8326 0.89543 16.728 2 16.728V14.728V12.728ZM45.4142 16.1422C46.1953 15.3612 46.1953 14.0949 45.4142 13.3138L32.6863 0.585892C31.9052 -0.195157 30.6389 -0.195157 29.8579 0.585892C29.0768 1.36694 29.0768 2.63327 29.8579 3.41432L41.1716 14.728L29.8579 26.0417C29.0768 26.8228 29.0768 28.0891 29.8579 28.8702C30.6389 29.6512 31.9052 29.6512 32.6863 28.8702L45.4142 16.1422ZM2 14.728V16.728H44V14.728V12.728H2V14.728Z" fill="black"/>
                </svg>
                
            </div>

        </div>
    </div>
  )
}

export default LatestNews