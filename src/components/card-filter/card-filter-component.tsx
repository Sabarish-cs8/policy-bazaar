import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, CircleChevronLeft, CircleChevronRight, SlidersHorizontal } from 'lucide-react'
import { Input } from '../ui/input'
import Features from './features'
import Banks from './bank'
import { useCarouselScrollbar } from '@/hook/useCarousel'
import PlanTypes from './plan-types'
import RewardType from './reward-types'
import { CardDetails, PlanTypeEnum } from '@/utils/cardUtils'
import { useSidebar } from '@/hook/header'
import MobileAllFilter from './mobileAllFilter'


type Props = {
   cards: CardDetails[];
   openDialog: () => void; 
   isDialogOpen: boolean; 
   handleSaveChanges: () => void; 
   selectedFeature: string[]; 
   toggleFeature: (feature: string) => void;
   setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
   toggleBank: (bank: string) => void; 
   selectedBank: string[]; 
   togglePlanType: (plan: PlanTypeEnum) => void; 
   selectedPlanType: PlanTypeEnum[]; 
   toggleReward: (reward: string) => void;
  selectedReward: string[];
  handleChange: (e: any) => void;
}

const CardFilterComponent = ({
  selectedFeature,
  toggleFeature,
  toggleBank,
  selectedBank,
  togglePlanType,
  selectedPlanType,
  selectedReward,
  toggleReward,
  handleChange
}: Props) => {
  const {carouselRef,scrollLeft,scrollRight} = useCarouselScrollbar()
  const {isOpen, openSidebar, closeSidebar} = useSidebar();
  return (
    <>
      <div  className='flex flex-col lg:flex-row items-center justify-between gap-5 overflow-hidden relative'>
      <div className='flex  h-full w-5 justify-start items-center bg-white'>

        <Button variant="ghost" size="icon" className='z-10 absolute shrink-0  hover:bg-transparent left-0 hidden md:hidden lg:block'
        onClick={scrollLeft}>
  <CircleChevronLeft 
    size={64} 
    className="bg-white text-[#0065ff] border-solid border-[#0065ff] rounded-full" 
    />
</Button>
    </div>
    <div className='flex flex-col sm:flex-row'>

<ul ref={carouselRef} className='flex flex-col sm:flex-row overflow-x-auto scrollbar-hide items-center scroll-smooth whitespace-nowrap px-4 gap-2 '>

           {/* Search Input */}
           <li className="flex-shrink-0 items-center">
            <Input type="search" onChange={handleChange} placeholder="Search" className="w-full" />
          </li>
     <div className='flex'>

          {/* Features */}
          <li className="carousel-item items-center">
            <div className="card-item">
              <Features  
        selectedFeature={selectedFeature}
        toggleFeature={toggleFeature}
           />
            </div>
          </li>

          {/* Banks */}
          <li className="carousel-item items-center">
            <div className="card-item">
              <Banks 
               selectedBank={selectedBank}
               toggleBank={toggleBank}
               />
            </div>
          </li>

          {/* Plan Types */}
          <li className="carousel-item items-center hidden lg:block">
            <div className="card-item">
              <PlanTypes
               selectedPlanType={selectedPlanType}
               togglePlanType={togglePlanType}
               />
            </div>
          </li>

          {/* Reward Types */}
          <li className="carousel-item items-center hidden lg:block">
            <div className="card-item">
              <RewardType  
              selectedReward={selectedReward}
              toggleReward={toggleReward}
              />
            </div>
          </li>
              </div>
          </ul>
          {/**Small screen */}

          {/* <div className='block lg:hidden items-center'>
          <div className="w-full left-0 bg-white z-50">
             <Button variant="ghost" className="text-2xl hover:bg-white z-50" onClick={isOpen ? closeSidebar : openSidebar}>
                    <span>{isOpen ? (<ArrowLeft />) : (<SlidersHorizontal />)}</span>
                    </Button>
          </div>
          {
      <MobileAllFilter isOpen={isOpen} onClose = {closeSidebar} />
    }
          </div> */}
          </div>
<div className='flex h-full w-5 bg-white justify-end items-center'>


        <Button variant='ghost' size="icon" className='shrink-0 absolute z-10 hover:bg-transparent right-0 hidden md:hidden lg:block'
        onClick={scrollRight}>
            <CircleChevronRight
            size={64} 
            className="bg-white text-[#0065ff] border-solid border-[#0065ff] rounded-full"  />
        </Button>
        </div>
        </div>
        
        </>
  )
}

export default CardFilterComponent