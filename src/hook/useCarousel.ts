import * as React from "react"

export const useCarouselScrollbar =() => {
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
    return{
        scrollLeft,
        scrollRight,
        carouselRef
    }
}