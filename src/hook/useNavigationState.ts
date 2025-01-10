import { useEffect, useState } from "react";

export const useNavigationState = (initialState:boolean) => {
    const [showComponent, setShowComponent] = useState(initialState);

    useEffect(()=>{
        const handlePopState =() =>{
            setShowComponent(true);
        }

        window.addEventListener('popstate',handlePopState);

        return () => {
            window.removeEventListener('popstate',handlePopState);
        };
    },[])

    const toggleComponent = (state:boolean) => {
        setShowComponent(state);
    }

    return { 
        showComponent, 
        toggleComponent 
    };
}