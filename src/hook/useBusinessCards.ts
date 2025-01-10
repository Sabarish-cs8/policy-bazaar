
import { BusinessCard } from "@/types/BusinessCard"
import { useEffect, useState } from "react"

export const useBusinessCards =() =>{
    const [businessCards,setBusinessCards] = useState<BusinessCard[]>([]);
    const [loading,setLoading]=useState<boolean>(true);
    const[error,setError]=useState<string | null>(null);

    useEffect(()=>{
        const fetchBusinessCards = async () => {
            try {
                const response = await fetch('/api/business-cards');
                if(!response.ok){
                    throw new Error ('Failed to fetch business Cards');
                }
                const data:BusinessCard[] = await response.json()

                const uniqueCards = data.reduce<BusinessCard[]>((acc,card)=>{
                    const existing = acc.find((item) => item.name === card.name);
                    if (!existing || (existing && card.features.length > existing.features.length)) {
                        return [...acc.filter((item) => item.name !== card.name), card];
                      }
                      return acc;
                },[])
                setBusinessCards(uniqueCards);
            } catch (err:any) {
               setError(err.message); 
            }finally{
                setLoading(false);
            }
        }
        fetchBusinessCards();
    },[]);
    return {
        businessCards,
        loading,
        error
    }
}