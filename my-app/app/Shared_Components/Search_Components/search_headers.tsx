import React from 'react'

function Search_headers({ header_value }: { header_value: any }) {
  return (
    <div className='flex flex-row gap-2 items-center w-full'>
        <span className='text-[0.9em]  whitespace-nowrap font-[550] text-gray-500'>{header_value}</span>
        <div className='h-[2.5px] bg-[#AFABAB] flex-grow'></div>
    </div>
  )
}

export default Search_headers