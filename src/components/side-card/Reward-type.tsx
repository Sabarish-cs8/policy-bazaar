import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { Checkbox } from "../ui/checkbox"
import { CardDetails } from "@/utils/cardUtils"
import useCardData from "@/hook/useCardData"

type Props = {
  selectedFeature: string[]; 
  toggleFeature: (feature: string) => void; 
  handleResetAll: () => void;
}

const RewardTypeFilter = ({toggleFeature,selectedFeature ,handleResetAll}:Props) => {
  const {cards}=useCardData()
  const allFeatures = [...new Set(cards.flatMap((card)=>card.features))]
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Rewards type filter
          <Button variant='ghost' className="text-[#0065ff] hover:bg-white hover:text-[#0065ff]" onClick={handleResetAll}>Clear All</Button>
          </CardTitle>
      <Separator orientation="horizontal"/>
      </CardHeader>
      <CardContent>
      <div className='grid gap-3 w-full px-4'>
                {allFeatures.slice(0,5).map((feature) => (
                    <div
                      key={feature}
                      className="flex w-full h-[25px] px-4 items-center text-[#253858] gap-5 justify-between"
                      onClick={()=>toggleFeature(feature)}
                      >
                      {feature}
                      <Checkbox checked={selectedFeature?.includes(feature)}/>
                    </div>
                  ))}
                      </div>
      </CardContent>
    </Card>
  )
}

export default RewardTypeFilter