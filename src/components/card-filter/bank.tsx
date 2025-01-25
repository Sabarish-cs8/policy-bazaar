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
  
  

type Props = {
  // cards: CardDetails[];
  // openDialog: () => void; 
  // isDialogOpen: boolean; 
  // handleSaveChanges: () => void; 
  // setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
  selectedBank: string[]; 
  toggleBank: (bank: string) => void; 
}

const Banks = ({toggleBank,selectedBank}: Props) => {
  const {cards,openDialog,
      isDialogOpen,
      handleSaveChanges,setIsDialogOpen,
      } = useCardData();

      const allBanks = [...new Set(cards.flatMap((card)=>card.bankName.split(",")))]
  return (
    <div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger className='flex' onClick={openDialog}>
      Banks
        <ChevronDown />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:w-[425px] lg:w-[580px] h-[355px]">
        <DialogHeader>
          <DialogTitle>Banks</DialogTitle>
        </DialogHeader>

        <div className="grid  space-y-5  overflow-y-auto scroll-smooth">
  {allBanks.map((bankName,index)=>(
    <div
    key={index}
      className="flex w-full border-2 h-[55px] px-4 items-center border-[#dfe1e6] text-[#253858] gap-5"
      onClick={()=>toggleBank(bankName)}
    >
      <Checkbox checked={selectedBank?.includes(bankName)}/>
      {bankName}
    </div>
  ))}
</div>
  

        <DialogFooter>
          <Button type="submit" className='w-full bg-[#ff5530] hover:bg-[#ff5530] text-white'
          onClick={handleSaveChanges}
          >Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default Banks





