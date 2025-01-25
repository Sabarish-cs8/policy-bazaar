import Image from 'next/image'
import React from 'react'
import noQuote from '../../icons/noQuote.png' 

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='flex justify-center items-center p-10 flex-col'>
        <Image src={noQuote} alt="Not Found" className="object-cover"
         />
         <span className='text-[#052e5e] font-semibold text-xl'>
         No results matching your search
         </span>
         <span className='text-[#67809e]'>
         Modify filters to get results
         </span>
    </div>
  )
}

export default NotFound