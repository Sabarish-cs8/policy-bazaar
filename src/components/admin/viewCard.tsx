import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import useCardData from '@/hook/useCardData'
import Image from 'next/image'
  

type Props = {}

const ViewCard = (props: Props) => {
    const{cards}=useCardData()
  return (
    <div className='space-y-2'>
        <h1 className='text-3xl text-[#253858]'>
        View Card
        </h1>
        
        <Table>
          <TableCaption>A list of your cards.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Icon</TableHead>
              <TableHead>Bank Name</TableHead>
              <TableHead>Card Name</TableHead>
              <TableHead className="text-right">Monthly Income</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cards.map((card)=>(
                <TableRow key={card.id}>
              <TableCell className="font-medium">
              <div className="flex bg-white p-3 border rounded-sm">
                 <Image src={card.icon} alt={`${card.cardName}`} width={97}
                    height={60}/>
                    </div>
              </TableCell>
              <TableCell>{card.bankName}</TableCell>
              <TableCell>{card.cardName}</TableCell>
              <TableCell className="text-right">{card.monthlyIncome}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>        
        </div>
  )
}

export default ViewCard