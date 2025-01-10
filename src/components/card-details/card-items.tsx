import React from 'react'

import Image from 'next/image';
import { CardDetails } from '@/utils/cardUtils';
import { Separator } from '../ui/separator';
import { BadgePercent, PlusIcon } from 'lucide-react';
import { Button } from '../ui/button';
import useMoreDetails from '@/hook/useMoreDetails';


interface CardItemProps {
    card: CardDetails;
  }
const CardItem = ({ card }: CardItemProps) => {
  const [showAll,toggleShowAll] = useMoreDetails(false);

  const displayCards = showAll ? card.rewards : card.rewards.slice(0,4)
  return (
    <div className='flex flex-row w-full'>
    <div className='py-[47px] px-[22px] w-[200px]'>
    <Image src={card.icon} alt={`${card.cardName}`} width={97}
    height={60}/>
    </div>
    <div className='flex flex-col w-full'>
      <div className=' flex flex-row w-full space-x-20 my-4'>
      <div className='flex flex-col'>
        <span className='text-[#728ca0]'>{card.bankName}</span>
        <span className='text-[#132e5c] font-semibold'>{card.cardName}</span>
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
      <Separator orientation='horizontal' />
      <div className=''>
        <div className='flex flex-row w-full items center text-[#65c85b] gap-2 my-2 text-sm'>
        <BadgePercent  size={16}/>
        <span className=''>Offers</span>
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col w-[600px] text-xs'>
          <ul className='grid grid-cols-2 gap-x-4 gap-y-2 list-disc  list-inside marker:text-[#65c85b] text-[#132e5c]'>
            {displayCards.map((reward:string,index:number)=>(
              <li key={index}>{reward}
            </li>
            ))}
          </ul>
          {card.rewards.length > 4 && (          
          <Button variant='ghost' className='text-[#4291f5] ml-10 bg-transparent text-sm hover:bg-transparent hover:text-[#4291f5] flex' onClick={toggleShowAll}>
            
            {showAll ? ('less'):( 
              <>
              <PlusIcon size={16} /> 
            More 
            </>)}
          </Button>
          )}
            </div>
          <Button className=' text-white justify-end bg-[#f9491f] hover:bg-[#f9491f]'>
              Apply Now
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardItem