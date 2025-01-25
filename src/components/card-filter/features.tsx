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
import { CardDetails } from '@/utils/cardUtils'
import useCardData from '@/hook/useCardData'

  
  

type Props = {
  // cards: CardDetails[];
  // openDialog: () => void; 
  // isDialogOpen: boolean; 
  // handleSaveChanges: () => void; 
  // setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
  selectedFeature: string[]; 
  toggleFeature: (feature: string) => void;
}

const Features = ({toggleFeature,selectedFeature}: Props) => {
  const {cards,openDialog,
    isDialogOpen,
    handleSaveChanges,setIsDialogOpen} = useCardData();

    const allFeatures = [...new Set(cards.flatMap((card)=>card.features))]

  return (
    <div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className='flex' onClick={openDialog}>
        Features 
        <ChevronDown />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:w-[425px] lg:w-[580px] h-[355px] ">
        <DialogHeader>
          <DialogTitle>Features</DialogTitle>
        </DialogHeader>
     
        <div  className="grid space-y-5  overflow-y-auto scroll-smooth">
  {allFeatures.map((feature) => (
    <div
    key={feature}
    className="flex w-full border-2 h-[65px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
    onClick={()=>toggleFeature(feature)}
    >
      <Checkbox checked={selectedFeature?.includes(feature)} />
      {feature}
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

export default Features





