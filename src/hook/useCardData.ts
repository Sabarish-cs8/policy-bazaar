import { CardDetails, PlanTypeEnum } from "@/utils/cardUtils";
import { useEffect, useState } from "react";

export default function useCardData(){
    const [cards,setCards]= useState<CardDetails[]>([]);
    const [loading,setLoading] = useState(true);
    const [filteredCards,setFilteredCards]=useState<CardDetails[]>([]);
    const [selectedBank,setSelectedBank]=useState<string[]>([]);
    const [selectedFeature,setSelectedFeature]=useState<string[]>([]);
    const [selectedPlanType, setSelectedPlanType] = useState<PlanTypeEnum[]>([]);
    const [selectedReward, setSelectedReward] = useState<string[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCardId, setSelectedCardId] = useState<number[]>([]);
    const [step, setStep] = useState<number>(1); 
    const [activeTag, setActiveTag] = useState('cards')
    const[searchQuery,setSearchQuery] = useState('');
 
    
    //   useEffect(() => {
    //     console.log("Filtered Cards Updated:", filteredCards);
    // }, [filteredCards]);


    // useEffect(()=>{
    //     const fetchedCards:CardDetails[] = []
    //     setCards(fetchedCards)
    //     setFilteredCards(fetchedCards)
    // },[])
  
    useEffect(()=>{
        const fetchCards = async() =>{
            try {
                const response = await fetch('/api/card-details');
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status}`);
                  }
                const data =await response.json();

                if(Array.isArray(data)){

                    setCards(data);
                    // setFilteredCards(data);
                }else{
                    console.error("API Error:", data.error || "Unexpected response")
                    setCards([]); 
                    // setFilteredCards([]);
                }             
            } catch (error) {
                console.error('Failed to fetch cards:',error);
                setLoading(false);
            }
            finally {
                setLoading(false);
            }
        }
        fetchCards();
    },[])


    const handleNextStep = () =>{

        if(step >= 2){
            return;
        }
        setStep((prev)=>
            {
                const newStep = prev + 1;
                console.log("newStep from handle NextStep",newStep )
                if(step === 2) {
                    setActiveTag('filteredCards')
                }
                return newStep;
            })
        console.log("step added",step)
        console.log("activeTag",activeTag)
      }

    //   const handlePreviousStep = () => {
    //     setStep((prev) =>{

    //        const newStep = prev > 1 ? prev - 1 : prev
    //     if(newStep === 1){
    //         setActiveTag('cards')
    //     }
    //     return newStep;
    //   });
    //   console.log("step decreased", step);
    //   console.log("activeTag", activeTag);
    //   };

      useEffect(() => {
        console.log("Updated step:", step);
        console.log("Updated activeTag:", activeTag);
      }, [step, activeTag]);


    //filter Logic
    useEffect(()=>{
       
            const filtered = cards.filter((card)=>{
                const searchMatch = searchQuery.length > 0 
                ? card.bankName.toLowerCase().includes(searchQuery.toLowerCase()) || card.bankName.toLowerCase().includes(searchQuery.toLowerCase()) : true
                const bankMatch = selectedBank.length > 0 ? selectedBank.includes(card.bankName) : true;
                const featureMatch = selectedFeature.length > 0 ? selectedFeature.some((feature)=> card.features.includes(feature)) : true;
                const planTypeMatch = selectedPlanType.length > 0  ? selectedPlanType.some((planType) => card.planType.includes(planType)) : true;
                const rewardMatch = selectedReward.length > 0  ? selectedReward.some((reward) => card.rewards.includes(reward)) : true;
                
                return bankMatch && featureMatch && planTypeMatch && rewardMatch && searchMatch;
            });
            console.log("filter from useCardData",filtered)
            setFilteredCards(filtered);
            // setActiveTag('filteredCards')
            // setCards(filtered)
    },[selectedBank,selectedFeature,selectedPlanType,selectedReward,cards,searchQuery]);   

    // useEffect(() => { console.log("card from useEffect",cards) }, [cards])
    // useEffect(() => {
    //     const fetchCards = async () => {
    //         try {
    //             const queryParams = new URLSearchParams();
    
    //             if (selectedBank.length > 0) queryParams.append("bank", selectedBank.join(","));
    //             if (selectedFeature.length > 0) queryParams.append("features", selectedFeature.join(","));
    //             if (selectedPlanType.length > 0) queryParams.append("planType", selectedPlanType.join(","));
    //             if (selectedReward.length > 0) queryParams.append("rewardType", selectedReward.join(","));
    
    //             const url = `/api/card-details?${queryParams.toString()}`;
    //             console.log("Request URL:", url);  // Log the final URL with query params
    //             const response = await fetch(url);
    
    //             if (!response.ok) {
    //                 throw new Error(`API Error: ${response.status}`);
    //             }
    
    //             const data = await response.json();
    //             if (Array.isArray(data)) {
    //                 console.log("data from server:", data);
    //                 setCards(data);
    //                 setFilteredCards(data);
    //             } else {
    //                 console.error("API Error:", data.error || "Unexpected response");
    //                 setCards([]);
    //                 setFilteredCards([]);
    //             }
    //         } catch (error) {
    //             console.error("Failed to fetch cards:", error);
    //             setLoading(false);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    
    //     fetchCards();
    // }, [selectedBank, selectedFeature, selectedPlanType, selectedReward]);
    
    
    //togglefeature


    // const applyFilters = () => {
    //     let filtered = cards;
    
    //     // Filter by selected features
    //     if (selectedFeature.length > 0) {
    //       filtered = filtered.filter((card) =>
    //         card.features.some((feature) => selectedFeature.includes(feature))
    //       );
    //     }
    
    //     // Filter by selected banks
    //     if (selectedBank.length > 0) {
    //       filtered = filtered.filter((card) =>
    //         card.bankName.split(",").some((bank) => selectedBank.includes(bank))
    //       );
    //     }
    
    //     // Filter by selected plan types
    //     if (selectedPlanType.length > 0) {
    //       filtered = filtered.filter((card) =>
    //         selectedPlanType.includes(card.planType)
    //       );
    //     }
    
    //     // Filter by selected rewards
    //     if (selectedReward.length > 0) {
    //       filtered = filtered.filter((card) =>
    //         card.rewards.some((reward) => selectedReward.includes(reward))
    //       );
    //     }
    
    //     setFilteredCards(filtered); // Update the filtered cards
    //   };

    const toggleFeature = (feature:string)=>{
        setSelectedFeature((prevFeatures)=> 
            prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures,feature]
    );
};

const toggleBank = (bank:string)=>{
    setSelectedBank((prevBank)=>
        prevBank.includes(bank)
        ? prevBank.filter((f)=> f !== bank)
        :[...prevBank,bank]
    )
}

const togglePlanType = (plan:PlanTypeEnum)=>{
    setSelectedPlanType((prevPlan)=>
    prevPlan.includes(plan)
    ? prevPlan.filter((f)=>f !== plan)
    : [...prevPlan,plan]
    )
}

const toggleReward = (reward:string)=>{
    setSelectedReward((prevReward)=>
    prevReward.includes(reward)
? prevReward.filter((f) => f !== reward)
: [...prevReward,reward]
)
}
const handleChange = (e) =>{
    setSearchQuery(e.target.value)   
}


//handle saveChange fromvFeature

const handleSaveChanges = () => {
    
    setIsDialogOpen(false);
}

const handleResetAll = () => {
    setSelectedFeature([]);
    setSelectedBank([]);
    setSelectedReward([]);
    setSelectedPlanType([]);
    setFilteredCards(cards)
    // handlePreviousStep()
    // setActiveTag('cards')
}
    
const handleShortlist= (id:number) =>{
    console.log("card id",id)
    setSelectedCardId((prevIds)=>{
        const isAlreadyShortlisted = prevIds.includes(id);
        const updatedIds =isAlreadyShortlisted
        ? prevIds.filter((cardId) => cardId !== id) 
        : [...prevIds, id];
        const shortlistedCards = cards.filter((card) => updatedIds.includes(card.id));
        console.log("Shortlisted Cards:", shortlistedCards);
      return updatedIds;
    })
}
useEffect(() => {
    if (selectedCardId.length > 0) {
        console.log(`Shortlisted Cards: ${selectedCardId.join(",")}`);
    }
  }, [selectedCardId]);


//dialog open close 
const openDialog = () => setIsDialogOpen(true);

const closeDialog = () => setIsDialogOpen(false);



    return {
        cards,
        loading,
        filteredCards,
        setSelectedBank,
        setSelectedFeature,
        selectedFeature,
        toggleFeature,
        setSelectedPlanType,
        setSelectedReward,
        openDialog,
        setIsDialogOpen,
        closeDialog,
        isDialogOpen,
        handleSaveChanges,
        toggleBank,
        selectedBank,
        selectedPlanType,
        togglePlanType,
        selectedReward,
        toggleReward,
        handleResetAll,
        handleShortlist,
        selectedCardId,
        step,
        activeTag,
        setFilteredCards,
        handleChange,
        setActiveTag,
        handleNextStep,
        // applyFilters,
}
}