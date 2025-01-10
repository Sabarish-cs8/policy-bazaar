'use client'
import { useBusinessCards } from '@/hook/useBusinessCards'
import React from 'react'

type BusinessCardsProps = {
    start?:number;
    end?:number;
}

const BusinessCards = ({start,end}: BusinessCardsProps) => {
   const { businessCards,loading,error} = useBusinessCards();

   if(loading) return <p>Loading...</p>
   if(error) return <p>Error: {error}</p>

   const displayedCards = businessCards.slice(start, end);

   const titleColor:Record<string,string> ={
    'RAKBANK Titanium Business Credit Card':'text-[#0065ff]',
    'Emirates Islamic Bank Business Card':'text-[#0065ff]',
   }
  return (
    <>
    <div className="container mx-auto p-6">
    {displayedCards.map((card) => (
      <div key={card.id}>
    <div className="text-center my-6">
    <h1 className={`text-3xl font-bold ${titleColor[card.name]} `}>
      {card.name}
    </h1>
    </div>
    <div className="text-left my-4">
    <h2 className="text-xl font-semibold mb-3">
    Features and Benefits of {card.name}
    </h2>
    <ul className="list-disc pl-5 space-y-2 ">
    {card.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
    </ul>
    </div>
      </div>
    ))}
  </div>
        </>
  )
}

export default BusinessCards