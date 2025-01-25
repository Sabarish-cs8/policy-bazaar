'use client'
import React from 'react'
import { Shortlist } from './shortlist'
import { Advantage } from './advantage'
// import { CardDetails } from '@/utils/cardUtils'
import RewardTypeFilter from './Reward-type'
import { usePositionFixed } from '@/hook/usePositionFixied'
// import useCardData from '@/hook/useCardData'

type Props = {
  selectedCardId: number[]
  selectedFeature: string[]; 
  toggleFeature: (feature: string) => void; 
  handleResetAll: () => void;
}

const SideCardPage = ({selectedCardId,selectedFeature,toggleFeature,handleResetAll}: Props) => {
  const {ref:advantageRef,isFixed} = usePositionFixed(10)
 
  return (
    <>
    <div className='space-y-3 mt-28'>
        <RewardTypeFilter  selectedFeature={selectedFeature}
           toggleFeature={toggleFeature}
           handleResetAll={handleResetAll}/>
        <Shortlist selectedCardId={selectedCardId}/>
        <div ref={advantageRef}></div>
        <aside className={`${isFixed ? "self-start fixed top-28 transition-all duration-200 ease-in-out" :'relative'}`}>
        <Advantage />
        </aside>
    </div>
    </>
  )
}

export default SideCardPage