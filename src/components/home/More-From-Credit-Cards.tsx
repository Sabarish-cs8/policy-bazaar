'use client'
import  React, { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import whatisacreditcardusedfor from "@/icons/what-is-a-credit-card-used-for.png"
import KreditCard from "@/icons/kredit-card-vs-credit-card.png"
import EmiratesAirlinesCreditCard from "@/icons/emirates-airlines-credit-card.png"
import TypesOfCreditCard from "@/icons/types-of-credit-cards-.jpg"
import MinimumSalaryCreditCard from "@/icons/minimum-salary-for-credit-card-in-uae.jpg"
import BalanceCheckCreditCard from "@/icons/fab-bank-credit-card-balance-check-.jpg"

import WomenCreditCard from "@/icons/Y2MtVGhlLUJlc3QtQ3JlZGl0LUNhcmQtMTc1eDEzMjE2MDkxNTI2MTEzNTI=.jpeg"
import CashbackCreditCard from "@/icons/best-cashback-credit-card-in-uae.png"
import CreditCardReward from "@/icons/cc-credit-card-rewards-and-offers.jpeg"
import CreditCardOffer from "@/icons/cc-credit-card-offers.jpeg"
import BestCreditCard from "@/icons/cc-best-credit-card-uae.jpeg"
import Image from "next/image" 


const Articles : { 
  RecentArticles:{icon: string; createdAt:string;reviewTitle:string; briefReview:string}[];
  PopularArticles:{
    icon: string ; createdAt:string;reviewTitle:string; briefReview:string
  }[];
   } ={
    RecentArticles:[
      {
        icon: whatisacreditcardusedfor,
        createdAt:"13 Nov 2024",
        reviewTitle:"How Do Credit Cards Work?",
        briefReview:"Credit cards can help build credit while making purchases more convenient. Learn how credit cards work and best practices for using them by Policybazaar.",
      },
      {
        icon: KreditCard,
        createdAt:"12 Nov 2024",
        reviewTitle:"Kredit Card vs Credit Card - Key Differences Explained",
        briefReview:"Learn the key differences between &quot;Kredit&quot; and &quot;Credit&quot; cards, and find out which one suits your needs best. Read more for insights!",
      },
      {
        icon: EmiratesAirlinesCreditCard,
        createdAt:"12 Nov 2024",
        reviewTitle:"Emirates Airlines Credit Card - Apply Online Emirates Airlines Card in UAE",
        briefReview:"Emirates Airlines Credit Card - Compare &amp; Apply for Emirates Airlines Credit Card online in UAE, Dubai. Check eligibility, features &amp; benefits, charges, offers, &amp; more.",
      },
      {
        icon: TypesOfCreditCard,
        createdAt:"25 Sep 2024",
        reviewTitle:"Types of Credit Cards: Compare and Choose the Best",
        briefReview:"Discover the different types of credit cards, compare benefits, and choose the best one for your needs with this comprehensive guide.",
      },
      {
        icon: BalanceCheckCreditCard,
        createdAt:"2 Sep 2024",
        reviewTitle:"How to Check FAB Credit Card Balance Online in UAE - January 2025",
        briefReview:"FAB Credit Card Balance Check - Check Your FAB Bank Balance with these easy methods 1- Mobile Banking, 2- FAB Mobile App &amp; 3- Via Offline.",
      },
      {
        icon: MinimumSalaryCreditCard,
        createdAt:"19 Sep 2024",
        reviewTitle:"Minimum Salary Credit Card UAE January 2025",
        briefReview:"Discover the best credit cards in UAE for minimum salary requirements. Find the perfect card for you today.",
      },
    ],
    PopularArticles:[
      {
        icon: CreditCardOffer,
        createdAt:"19 Sep 2024",
        reviewTitle:"Best Credit Cards in Dubai, UAE for December 2024",
        briefReview:"Best Credit Cards in Dubai,UAE - Check Out the List of top 11 best Credit Card in UAE for December 2024 with Features & benefits. Also, know the eligibility criteria & Document Requirements for all Credit Cards",
      },
      {
        icon: CreditCardOffer,
        createdAt:"14 Oct 2024",
        reviewTitle:"Airport Lounge Access Credit Cards in UAE | Free Lounge Access",
        briefReview:"Choose Airport Lounge Access Credit Cards at policybazaar UAE. Find eligible lounges, discover benefits and relax before your flight.",
      },
      {
        icon: CashbackCreditCard,
        createdAt:"14 Aug 2024",
        reviewTitle:"Best Cashback Credit Cards in UAE - December 2024",
        briefReview:"Looking for Best Cashback Credit Card in UAE & Dubai - Here is list of top 11 best cash back credit cards in UAE for December 2024 that offers high cash back on credit card.",
      },
      {
        icon: WomenCreditCard,
        createdAt:"17 Sep 2024",
        reviewTitle:"How to Get a Credit Card for a Salary Below AED 3000 in UAE?",
        briefReview:"Explore credit card with a minimum salary on AED 3000 UAE?  Here's how to get a credit card if you earn below AED 3000. Check & apply for a credit card  on an AED 3000 salary in UAE today.",
      },
      {
        icon: BestCreditCard,
        createdAt:"24 Sep 2024",
        reviewTitle:"Which is Better: Gold, Platinum or Titanium Credit Card?",
        briefReview:"Which is better gold, platinum or titanium credit card? Check out the benefits and the basic differences between gold, platinum or titanium credit cards.",
      },
      {
        icon: CreditCardReward,
        createdAt:"12 Dec 2024",
        reviewTitle:"How to Get a Credit Card If You Earn Below 5000",
        briefReview:"Looking for a credit card with a lower salary? Here's how to get a credit card if you earn below 5000 in UAE. Also know all requirements to get the credit card on minimum salary & Apply online today",
      },
    ],
   };


type Props = {}

const MoreFromCreditCards = (props: Props) => {
  const [buttonData , setButtonData] = useState("Recent-Articles")


  const handleButtonData = (e) =>{
    console.log(e.target.value)
    setButtonData(e.target.value)
  }

  const renderContent = (buttonData:string) =>{
    
    switch (buttonData) {
      case  "Recent-Articles":
      return(
       
        <div className="flex">
           <Carousel
                opts={{
                  align: "start",
                 
                }}
                className="w-full max-w-7xl h-[80%]"
              >
                <CarouselContent>
              {Articles.RecentArticles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 relative">
                  <div className="p-1 flex flex-row ">
                    <Card className="w-full pb-5 h-[450px] bg-white border border-[#dadce0] rounded-md shadow-[0px_3px_6px_#00000029]">
                      <CardContent className="flex flex-col p-0">
                       <Image src={article.icon}
                       alt="Article Icon"
                       className="relative"
                       />
                       <div className="p-6 space-y-2">

                       <span className="text-[#253858cc] text-sm">{article.createdAt}</span>
                        <h2 className="text-xl font-medium text-[#052f5f]">{article.reviewTitle}</h2>
                      <p className="text-[#253858cc] text-sm over">{article.briefReview}</p>
                       </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]" />
<CarouselNext className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]" />

</Carousel>
        </div>
      );
      case  "Popular-Articles" :
      return(
                 <div className="flex">
                  <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
                  <CarouselContent>
                 {Articles.PopularArticles.map((article, index) => (
                   <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 relative">
                     <div className="p-1 flex flex-row ">
                       <Card className="w-full pb-5 h-[450px] bg-white border border-[#dadce0] rounded-md shadow-[0px_3px_6px_#00000029]">
                         <CardContent className="flex flex-col p-0">
                          <Image src={article.icon}
                          alt="Article Icon"
                          className="relative"
                          />
                          <div className="p-6 space-y-2">
         
                          <span className="text-[#253858cc] text-sm">{article.createdAt}</span>
                           <h2 className="text-xl font-medium text-[#052f5f]">{article.reviewTitle}</h2>
                         <p className="text-[#253858cc] text-sm">{article.briefReview}</p>
                          </div>
                         </CardContent>
                       </Card>
                     </div>
                   </CarouselItem>
                 ))}
                 </CarouselContent>
      <CarouselPrevious className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]" />
      <CarouselNext className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]" />
</Carousel>
           </div>
      )
    }
  }
  
  return (
    <div className='container mx-auto p-6'>
        <div className='text-center my-6'>
        <h1 className='text-xl font-semibold'>
        More From Credit Cards
        </h1>
        </div>
        
        <div className='mt-5 mb-5 pt-5 pb-5'>
          <div>
            <div className="flex flex-row items-center justify-center gap-5 mb-5 p-5">
            <Button variant="ghost" className={`hover:bg-white ${
              buttonData === "Recent-Articles" ? 'text-[#0065ff]' : 'text-black'
            } `}
            
            value="Recent-Articles" onClick={(e) =>handleButtonData(e)}>Recent Articles</Button>
            <Button variant="ghost" className={`hover:bg-white
             ${
              buttonData === "Popular-Articles" ? 'text-[#0065ff]' : 'text-black'
            } `} value="Popular-Articles" onClick={(e)=>handleButtonData(e)}>Popular Articles</Button>
            </div>
                    {renderContent(buttonData)} 
          </div>      
        </div>

      
      
        
       <div className='container w-56 text-center mx-auto p-2 mt-2 mb-6 border-2 border-[#0065ff] rounded-md'>
           <span className='my-6 text-[#0065ff] '>
           READ MORE ARTICLES
            </span>
        </div>
    </div>
  )
}

export default MoreFromCreditCards



