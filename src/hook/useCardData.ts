import { CardDetails } from "@/utils/cardUtils";
import { useEffect, useState } from "react";

export default function useCardData(){
    const [cards,setCards]= useState<CardDetails[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchCards = async() =>{
            try {
                const response = await fetch('/api/card-details');
                const data =await response.json();
                setCards(data);
                setLoading(false);                
            } catch (error) {
                console.error('Failed to fetch cards:',error);
                setLoading(false);
            }
        }
        fetchCards();
    },[])
    return {cards,loading}
}