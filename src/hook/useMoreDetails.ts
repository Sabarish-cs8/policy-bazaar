import { useState } from "react";

export default function useMoreDetails(initialState: boolean = false): [boolean, () => void]{
    const [showAll,setShowAll] = useState(initialState);

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    }
    return [
        showAll,
        toggleShowAll]

}