import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import useCardData from '@/hook/useCardData'
import { useGetAllUserInformation } from '@/hook/useGetAllUserInformation'
  

type Props = {}

const Dashboard = (props: Props) => {
    const{cards}=useCardData()
    const {users} =useGetAllUserInformation()
  return (
    <div className='space-y-2'>
        <h1 className='text-3xl text-[#253858]'>
        Dashboard
        </h1>

<div className=' flex gap-2'>

<Card>
  <CardHeader>
    <CardTitle>User</CardTitle>
  </CardHeader>
  <CardContent>
    <p>No of Users : {users.length}</p>
  </CardContent>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>No of Cards : {cards.length}</p>
  </CardContent>
</Card>

</div>
    </div>
  )
}

export default Dashboard