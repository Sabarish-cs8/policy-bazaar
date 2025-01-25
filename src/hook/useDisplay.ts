import { useState } from "react"
import useCardData from "./useCardData";

export const useDisplayCards = () =>{
    const {cards} = useCardData();
    const[searchQuery,setSearchQuery] = useState('');
   
    const [activeFilter,setActiveFilter]=useState<string | null>('features')
    const [activeViewDetails,setActiveViewDetails]=useState<string | null>('Features & Benefits')


    const handleactiveViewDetails =(filter:string)=>{
        setActiveViewDetails((prev)=>(prev === filter ? null : filter));
    }

    const handleFilterClick =(filter:string)=>{
        setActiveFilter((prev)=>(prev === filter ? null : filter));
    }

    const searchFilter = (array) => {
        return array.filter((el)=>{
            const commonName = el?.name?.common || "";
            return commonName.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }
    const filtered =searchFilter(cards)
    // console.log("filtered cards from search",filtered)
    const handleChange = (e) =>{
        setSearchQuery(e.target.value)
        console.log("Search value from useDisplayCard hook",e.target.value)
       
    }

    return {
        handleChange,
        filtered,
        handleFilterClick,
        activeFilter,
        activeViewDetails,
        handleactiveViewDetails,
    }
}