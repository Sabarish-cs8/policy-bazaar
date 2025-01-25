import { CardDetails } from '@/utils/cardUtils'
import React, { Dispatch, SetStateAction } from 'react'
import ViewDetails from './view-details'
import AddToCompare from './Add-to-compare'
import Shortlist from './short-list'
import { Button } from '../ui/button'

type CardItemProps = {
  card: CardDetails
  selectedCardId: number[];
  handleShortlist: (id: number) => void;

  compareCards: number[];
  handleCards: (id: number) => void;
    compareSheetOpen: boolean; 
    handleClose: (value: boolean) => void; 
    bottomCard: boolean; 
    handleBottomCard: () => void;
    setCompareSheetOpen: Dispatch<SetStateAction<boolean>>;
}

const CardFooter = ({card,selectedCardId,handleShortlist,

  compareCards,compareSheetOpen,handleCards ,handleClose,bottomCard,handleBottomCard,setCompareSheetOpen
}: CardItemProps) => {
  return (
    <div className='w-full lg:bg-[#f0f6ff] text-[#0065ff] flex flex-row flex-wrap items-center lg:justify-end
    gap-4 
    py-4 
    px-4 md:px-6 lg:px-10'>
       <div className="flex justify-center">
    <ViewDetails card={card} />
       </div>
       <div className="flex justify-center">
    <AddToCompare
     card={card}  
     compareCards={compareCards}
      handleCards={handleCards}
      compareSheetOpen={compareSheetOpen}
      handleClose={handleClose}
      bottomCard={bottomCard}
      handleBottomCard={handleBottomCard}
      setCompareSheetOpen={setCompareSheetOpen}
        />
        </div>
        <div className='hidden lg:flex'>
       <Shortlist  card={card} selectedCardId={selectedCardId} handleShortlist={handleShortlist}/>
        </div>
        <div className='flex lg:hidden justify-center'>
        <Button className=' text-white justify-end bg-[#f9491f] hover:bg-[#f9491f]'>
              Apply Now
          </Button>
        </div>
    </div>
  )
}

export default CardFooter