'use client';
import React from 'react'
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
import { Input } from "@/components/ui/input"

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { useUserInformation } from '@/hook/home';


type Props = {
  handleNextStep:()=>void;
  handleFieldChange: (field: string, value: string) => void;
  userDetails: { name: string; email: string; phoneNumber: string };
  handlePreviousStep: () => void; 
}

const ContactDetails = ({handleNextStep,handlePreviousStep,handleFieldChange,userDetails}: Props) => {

  const {
    // textLength,
    handleGetUpdateOnWhatsapp,
    showWhatsapp,
    handleButtonClick,
    // handleNameChange,
    // handleEmailChange,
    // handleSubmit,
    // name,
    // email,
    error} =useUserInformation()

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
      
      <div className='flex'>
      <form   onSubmit={(e) => {
              e.preventDefault();
              handleNextStep();
            }}>
      <Card className="w-[440px] md:w-[440px] lg:w-[890px] shadow-[0_4px_12px_0_rgba(0,0,0,.16)] rounded-l-none rounded-tr-[14px] rounded-br-[14px] px-[22px] py-[30px]">
     
        <div className='flex justify-between items-center'>
          <Button asChild variant='ghost' className='hidden md:block bg-white hover:bg-white'onClick={handlePreviousStep} >
            <ChevronLeft className='w-12 h-12' size={48} />
          </Button>
          <CardHeader className='flex-1'>
        <CardTitle className='text-xl font-medium text-[#132e5c] text-center md:text-center'> Please Fill Your Contact Details </CardTitle>
      </CardHeader>
          <Button asChild variant='ghost' className='hidden md:block bg-white hover:bg-white' >
            <ChevronRight size={48} />
          </Button>
        </div>
      <CardContent>
        
    
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-4">
            <div className="flex  justify-between gap-4 flex-col 
            md:flex-col
            lg:flex-row">
              <Input id="name" placeholder="Your Name" className='shadow-[0px_7px_8px_0px_#f4f9ff]'required value={userDetails.name}
              onChange={(e) => handleFieldChange('name', e.target.value)}/>
              <Input id="email" placeholder="Email" className='shadow-[0px_7px_8px_0px_#f4f9ff]' required value={userDetails.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}/>
            </div>
            <div className="flex items-center border rounded-md overflow-hidden shadow-[0px_7px_8px_0px_#f4f9ff]">
                <span className="px-3 py-2 text-sm border-r">+971</span>
                <Separator orientation='vertical' />
                <Input id="number" placeholder='Mobile Number'className="flex-1 border-none " minLength={10} maxLength={10} required value={userDetails.phoneNumber}   onChange={(e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); 
    handleFieldChange('phoneNumber', value); 
    handleGetUpdateOnWhatsapp(value); 
  }} />
            </div>
            
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
      
        
        
      </CardContent>
      
      <CardFooter className=" flex flex-col w-full">
      <p className='text-sm w-full'>
        By Clicking on &quot;Proceed&quot;, I declare that I am a resident of UAE and holding a valid Visa and agree to the website 
        <span className='text-[#0065ff]'> Privacy Policy</span> and 
        <span className='text-[#0065ff]'> Terms of Use</span>.I hereby give consent to 
        <span className='text-[#0065ff]'> Policybazaar UAE</span> to share my details with the UAE registered banks. 
        </p>
        {showWhatsapp && (
            <p className='items-center justify-center flex mt-7 w-full gap-3'>Get updates on WhatsApp +971 {userDetails.phoneNumber} <span className='text-[#0065ff]'> Edit </span>  <Switch className='bg-[#0065ff]' />
            </p> 
          )}
       <Button type='submit'  className='bg-[#e65733] text-white mt-6 w-full py-[17px] px-[10px] hover:bg-[#e65733] cursor-pointer hover:text-white'
       onClick={()=>handleButtonClick('contact')}
       disabled={!userDetails.name || !userDetails.email || !userDetails.phoneNumber || !showWhatsapp}
       >
       View Cards</Button>
      </CardFooter>
    </Card>
    </form>
      </div>
     
      </div>
    </div>
 
 </>
  )
}

export default ContactDetails


