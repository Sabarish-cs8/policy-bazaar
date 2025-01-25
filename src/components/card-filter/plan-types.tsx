import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import useCardData from '@/hook/useCardData'
import { PlanTypeEnum } from '@/utils/cardUtils'

type Props = {
  //   cards: { planType: PlanTypeEnum[] };
      // openDialog: () => void; 
      // isDialogOpen: boolean; 
      // handleSaveChanges: () => void; 
      // setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
      togglePlanType: (plan: PlanTypeEnum) => void; 
   selectedPlanType: PlanTypeEnum[]; 
}

const PlanTypes = ({togglePlanType,selectedPlanType
  }: Props) => {
  const {cards,
      openDialog,
      isDialogOpen,
      handleSaveChanges,
      // togglePlanType,
      // selectedPlanType,
      setIsDialogOpen
    } = useCardData();
  // const planTypes = Array.isArray(cards.planType) ? cards.planType : [cards.planType]; 
  // console.log("plantypes",planTypes)
  const allPlanType = [...new Set(cards.flatMap((card)=>card.planType))]
  return (
    <div>
     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className='flex' onClick={openDialog}>
  Plan Types 
    <ChevronDown />
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px] md:w-[425px] lg:w-[580px] h-[355px]">
    <DialogHeader>
      <DialogTitle>Plan Types</DialogTitle>
    </DialogHeader>
    <div className="grid  space-y-5  overflow-y-auto scroll-smooth">
{Array.isArray(allPlanType) && allPlanType.length >= 0 ? (

allPlanType.map((plan) => (
<div
  key={plan}
  className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
   onClick={()=>togglePlanType(plan)}
>
  <Checkbox  checked={selectedPlanType?.includes(plan)}/>
  {plan}
</div>
))
) :(
  <div>No plan types available</div>
)}
</div>

    <DialogFooter>
      <Button type="submit" className='w-full bg-[#ff5530] hover:bg-[#ff5530] text-white' onClick={handleSaveChanges}>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
</div>
  )
}

export default PlanTypes


