import {  ChevronRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CardDetails } from '@/utils/cardUtils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '../ui/separator';
import { useDisplayCards } from '@/hook/useDisplay';

type Props = {
  card: CardDetails
}

const ViewDetails = ({card}: Props) => {
  const {activeViewDetails,
    handleactiveViewDetails,} =useDisplayCards()
  return (
    <>
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className='flex hover:text-[#0065ff]'>View details  <ChevronRight /></Button>
      </SheetTrigger>
      <SheetContent className="!w-full !max-w-[95%] sm:!w-[90%] md:!w-[85%] lg:!w-[70%] xl:!w-[60%] px-6 overflow-y-auto">
      <div >
        <SheetHeader>
          <SheetTitle>
            <div className='flex flex-col'>
              <div className='flex flex-wrap lg:lex-row w-full justify-between items-center mx-3 px-10'>
               <Image src={card.icon} alt={`${card.cardName}`} width={97}
                   height={60}/>
                   <div className='flex flex-col'>
        <span className='text-[#132e5c] font-semibold'>{card.cardName}</span>
        <span className='text-[#728ca0]'>{card.bankName}</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-[#728ca0]'>Minimum Income (AED)</span>
        <span className='text-[#132e5c] font-semibold'>{card.monthlyIncome}</span>
        </div>
        <div className='flex flex-col'>
        <span className='text-[#728ca0]'>Annual Fees (AED)</span>
        <span className='text-[#132e5c] font-semibold'>{card.annualFees}</span>
        </div>
              </div>
              <div className='flex justify-end items-center px-10 mt-4'>

              <Button className=' text-white justify-end bg-[#f9491f] hover:bg-[#f9491f]'>
                            Apply Now
                        </Button>
              </div>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className='flex flex-row gap-5 mt-5'>
            <div className={`flex items-center text-[#253858] cursor-pointer ${activeViewDetails === 'Features & Benefits' ? "font-bold underline decoration-4 underline-offset-8" : ''} `}onClick={()=>handleactiveViewDetails('Features & Benefits')}>
            Features & Benefits
            </div>
            <div className={`flex items-center text-[#253858] cursor-pointer ${
              activeViewDetails === 'Fee Details' ? "font-bold decoration-4 underline underline-offset-8" : " "
            }`} onClick={()=>handleactiveViewDetails('Fee Details')}>
            Fee Details
            </div>
            </div>
          </SheetDescription>
          <Separator orientation='horizontal' />
        </SheetHeader>
        {activeViewDetails === 'Features & Benefits' && (       
         <Accordion type="multiple" className="w-full overflow-y-auto scroll-smooth" defaultValue={["item-1", "item-2","item-3"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Key Features</AccordionTrigger>
        <AccordionContent>
        <ul className='gap-y-2 list-disc  list-inside marker:text-[#65c85b] text-[#132e5c]'>
         {card.features.map((feature:string,index:number)=>(
          <li key={index}>
            {feature}
          </li>
         ))}
         </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Highlights</AccordionTrigger>
        <AccordionContent>
          <ul className='gap-y-2 list-disc  list-inside marker:text-[#65c85b] text-[#132e5c]'>
         {card.rewards.map((reward:string,index:number)=>(
            <li key={index}>
              {reward}
            </li>
         ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Hits</AccordionTrigger>
        <AccordionContent>
        <ul className='gap-y-2 list-disc  list-inside marker:text-[#65c85b] text-[#132e5c]'>
         {card.benefits.map((benefit:string,index:number)=>(
          <li key={index}>
            {benefit}
          </li>
         ))}
         </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
     )}
     {activeViewDetails === 'Fee Details' && (
      <div>
        Fee Details
        <div className='flex flex-col'>
        <span className='text-[#728ca0]'>Annual Fees (AED)</span>
        <span className='text-[#132e5c] font-semibold'>{card.annualFees}</span>
        </div>
      </div>
     )}
     </div>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default ViewDetails


  