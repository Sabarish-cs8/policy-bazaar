'use client'
import React, { useState } from 'react'
import BasicDetails from './Basic-Details';
import EmploymentDetails from './Employment-Details';
import FinancialDetails from './Financial-Details';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useUpdateInformation } from '@/hook/useUpdateInformation';
import { UserDetailsBasicInformation } from '@/utils/userUtils';

type Props = {
    handleNextStep:()=>void;
    handleFieldChange: (field: string, value: string) => void;
     userDetails:UserDetailsBasicInformation;
     handleUpdate:()=>void;
     isSubmitting:boolean;
}

const UserBasicDetails = ({handleNextStep,isSubmitting,handleFieldChange,handleUpdate,userDetails}: Props) => {
    const {isLoading} = useUpdateInformation()
    const [buttonData,setButtonData] = useState("Basic-Details")

    const handleButtonData = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(e.currentTarget.value)
        setButtonData(e.currentTarget.value)
      }


    const renderContent = (buttonData:string ,handleNextStep:any,handleFieldChange:any) =>{
        switch(buttonData){
            case "Basic-Details":
                return(
                    <div className='flex'>
                        <BasicDetails 
                         handleFieldChange={handleFieldChange}
                         userDetails={userDetails}
                         handleButtonData={handleButtonData}
                         />
                    </div>
                );
            case "Employment-Details":
                return(
                    <div className='flex'>
                        <EmploymentDetails 
                        handleFieldChange={handleFieldChange}
                        userDetails={userDetails}
                        handleButtonData={handleButtonData}
                        />
                    </div>
                );
            case "Financial-Details":
                return(
                    <div className='flex'>
                        <FinancialDetails 
                        handleFieldChange={handleFieldChange}
                        userDetails={userDetails}
                        handleNextStep={handleNextStep}
                        handleUpdate={handleUpdate}
                        isSubmitting={isSubmitting}
                        />
                    </div>
                )
        }
    }
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (!userDetails) {
        return <p>No user information available.</p>;
      }
     
  return (
    <>    
            <div className="container mx-auto">
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row lg:w-full sm:w-full md:w-full items-center justify-center mb-1">
      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className={`text-base md:text-lg lg:text-lg font-semibold hover:bg-transparent ${
            buttonData === "Basic-Details" ? "text-[#0065ff] hover:text-[#0065ff]" : "text-black hover:text-black " 
          }`}
          value="Basic-Details"
          onClick={handleButtonData}
        >
          Basic Details
        </Button>
        <Separator orientation="vertical" className="h-5 mx-2" />
      </div>

      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className={`text-base md:text-lg lg:text-lg font-semibold hover:bg-white ${
            buttonData === "Employment-Details" ? "text-[#0065ff] hover:text-[#0065ff]" : "text-black hover:text-black "
          }`}
          value="Employment-Details"
          onClick={handleButtonData}
        >
          Employment Details
        </Button>
        <Separator orientation="vertical" className="h-5 mx-2" />
      </div>

      <div className="flex flex-row items-center">
        <Button
          variant="ghost"
          className={`text-base md:text-lg lg:text-lg font-semibold hover:bg-white ${
            buttonData === "Financial-Details" ? "text-[#0065ff] hover:text-[#0065ff]" : "text-black hover:text-black "
          }`}
          value="Financial-Details"
          onClick={handleButtonData}
        >
          Financial Details
        </Button>
      </div>
    </div>

    <Separator orientation="horizontal"  className='mb-2 mt-0'/>
    {renderContent(buttonData, handleNextStep,handleFieldChange)}
  </div>    
            </>
  )
}

export default UserBasicDetails