import { CardDetails } from '@/utils/cardUtils'
import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
     card: CardDetails
     selectedCardId: number[];
     handleShortlist: (id: number) => void;
}

const Shortlist = ({card,selectedCardId,handleShortlist}: Props) => {
    // const {handleShortlist} = useCardData()
  return (
    <Button variant="ghost" className='flex hover:bg-none hover:text-none' onClick={()=>handleShortlist(card.id)}>
      {selectedCardId.includes(card.id) ? (
        <Bookmark className='text-blue-500 fill-blue-500 stroke-blue-500'/>
      )
    :(
       <Bookmark />
    )}
        Shortlist
    </Button>
  )
}

export default Shortlist