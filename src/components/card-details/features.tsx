import { Check, CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import useMoreDetails from '@/hook/useMoreDetails';
import { useCarouselScrollbar } from '@/hook/useCarousel';

interface CardFeaturesProps {
    features: string[];
  }

const Features = ({ features }: CardFeaturesProps) => {
  const [showAll,toggleShowAll] = useMoreDetails(false);
const {carouselRef,scrollLeft,scrollRight} = useCarouselScrollbar()
  const displayFeatures = showAll ? features : features.slice(0,4); 
  return (
    <>
    <div className='flex w-full lg:w-full justify-between items-center p-1
     lg:p-2 bg-[#fef7de]'>
      <div className='flex space-x-3 items-center w-full'>
        <span className='text-[#132e56] text-sm'> 
     Features:
    </span>

      <Button variant="ghost" size="icon" className='z-10 shrink-0 hover:bg-transparent block lg:hidden'
      onClick={scrollLeft}>
      <CircleChevronLeft 
      size={64} 
      className="bg-white text-[#0065ff] border-solid border-[#0065ff] rounded-full" 
      />
      </Button>

<div className='flex flex-grow overflow-hidden'>


    <ul ref={carouselRef} className='flex items-center justify-between space-x-3 overflow-x-auto scrollbar-hide scroll-smooth whitespace-nowrap w-full'>
      {displayFeatures.map((feature:string,index:number)=>(
          <li key={index} className='flex flex-row gap-1 text-sm carousel-item text-[#261f05]'>
          <Check size={16} width={15} className='flex items-center' />
          {feature}
        </li>    
      ))}
    </ul>
    </div>


       <Button variant='ghost' size="icon" className='shrink-0 z-10 hover:bg-transparent right-0  block lg:hidden'
      onClick={scrollRight}>
          <CircleChevronRight
          size={64} 
          className="bg-white text-[#0065ff] border-solid border-[#0065ff] rounded-full"  />
      </Button>


    </div>
    {features && (
 <div className='justify-end mt-2 hidden lg:flex'>
    <Button variant='ghost' className='flex mr-0 text-sm text-[#4291f5] bg-transparent hover:bg-transparent hover:text-[#4291f5]'
    onClick={toggleShowAll}
    >
     {showAll ? 'less' :'More'}
    </Button>
    </div>
    )}
    </div>
    </>
  )
}

export default Features