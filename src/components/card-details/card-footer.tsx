import { CardDetails } from '@/utils/cardUtils'
import React from 'react'
import ViewDetails from './view-details'
import AddToCompare from './Add-to-compare'
import Shortlist from './shortlist'

type CardItemProps = {
  card: CardDetails
}

const CardFooter = ({card}: CardItemProps) => {
  return (
    <div className='flex w-full bg-[#f0f6ff] text-[#0065ff] items-center justify-end space-x-10 py-2 px-5'>
    <ViewDetails />
    <AddToCompare />
    <Shortlist />
    </div>
  )
}

export default CardFooter