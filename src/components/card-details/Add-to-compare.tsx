import React, { Dispatch, SetStateAction } from 'react'
import { Circle, CircleCheck, CircleChevronUp, PlusSquare, X } from 'lucide-react'
import { Button } from '../ui/button'
import { CardDetails } from '@/utils/cardUtils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCompareCard } from '@/hook/useCompareCard'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import useCardData from '@/hook/useCardData'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer"
import { useScreenSize } from '@/hook/header'




type Props = {
  card: CardDetails
  compareCards: number[];
  handleCards: (id: number) => void;
    compareSheetOpen: boolean; 
    handleClose: (value: boolean) => void; 
    bottomCard: boolean; 
    handleBottomCard: () => void;
    setCompareSheetOpen: Dispatch<SetStateAction<boolean>>;
}

const AddToCompare = (
  {
     card,
    compareCards,
    handleCards,
    bottomCard,
    handleClose,

  }
  : Props) => {
    
     const {
     compareSheetOpen,
    setBottomCard,
     handleBottomCard,
     setCompareSheetOpen
     } = useCompareCard()
  //  console.log("bottom card add to compare",bottomCard)
  const screenSize = useScreenSize();
     const {cards} = useCardData()
    const disableCompareButton = compareCards.length <= 1;
    const shortListedComapareCards = cards.filter((card)=>compareCards.includes(card.id))
    console.log('Sheet Open:', compareSheetOpen);
console.log('Dialog Open:', compareSheetOpen);

    
  return (
    <div className='flex items-center'>

        <Button variant='ghost' className='flex hover:bg-none hover:text-none'  onClick={()=>
          {handleCards(card.id);
          setCompareSheetOpen(true)}
        }>
            {compareCards.includes(card.id) ? (
              <CircleCheck className='shadow-[0_0_0_0_#00a870] bg-[#00a870] rounded-full' color='white'/>
            ):(
              <Circle />
            )}
      Add to compare
        </Button>
          {screenSize === 'mobile' ?(          
            compareSheetOpen && (
              <div className="block lg:hidden">
          <Drawer open={compareSheetOpen} onOpenChange={setCompareSheetOpen}>
  <DrawerContent className="shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] p-2 rounded-t-3xl bg-[#f7fcff]">
  <DrawerClose asChild>
     <Button variant="ghost" className="hover:bg-transparent absolute -top-9 right-4 z-40"><X className="text-white w-16 h-16 " size={48}/></Button>
    </DrawerClose>
  <div className="mx-auto w-full">  
    <DrawerHeader className="flex flex-col items-center gap-4">
    Compare Plans
    </DrawerHeader>
    <div className="flex flex-row">
    {
                shortListedComapareCards.slice(0,3).map((card)=>(
                  <div key={card.id}>
                       <Card className='w-fit relative'>
                        <Button variant="ghost" className='absolute top-0 right-0 w-5 h-5 bg-black p-1 rounded-full hover:bg-black' onClick={()=>handleCards(card.id)}>
                          <X  color='white'/>
                        </Button>
          <CardContent>
          <div className='justify-center items-center mt-5 flex flex-col text-xs'>
          <Image src={card.icon} alt={card.cardName} width={40} height={40} />
          <p>{card.cardName}</p>
          <p>{card.bankName}</p>
          <span className='text-[#728ca0]'>Minimum Income (AED)</span>
          <span className='text-[#132e5c] font-semibold'>{card.monthlyIncome}</span>
          </div>
          </CardContent>
          </Card>   
                  </div>
                ))}
                {compareCards.length <= 1 && (
          
                      <div className='justify-center p-5 space-y-3 items-center mt-5 flex flex-col border-2 border-[#2a63f6] text-[#2a63f6] bg-[#2a63f621]' onClick={()=>handleClose(false)}>
                         <PlusSquare color='#2a63f6'/>
                         Add more
                      </div>
                )}
                </div>
    </div>

    <DrawerFooter>
    <Button className=' text-white justify-center bg-[#f9491f] hover:bg-[#f9491f]'disabled={disableCompareButton}>Compare Now</Button>
    </DrawerFooter>
  </DrawerContent>
  </Drawer>
          </div>
            )
        ) : (
          compareSheetOpen &&
            (
              <div className="hidden lg:block">
              <Sheet open={compareSheetOpen} onOpenChange={setCompareSheetOpen}>
                      <SheetContent side={'bottom'}>
                  <SheetHeader>
                    <SheetTitle>Compare Plans</SheetTitle>
                  </SheetHeader>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-5'>
                    {
                    shortListedComapareCards.slice(0,3).map((card)=>(
                      <div key={card.id}>
                           <Card className='w-fit relative'>
                            <Button variant="ghost" className='absolute top-0 right-0 w-5 h-5 bg-black p-1 rounded-full hover:bg-black' onClick={()=>handleCards(card.id)}>
                              <X  color='white'/>
                            </Button>
              <CardContent>
              <div className='justify-center items-center mt-5 flex flex-col'>
              <Image src={card.icon} alt={card.cardName} width={80} height={80} />
              <p>{card.cardName}</p>
              <p>{card.bankName}</p>
              <span className='text-[#728ca0]'>Minimum Income (AED)</span>
              <span className='text-[#132e5c] font-semibold'>{card.monthlyIncome}</span>
              </div>
              </CardContent>
              </Card>   
                      </div>
                    ))}
                    {compareCards.length <= 1 && (
              
                          <div className='justify-center p-5 space-y-3 items-center mt-5 flex flex-col border-2 border-[#2a63f6] text-[#2a63f6] bg-[#2a63f621]' onClick={()=>handleClose(false)}>
                             <PlusSquare color='#2a63f6'/>
                             Add more
                          </div>
                    )}
                    </div>
                    <div className='flex-row flex'>
                      <Button className=' text-white justify-end bg-[#f9491f] hover:bg-[#f9491f]'disabled={disableCompareButton}>Compare Now</Button>
                      <SheetClose>
                      <Button variant="ghost" className=' bg-white justify-end text-[#0065ff] hover:text-[#0065ff] hover:bg-white' 
                      onClick={()=>handleClose(false)}>Close</Button>
                      </SheetClose>
                    </div>
                  </div>
                  <SheetFooter className='justify-center items-center flex'>
                    <p className='text-[#f9491f]'>{compareCards.length} / 3 Selected</p>              
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              </div>
                )
              
        )
        }
         {compareCards.length > 0 &&  bottomCard &&  (
           <>
           <div className='bottom-0 bg-white fixed left-0 p-3 flex gap-3 border rounded-tr-lg z-20' onClick={handleBottomCard} >
             Compare Plans 
             <CircleChevronUp />
           </div>
           </>
         )}
    </div>
  )
}

export default AddToCompare


       
     
    