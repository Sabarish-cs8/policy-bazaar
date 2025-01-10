
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
import { useUserInformation } from '@/hook/home'

type Props = {
  handleSubmit:()=>void;
  handleFieldChange: (field: string, value: string) => void;
  userDetails: { monthlyIncome:string };
  handlePreviousStep: () => void; 
}

const MonthlyIncome = ({handleSubmit,handlePreviousStep,handleFieldChange,userDetails}: Props) => {
   const { handleMonthlyIncome ,handleIncomeSubmit ,error} = useUserInformation()

    const isValidIncome =
    userDetails.monthlyIncome !== '' &&
    !isNaN(parseFloat(userDetails.monthlyIncome)) &&
    parseFloat(userDetails.monthlyIncome) > 0 &&
    parseFloat(userDetails.monthlyIncome) < 999999;

    const handleFormSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      if(isValidIncome){
        handleIncomeSubmit(e);
        handleSubmit();
      }
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
      
      <div className='flex'>
      <Card className="w-[440px] md:w-[440px] lg:w-[890px] shadow-[0_4px_12px_0_rgba(0,0,0,.16)] rounded-l-none rounded-tr-[14px] rounded-br-[14px] px-[22px] py-[30px]">
      <form  onSubmit={handleFormSubmit}>
        <div className='flex justify-between items-center'>
          <Button asChild variant='ghost' className='hidden md:block bg-white hover:bg-white' onClick={handlePreviousStep}>
            <ChevronLeft className='w-12 h-12' size={48} />
          </Button>
          <CardHeader className='flex-1'>
        <CardTitle className='text-xl font-medium text-[#132e5c] text-center md:text-center'> 
        What is your fixed monthly income? (excluding variables) </CardTitle>
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
              <Input id="number" placeholder="Monthly Income (AED)" className='h-9 shadow-[0px_7px_8px_0px_#f4f9ff]' minLength={3} maxLength={6}
              required
              value={userDetails.monthlyIncome}
              onChange={(e)=>{handleMonthlyIncome(e);
                handleFieldChange('monthlyIncome',e.target.value)}
              }
              />
            </div>            
            </div>
          </div>
       
              {error && (
                <p className='text-red-500 text-sm mt-2 justify-end'>{error}</p>
              )}
      </CardContent>
      <CardFooter className=" flex flex-col w-full">
       <Button type='submit'  className='bg-[#e65733] text-white mt-6 w-full h-11 py-[17px] px-[10px] hover:bg-[#e65733] cursor-pointer hover:text-white' 
       disabled={!isValidIncome}
       >
       Proceed
       </Button>
      </CardFooter>
    </form>
    </Card>
      </div>
     
      </div>
    </div>
   
 </>
  )
}

export default MonthlyIncome


