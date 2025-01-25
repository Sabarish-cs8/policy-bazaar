'use client'
import { Button } from '@/components/ui/button'
import { UserDetailsBasicInformation } from '@/utils/userUtils';
import React, { useState } from 'react'

type Props = {
   handleFieldChange: (field: string, value: string) => void;
       userDetails:UserDetailsBasicInformation;
       handleButtonData: React.MouseEventHandler<HTMLButtonElement>;
}

const EmploymentDetails = ({handleFieldChange,userDetails,handleButtonData}: Props) => {

   const [selectedEmploymentType, setSelectedEmploymentType] = useState<string | null>(null);
         const [hasLandline, setHasLandline] = useState<string | null>(null);
         const [hasWebsite, setHasWebsite] = useState<string | null>(null);
  
  
          const handleEmploymentTypeClick = (value: string) => {
      setSelectedEmploymentType(value);
      handleFieldChange('employmentType',value)
    };
  
    const handleLandlineClick = (value: string) => {
      setHasLandline(value);
      handleFieldChange('companyLandline',value)
    };
  
    const handleWebsiteClick = (value: string) => {
      setHasWebsite(value);
      handleFieldChange('companyWebsite',value)
    };
  return (
    <>
     <div className="flex flex-col">
     <div className="w-full overflow-y-auto h-[550px] flex flex-wrap gap-y-4 gap-x-3 p-5">
    <div className=" py-3 px-2 w-full space-y-4">
            <label className="text-[#414141]">Select Employment Type</label>
            <div className='flex flex-row gap-x-3 '>
              <div>

            <Button variant='outline'  className={`p-3 w-full justify-center items-center border ${
                    selectedEmploymentType === 'Salaried'
                      ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                      : 'bg-white hover:bg-transparent border-[#97a0af]'
                  }`}
                  onClick={() => handleEmploymentTypeClick('Salaried')}>Salaried</Button>
            <p className='text-center text-xs'>receives a regular payment from their employer as salary.</p>
              </div>
              <div>

            <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                    selectedEmploymentType === 'Self Employed'
                      ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                      : 'bg-white hover:bg-transparent border-[#97a0af]'
                  }`}
                  onClick={() => handleEmploymentTypeClick('Self Employed')}>Self Employed</Button>
            <p className='text-center text-xs'>owners and operators of their own businesses or professional practice.</p>
              </div>
            </div>
        </div>
        <div className="py-3 px-2 w-full space-y-4">
            <label className="text-[#414141]">Does your company have a landline?</label>
            <div className='flex flex-row gap-x-3'>
            <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                  hasLandline === 'YES'
                    ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                    : 'bg-white hover:bg-transparent border-[#97a0af]'
                }`}
                onClick={() => handleLandlineClick('YES')}>YES</Button>
            <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                  hasLandline === 'NO'
                    ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                    : 'bg-white hover:bg-transparent border-[#97a0af]'
                }`}
                onClick={() => handleLandlineClick('NO')}>NO</Button>
            </div>
        </div>
        <div className="py-3 px-2 w-full space-y-4">
            <label className="text-[#414141]">Does your company have a website?</label>
            <div className='flex flex-row gap-x-3' >
            <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                  hasWebsite === 'YES'
                    ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                    : 'bg-white hover:bg-transparent border-[#97a0af]'
                }`}
                onClick={() => handleWebsiteClick('YES')}>YES</Button>
            <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                  hasWebsite === 'NO'
                    ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                    : 'bg-white hover:bg-transparent border-[#97a0af]'
                }`}
                onClick={() => handleWebsiteClick('NO')}>NO</Button>
            </div>
        </div>
    </div>
    <div className="flex w-full shadow-[0_-2px_16px_#00000029] p-4">
        <Button className="bg-[#f9491f] hover:bg-[#f9491f] text-white justify-center py-3 px-2 w-full"
         value="Financial-Details"
         onClick={handleButtonData}  
        >Next</Button>
    </div>
    </div>
    </>
  )
}

export default EmploymentDetails