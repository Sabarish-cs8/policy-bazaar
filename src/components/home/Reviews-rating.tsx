import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HalfStarIcon, StarIcon } from "@/icons/start-icon"
import ContactPersonIcon from "@/icons/Contact-person-icon"


const ListItem =({
    icon,name,location,createdAt,HowmanyStar,reviewTitle,briefReview
}:{
    icon: React.JSX.Element;
     name:string; location:string; createdAt:string; HowmanyStar:number; reviewTitle:string; briefReview:string
}) => (
    <CarouselItem key={name} className="h-inherit md:basis-1/2 lg:basis-1/3 relative">
  {/* Icon: Positioned slightly above the card */}
  <div className=" w-[89px] h-[89px] rounded-full bg-[#fffaee] p-[12px] absolute top-[30px] left-1/2  -translate-x-1/2 z-10 flex justify-center">
  <div className="items-center flex justify-center ">
      {icon}
    </div>
  </div>
    <div className="flex justify-center mt-[60px]">
    
        <Card className="w-full h-[450px] pt-[80px] max-w-md relative z-0">
            <CardContent className="flex flex-col items-center p-4 gap-4">
            
        <div className="text-center font-semibold text-xl">{name}</div>
        <div className="text-center ">
          {location} , {createdAt}
        </div>
        <div className="text-center">
            {"⭐".repeat(HowmanyStar)}

        </div>
        <div className="text-left font-medium text-lg">{reviewTitle}</div>

<div className="text-sm mt-2 text-left">{briefReview}</div>
            </CardContent>

        </Card>

    </div>
    </CarouselItem> 
)

const ReviewsList : { icon: React.JSX.Element; name:string; location:string; createdAt:string; HowmanyStar:number; reviewTitle:string; briefReview:string}[] = [
    {
        icon:<ContactPersonIcon />,
        name:"Glyzelle Jean Bunalade",
        location:"Ajman",
        createdAt:"November 6, 2024",
        HowmanyStar:4,
        reviewTitle:"Hassle-free process",
        briefReview:"I applied online and the process was smooth. It is good to know that there is a website to help me find the best credit card in UAE.",
    },
    {
        icon:<ContactPersonIcon />,
        name:"Glyzelle Jean Bunalade",
        location:"Ajman",
        createdAt:"November 6, 2024",
        HowmanyStar:4,
        reviewTitle:"Hassle-free process",
        briefReview:"I applied online and the process was smooth. It is good to know that there is a website to help me find the best credit card in UAE.",
    },
    {
        icon:<ContactPersonIcon />,
        name:"Ajmal",
        location:"Dubai",
        createdAt:"November 6, 2024",
        HowmanyStar:5,
        reviewTitle:"Thanks PB for making credit card selection easy",
        briefReview:"With PB, i was able to find the best credit card. It covers me and helps in my expenses too. Its the best!!",
    },
    {
        icon:<ContactPersonIcon />,
        name:"Faith kwamboka",
        location:"Ajman",
        createdAt:"November 5, 2024",
        HowmanyStar:5,
        reviewTitle:"BEST CREDIT CARD!!",
        briefReview:"Everything is just a click away on their website. Policybazaars website was super easy to use. I found the BEST CREDIT CARD without any difficulty. The FAQs were detailed. My doubts got cleared.",
    },
    {
        icon:<ContactPersonIcon />,
        name:"russel",
        location:"Dubai",
        createdAt:"November 4, 2024",
        HowmanyStar:5,
        reviewTitle:"Managing my Travel spends",
        briefReview:"The benefits with this credit card are the best. From travel to everyday spends, i feel covered whereever i go! Thanks Policybazar for helping me select. Highly suggested!",
    },
    {
        icon:<ContactPersonIcon />,
        name:"Jennifer Abellana",
        location:"UAE",
        createdAt:"November 4, 2024",
        HowmanyStar:5,
        reviewTitle:"Found the perfect credit card",
        briefReview:"I was so confused since a long time for finding a credit card, then i finally did my research and landed to Policybazaar website. I checked out different options and read reviews too. I was convinced and now i feel confidentknowing i am making most of my spending and earning rewards too!",
    },
    {
        icon:<ContactPersonIcon />,
        name:"Muhammad ilyas",
        location:"Umm Al Quwain",
        createdAt:"November 1, 2024",
        HowmanyStar:5,
        reviewTitle:"Amazing Rewards Earned",
        briefReview:"Impressed to know that the RAK bank credit card has a rewards program. I have accumulated a lot of reward points for gift vouchers already!! You should get yours too.",
    }
]

type Props = {}

const ReviewsAndRating = (props: Props) => {
  return (
    <div className="bg-[#fffaee] mt-5 mb-5 pt-5 pb-5">
        <div className="text-[#052f5f] text-center text-base">
            <div className="bg-[#0065ff] pt-4 pb-4 pl-24 pr-24 mb-5 text-white inline-block"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 49%, 100% 100%, 0 100%, 5% 50%)' }}
            >
                Reviews & Ratings
            </div>
          <div className="mb-4">
            <div className="mb-[10px] text-center">
              <div className="flex items-center justify-center space-x-1">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <HalfStarIcon />
                <span className="ml-2 font-bold text-2xl">4.6 / 5</span>
              </div>
              <div className="text-[#253858cc] mt-[10px] text-sm">
                (based on 24,470 reviews)
              </div>
            </div>
          </div>
        </div>
        
        <div className="m-4">

        
        <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-7xl"
  >
    <CarouselContent>
        {ReviewsList.map((review)=>(
             

            <ListItem 
            key={review.name}
            icon={review.icon}
            name={review.name}
            location={review.location}
            createdAt={review.createdAt}
            HowmanyStar={review.HowmanyStar}
            reviewTitle={review.reviewTitle}
            briefReview={review.briefReview}
            /> 
          
            ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]" />
            <CarouselNext className="rounded-full items-center justify-center text-xl flex z-10 w-12 h-12 bg-white shadow-md  border-[#0065ff] border-[1px]"/>
            </Carousel>
            </div> 

            <div className='container w-56 text-center mx-auto p-2 mt-2 mb-6 border-2 border-[#0065ff] rounded-md'>
           <span className='my-6 text-[#0065ff] '>
           READ ALL REVIEWS
            </span>
           </div>
    </div>
  )
}

export default ReviewsAndRating

