import { useEffect, useRef, useState } from "react"

export const usePositionFixed = (offset : number = 0) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isFixed,setIsFixed] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(!ref.current) return
        
             const { top } = ref.current.getBoundingClientRect();
            setIsFixed(top <= offset)
        };
        
        window.addEventListener('scroll',handleScroll);

        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[offset]);

    return {ref,isFixed}
}