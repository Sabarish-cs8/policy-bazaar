import { Check } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import useMoreDetails from '@/hook/useMoreDetails';



interface CardFeaturesProps {
    features: string[];
  }
const Features = ({ features }: CardFeaturesProps) => {
  const [showAll,toggleShowAll] = useMoreDetails(false);

  const displayFeatures = showAll ? features : features.slice(0,4); 
  return (
    <>
    <div className='flex w-full justify-between items-center p-2 bg-[#fef7de]'>
      <div className='flex space-x-3'>
        <span className='text-[#132e56] text-sm justify-start'> 
     Features:
    </span>
    <ul className='flex flex-row items-center justify-between space-x-3'>
      {displayFeatures.map((feature:string,index:number)=>(
          <li key={index} className='flex flex-row gap-1 text-sm  text-[#261f05]'>
          <Check size={16} width={15} className='flex items-center' />
          {feature}
        </li>
      ))}
    </ul>
    </div>
    {features && (
 <div className='flex  justify-end mt-2'>
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