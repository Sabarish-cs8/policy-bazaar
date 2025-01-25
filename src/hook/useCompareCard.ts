import {  useState } from "react";
import useCardData from "./useCardData";

export const useCompareCard = () => {
    // const [showAll , toggleShowAll] = useMoreDetails(false);
    const [compareSheetOpen,setCompareSheetOpen] = useState<boolean>(false)
    const [compareCards,setCompareCards] = useState<number[]>([])
    const [bottomCard,setBottomCard] = useState<boolean>(false)
    const {cards} = useCardData();

    const handleCards = (id:number) =>{
      console.log("card id",id)
        setCompareSheetOpen(true)
        console.log("compare sheet",compareSheetOpen)
        setCompareCards((prevCards) => {
          const isAlreadyShortlisted = prevCards.includes(id);
          const updatedIds = isAlreadyShortlisted
          ? prevCards.filter((cardId)=> cardId !== id)
          :[...prevCards,id];

          const compareCards = cards.filter((card)=> updatedIds.includes(card.id));
          console.log("compare card hook",compareCards);
          return updatedIds
            // if (prevCards.length < 3) {
            //   const isCardInList = prevCards.some(existingCard => existingCard.id === card.id);
              
            //   if (isCardInList) {
            //     return prevCards.filter(existingCard => existingCard.id !== card.id);
            //   } else {
            //     const  newCard=[...prevCards, card]
            //     return Array.from(new Set(newCard));
            //   }
            // } else {
            //   console.log("Cannot add more than 3 cards.");
            //   return prevCards;
            // }
          });
         
    }

    const handleClose = (value:boolean) =>{
      setCompareSheetOpen(value)
      if(value === false){
               setBottomCard(true)
      } 
        console.log("bottom hook",bottomCard)
        console.log("sheet hook",compareSheetOpen)
    }


    const handleBottomCard = () => {
        setBottomCard(false)
        setCompareSheetOpen(true)
    }

    return{
        compareSheetOpen,
        setCompareSheetOpen,
        compareCards,
        handleCards,
        handleClose,
        handleBottomCard,
        setCompareCards,
        bottomCard,
        setBottomCard,
    }

}