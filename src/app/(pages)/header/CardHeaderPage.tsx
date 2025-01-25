

import Image from 'next/image'
import Logo from '../../../icons/logo.svg'
import TalkToExpert from '@/components/header/talk-to-expert'
import React from 'react'
import EditInformation from '@/components/card-details/Edit-info'
import { useUpdateInformation } from '@/hook/useUpdateInformation'

// type Props = {
//    card: CardDetails;
// }

const CardHeaderPage = () => {
  const{ userDetails ,handleNextStep,isSubmitting,handleUpdate,setSheetOpen,isSheetOpen,handleFieldChange}=useUpdateInformation()
  return (
    <header className="w-full left-0 bg-white z-40 fixed top-0">
    <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-6 py-3 flex lg:justify-between items-center'>
  
      <div className=' flex z-20'>
      <Image src={Logo} alt='logo' width={150} height={90} className='hidden md:hidden lg:block'/>
      <span className='text-[#000] block md:block lg:hidden  font-bold'>Credit Card Plan</span>
      </div>
              <div className='flex gap-4 items-center'>
                <div className='block lg:hidden'>
              <EditInformation 
              handleNextStep={handleNextStep}
              handleFieldChange={handleFieldChange}
              setSheetOpen={setSheetOpen}
              isSheetOpen={isSheetOpen}
              userDetails={userDetails}
              handleUpdate={handleUpdate}
              isSubmitting={isSubmitting}
               />
                </div>
                <div className="h-8 border-l-2 border-gray-300  block md:block lg:hidden" />
              <TalkToExpert />
              </div>
    </div>
    </header>
  )
}

export default CardHeaderPage