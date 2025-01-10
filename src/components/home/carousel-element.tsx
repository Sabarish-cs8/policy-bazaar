'use client'
import * as React from "react"
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselItem = ({
    title,
}:{
    title:string;
}) =>(
    <div className="flex items-center gap-2 px-4 py-2 shrink-0">
    <span className="bg-black h-[7px] w-[7px] relative rotate-45 left-[2px]"></span>
    <li className=" text-sm text-black gap-4 flex px-[15px] whitespace-nowrap">{title}</li>
  </div>
)

const carouselElement: string[] = [
    
           " Cashback up to AED 2,000",
           "Rewards + Welcome Offers",
           "No Annual Fee",
           "Travel benefits",
           "Dining Discounts",
           "Entertainment Benefits",
        ]

type Props = {}

const CarouselElement = (props: Props) => {
    const carouselRef = React.useRef<HTMLUListElement>(null);

    const scrollLeft = () => {
        if(carouselRef.current){
            carouselRef.current.scrollBy({
                left:-200,
                behavior:'smooth',
            })
        }
    }
    const scrollRight = () =>{
        if(carouselRef.current){
            carouselRef.current.scrollBy({
                left:200,
                behavior:'smooth',
            })
        }
    }
  return (
    <div className="rounded-[6px] my-[20px] mt-[20px] mb-[10px]">

   <div className="flex items-center max-w-7xl mx-auto overflow-hidden py-[23px] bg-white rounded-[6px] shadow-[0_0_25px_0_rgba(19,20,20,0.1)] relative">
    
        <Button variant="ghost" className="shrink-0 absolute bg-white left-0 z-10"
        onClick={scrollLeft}>
            <ArrowLeft />
        </Button>
        <ul 
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth whitespace-nowrap px-10">
        {carouselElement.map((title ,index) => (
            
            <CarouselItem key={index} title={title} />
        ))}
        </ul>
        <Button variant="ghost" className="shrink-0 right-0 bg-white absolute" onClick={scrollRight}>
        <ArrowRight />
        </Button>
        
   </div>
    </div>
  )
}

export default CarouselElement
