import { CardDetails } from '@/utils/cardUtils';
import React, { Dispatch, SetStateAction } from 'react'
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
import useCardData from '@/hook/useCardData';

type Props = {
//  cards: CardDetails[];
//    openDialog: () => void; 
//    isDialogOpen: boolean; 
//    handleSaveChanges: () => void; 
//    setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
   toggleReward: (reward: string) => void;
  selectedReward: string[];
}

const RewardType = ({toggleReward,selectedReward}: Props) => {
   const {cards,openDialog,
      isDialogOpen,
      handleSaveChanges,setIsDialogOpen} = useCardData();
      const allRewards = [...new Set(cards.flatMap((card)=>card.rewards))]
  return (
       <div>
           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                 <DialogTrigger className='flex' onClick={openDialog}>
         Reward Type 
           <ChevronDown />
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px] md:w-[425px] lg:w-[580px] h-[355px] ">
           <DialogHeader>
             <DialogTitle>Reward Type</DialogTitle>
           </DialogHeader>
         
           <div className="grid  space-y-5  overflow-y-auto scroll-smooth">
     {allRewards.map((reward) => (
       <div
         key={reward}
         className="flex w-full border-2 h-fit px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
         onClick={()=>toggleReward(reward)}
       >
         <Checkbox checked={selectedReward?.includes(reward)}/>
         {reward}
       </div>
     ))}
   </div>
   
           <DialogFooter>
             <Button type="submit" className='w-full bg-[#ff5530] hover:bg-[#ff5530] text-white' onClick={handleSaveChanges}>Save changes</Button>
           </DialogFooter>
         </DialogContent>
       </Dialog>
       </div>
  )
}

export default RewardType