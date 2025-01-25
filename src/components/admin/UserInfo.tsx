import { useGetAllUserInformation } from '@/hook/useGetAllUserInformation'
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
  import Image from 'next/image'

type Props = {}

const UserInfo = (props: Props) => {
    const {users} =useGetAllUserInformation()
  return (
    <div className='space-y-2'>
    <h1 className='text-3xl text-[#253858]'>
    User Info
    </h1>

     <Table>
              <TableCaption>A list of your Users.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Mail Id</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead className="text-right">Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user)=>(
                    <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell className="text-right">{user.city}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>        

    </div>
  )
}

export default UserInfo