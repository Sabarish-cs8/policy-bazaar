'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import CreditCardinUAE from '../../../public/credit-card-banner-min.png'
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCountries } from 'use-react-countries';
import { useUserInformation } from '@/hook/home';



type Props = {
  handleNextStep:()=>void
  handleFieldChange:(name:string,value:string)=>void;
  userDetails:{nationality:string};
  handlePreviousStep: () => void; 
}


const CityDetailsComponent = ({handleNextStep,handlePreviousStep,userDetails,handleFieldChange}: Props) => {
  const { countries } = useCountries();

  const [changetext,setChangeText]=useState<boolean>(true)
  const {handleDynamicSelection} =useUserInformation()

   const selectedCountryCodes = ["Syria", "India", "Pakistan", "Canada", "Egypt", "Russia", "Jordan", "Finland"];
  const handleGetAllCountry = () =>{
    setChangeText(!changetext)
  }
  return (
    <>
    <div className='lg:hidden top-0 z-40 bg-white fixed left-0 flex justify-between items-center p-3 w-full h-14 shadow-[0_4px_12px_0_rgba(0,0,0,.16)]'>
          <Button variant='ghost' className='bg-transparent hover:bg-transparent items-center hover:text-[#0065ff] text-[#0065ff]'onClick={handlePreviousStep}>
            <ArrowLeft />
            Back
          </Button>
          <Button variant='ghost' className='bg-transparent hover:bg-transparent items-center hover:text-[#0065ff] text-[#0065ff]' >
            Next
            <ArrowRight />
          </Button>
        </div>
    <div className='max-w-7xl max-h-fit mx-auto p-5 pt-32 bg-white text-[#253858]'>
      
      <div className='flex flex-row bg-[#f8fcff]'>
      <div className='hidden md:block pt-3 mt-7 w-[390px]'>
        <div className='text-[#000] p-2 pl-16 space-y-3 flex items-start flex-col top-0 mb-10'>
          <h1 className='font-bold text-xl'>Credit Card in UAE</h1>
          <h5>Apply for a credit card in 20 seconds</h5>
        </div>
        <Image 
        src={CreditCardinUAE}
        alt='Credit Card in UAE'
        width={390}
        />
      </div>
      
      <div className='flex '>
      <Card className="w-[440px] md:w-[730px] lg:w-[890px] shadow-[0_4px_12px_0_rgba(0,0,0,.16)] rounded-l-none rounded-tr-[14px] rounded-br-[14px] px-[22px] py-[30px]">
      <form onSubmit={(e) => {
              e.preventDefault();
              handleNextStep();
            }} >
     
        <div className='flex justify-between items-center'>
          <Button asChild variant='ghost' className='hidden md:block bg-white hover:bg-white' onClick={handlePreviousStep} >
            <ChevronLeft className='w-12 h-12' size={48} />
          </Button>
          <CardHeader className='flex-1'>
        <CardTitle className='text-xl font-medium text-[#132e5c] text-center md:text-center'> Nationality </CardTitle>
      </CardHeader>
          <Button asChild variant='ghost' className='hidden md:block bg-white hover:bg-white' >
            <ChevronRight size={48} />
          </Button>
        </div>
     
        <div>

        </div>
   
      <CardContent>
       
          <div className="grid w-full items-center">
            <div className="flex flex-col">
              <Select value={userDetails.nationality} onValueChange={(e)=>{handleDynamicSelection(true);
                handleFieldChange('nationality',e);
                handleNextStep()
              }
              }>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Nationality" />
                </SelectTrigger>
                <SelectContent position="popper" className='mb-2'>
                  {countries.sort((a,b)=>a.name.localeCompare(b.name)).map((country , index)=>(
                    <SelectItem value={country.name} key={country.code || index} className='flex items-center justify-start gap-2'
                    onChange={()=>handleFieldChange('nationality',country.name)}>
                      <Image 
                      src={country.flags.png || country.flags.svg}
                      alt={`Flag of ${country.name}`}
                      className='flex'
                      width={30}
                      height={30}
                      />
                      <span>{country.name}</span>
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className={`${changetext ? "grid grid-cols-2 mt-3 gap-3" : "grid grid-cols-2 mt-3 gap-3 overflow-hidden max-h-[300px] overflow-y-auto"}`}>

                {changetext ? (
                  
               countries.filter(country => selectedCountryCodes.includes(country.name)).map((country, index) => (
                <Button 
                  variant="outline" 
                  type='button'
                  key={country.code || index}
                  value={userDetails.nationality}
                  className="p-7 mt-1 flex items-center justify-start gap-2 hover:border-[#0065ff] bg-white rounded-md hover:bg-white cursor-pointer"
                  onClick={()=>{handleDynamicSelection(true);handleFieldChange('nationality',country.name);handleNextStep()}}
                >
                  <Image 
                    src={country.flags.png || country.flags.svg}
                    alt={`Flag of ${country.name}`}
                    className="flex"
                    width={30}
                    height={30}
                  />
                  <span>{country.name}</span>
                </Button>
              ))
                 ):(
                  
               countries.sort((a,b)=>a.name.localeCompare(b.name))
               .map((country, index) => (
                <Button 
                  variant="outline" 
                  type='button'
                  key={country.code || index}
                  value={userDetails.nationality}
                  className="p-7 mt-1 flex items-center justify-start gap-2 hover:border-[#0065ff] bg-white rounded-md hover:bg-white cursor-pointer"
                  onClick={()=>{handleDynamicSelection(true);
                    handleFieldChange('nationality',country.name);
                    handleNextStep();
                  }}
                >
                  <Image 
                    src={country.flags.png || country.flags.svg}
                    alt={`Flag of ${country.name}`}
                    className="flex"
                    width={30}
                    height={30}
                  />
                  <span>{country.name}</span>
                </Button>
              ))
                 )}
              
       
             </div>
            </div>
          </div>
      
        
      </CardContent>
      <CardFooter className="flex justify-end">
      { changetext && <Button variant='ghost' className='text-[#0065ff] hover:bg-white cursor-pointer hover:text-[#0065ff]' onClick={handleGetAllCountry}>
         Show More</Button>}
      </CardFooter>
    </form>
    </Card>
      </div>
     
      </div>
    </div>
    </>
  )
}

export default CityDetailsComponent


