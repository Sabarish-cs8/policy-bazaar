
import React from 'react'
import Image from 'next/image'



//icons

import SmilingManUsingPc from '../../../public/smiling-man-using-pc-credit-card-sitting-couch.jpg'
import AirportLounge from '@/icons/airport-lounge'
import ShoppingBenefits from '@/icons/shopping'
import MovieDiscounts from '@/icons/movies'
import FuelBenefits from '@/icons/fuel'
import { StarIcon, HalfStarIcon } from '@/icons/start-icon'
import GoogleIcon from '@/icons/google'



import GettingUserDetails from './get-user-details-card'


type Props = {
  handleDynamicSelection: (value: boolean) => void ;
  handleButtonClick: (value:string) => void;
  handleFieldChange:(name:string,value:string)=>void;
  userDetails:{city:string};
  handleNextStep:() =>void
  error: string | null;
}

const SmilingManPc= ({ handleDynamicSelection,userDetails,handleFieldChange,handleNextStep ,  handleButtonClick ,error}: Props) => {
  
    
  return (
    <div className='relative w-full  h-[900px] md:h-[850px] lg:h-fit'>
    <Image 
      src={SmilingManUsingPc} 
      alt='Smiling man with pc' 
      sizes='100vw'
      width={1370} 
      height={500} 
      className="h-[800px] hidden sm:block w-full lg:h-[500px]"
    />
    

    <div className='absolute inset-0 flex flex-col md:flex-col lg:flex-row lg:justify-center lg:items-center gap-4 mt-0'>    
    <div className='
     p-3
     order-1
     md:order-1 
     lg:order-1 
     w-full
     md:w-full 
     lg:w-auto
     flex 
     justify-end 
     md:justify-center 
     lg:justify-center
     mt-1 
     pr-4
     md:pr-6
     lg:pl-80'>

      <div className='grid grid-cols-1 gap-3'>
        <span className='font-semibold text-lg'>Compare & Apply for Credit Cards</span>
        
        <div className='grid grid-cols-2 gap-0'>
             <div className="flex flex-col items-center border-r border-b border-[#0363f650] pb-4">
               <div className='grid grid-cols-1 bg-[#dbeaff] border border-[#0363f650] shadow-[0_1px_6px_#0363f655] p-4 rounded-md'>
                 <AirportLounge />
               </div>
               <span className="mt-2">Airport Lounge</span>
             </div>
           
             <div className="flex flex-col items-center border-b border-[#0363f650] pb-4">
               <div className='grid grid-cols-1 bg-[#eae6ff] border border-[#c5baff] shadow-[0_0_10px_#9d8bfc83] p-4 rounded-md'>
                 <ShoppingBenefits />
               </div>
               <span className="mt-2">Shopping Benefits</span>
             </div>
           
             <div className="flex flex-col items-center border-r border-[#0363f650] pt-4">
               <div className='grid grid-cols-1 bg-[#e3fcef] border border-[#96bc71] shadow-[0_0_16px_#24b16853] p-4 rounded-md'>
                 <FuelBenefits />
               </div>
               <span className="mt-2">Fuel Benefits</span>
             </div>
           
             <div className="flex flex-col items-center pt-4">
               <div className='grid grid-cols-1 bg-[#e0eaf6] border border-[#b1cef0] shadow-[0_0_16px_#00000029] p-4 rounded-md'>
                 <MovieDiscounts />
               </div>
               <span className="mt-2">Movie Discounts</span>
             </div>
           </div>

      </div>
    </div>

    <div className='
    order-2 
    md:order-2 
    lg:order-2 
    w-full
    md:w-full
    lg:w-auto
    flex 
    flex-col 
    h-full
    items-center  
    pr-0         
    md:pr-10 
    lg:pr-20 
    mt-1 
    lg:mt-2
  "
    '>

    <div 
  className='justify-center w-full m-2 lg:m-4 gap-1 lg:gap-3 bg-white p-2 lg:p-4 items-center'  
  style={{
    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1) 22%, rgba(255, 255, 255, 1) 73%, rgba(255, 255, 255, 0) 100%)"
  }}
>
  <div className="flex flex-row w-full justify-center items-center gap-1">
    <p className="text-lg">4.6/5</p>
    <span className="text-yellow-500 flex items-center space-x-1">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <HalfStarIcon />
    </span>
    <p className="text-lg">24,259</p>
    <GoogleIcon className="w-5 h-5 text-gray-600" />
    <span>Reviews</span>
  </div>
  </div>

  {/* Bottom Section - Apply Now Card */}
  <div className='order-3 md:order-3 lg:order-3 w-full flex justify-center items-center'>

  <GettingUserDetails handleDynamicSelection={handleDynamicSelection} 
  handleButtonClick={handleButtonClick} error={error} handleFieldChange={handleFieldChange} userDetails={userDetails}
  handleNextStep={handleNextStep} />
  </div>

    </div>
    </div>

    
  </div>
  )
}

export default SmilingManPc