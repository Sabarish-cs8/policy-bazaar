import React, { Dispatch, SetStateAction } from 'react';
import Features from '@/components/card-details/features';
import CardItem from '@/components/card-details/card-items';
import CardFooter from '@/components/card-details/card-footer';
import { CardDetails } from '@/utils/cardUtils';
import NotFound from '@/components/card-details/notFound';



type Props = {
  cards:CardDetails[]
  loading: boolean;
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

const CardList = ({cards,loading,selectedCardId,handleShortlist,

  compareCards,handleCards,handleBottomCard,compareSheetOpen,handleClose,bottomCard,setCompareSheetOpen
}:Props) =>{

  if (loading) return <p>Loading cards...</p>;
  console.log("filtered from card page",cards)
  
  return (
<>
{cards.length > 0 ? (
  
cards.map((card)=>(
    <div key={card.id} className='
    flex flex-col w-full
    sm:w-full md:w-[95%]
    lg:w-[95%] border-2 rounded-sm border-[#e4eaf8] h-fit mx-auto'>
      <CardItem card={card}/>
      <Features features={card.features}/>
      <CardFooter card={card} selectedCardId={selectedCardId} handleShortlist={handleShortlist}
      
      compareCards={compareCards}
      handleCards={handleCards}
      compareSheetOpen={compareSheetOpen}
      handleClose={handleClose}
      bottomCard={bottomCard}
      handleBottomCard={handleBottomCard}
      setCompareSheetOpen={setCompareSheetOpen}
      
      />
    </div>
))
)
: (
  <div className='flex flex-col w-full border-2 rounded-sm border-[#e4eaf8] h-fit mx-auto py-4 text-center'>
    <NotFound />
  </div>
)}
</>

  );
}

export default CardList
