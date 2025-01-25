import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "../ui/separator"
import useCardData from "@/hook/useCardData"
import Image from 'next/image';


type Props = {
  selectedCardId: number[]
}

export function Shortlist({selectedCardId}:Props) {
  const {cards} = useCardData()
  console.log("Selected Card ID from shortlist:", selectedCardId);

  const shortlistedCards = cards.filter((card)=> selectedCardId.includes(card.id));
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex gap-3 items-center">Shortlisted Plans 
         
        
           <p className="bg-[#00c127] text-white flex p-1 w-6 h-6 items-center justify-center text-sm rounded-full">{shortlistedCards.length}</p>
        
        </CardTitle>
        <Separator orientation="horizontal"/>
      </CardHeader>
      <CardContent>
        <div>
        {shortlistedCards.length > 0 ? (
          <ul>
          
           <li
           key={shortlistedCards.slice(-1)[0].id}
           className="flex items-center gap-4 border-b mb-4 pb-2 last:border-b-0"
         >
          <div className="flex flex-col w-full">
          <div className="flex justify-between items-top">
          <div className="flex bg-white p-3 border rounded-sm">
            <Image src={shortlistedCards.slice(-1)[0].icon} alt={`${shortlistedCards.slice(-1)[0].cardName}`} width={57}
              height={30}/>
              </div>
             <p className="flex justify-end text-base text-[#052e5e]">{shortlistedCards.slice(-1)[0].cardName}</p>
              </div>
           <div className="flex justify-between w-full flex-row text-[#052e5e]">
             <p className="text-sm ">
               Minimum Income(AED): 
             </p>
               <p className="text-sm font-semibold">
               {shortlistedCards.slice(-1)[0].monthlyIncome}
               </p>
           </div>
              </div>
         </li>

<p className="flex bottom-1 items-center justify-center text-[#0065ff]">View shortlisted plans</p>
           
        </ul>
        ):(
          <>
          <p>Add plans to shortlist to quickly find them later</p>
          <p className="p-3 mt-10 items-center justify-center border-2 border-dotted rounded-sm">No plans added to shortlist yet</p>
          </>
        )}
        </div>
      </CardContent>
    </Card>
  )
}
