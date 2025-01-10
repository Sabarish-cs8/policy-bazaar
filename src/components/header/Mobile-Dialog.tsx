"use client"
import * as React from "react"
import Image from 'next/image'
import IconSignin from '@/icons/icon-sign-in' 
import Logo from '../../../public/logo.png'
import { Input } from "@/components/ui/input"
import IconMobileSignin from '@/icons/icon-mobile-signin'
import FlagIcon from '@/icons/icon-flag'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {  X } from "lucide-react"


type Props = {}

const MobileDialog  = (props: Props) => {

  return (
  
    <Drawer>
      <DrawerTrigger asChild>
    <Button variant="outline" className="border-blue-100 rounded-xl flex z-40 items-center gap-1 text-[#0065ff] hover:text-[#0065ff]">
      <IconSignin />
      <span className="font-semibold">SIGN IN</span>
    </Button>
    </DrawerTrigger>

  <DrawerContent className="shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] p-4 rounded-t-3xl bg-[#f7fcff]">
  <DrawerClose asChild>
     <Button variant="ghost" className="hover:bg-transparent absolute -top-9 right-4 z-40"><X className="text-white w-16 h-16 " size={48}/></Button>
    </DrawerClose>
  <div className="mx-auto w-full">  
    <DrawerHeader className="flex flex-col items-center gap-4">
    
      <Image src={Logo} alt="logo" />
    </DrawerHeader>
      <DrawerTitle className="text-center">
        <div className="flex items-center gap-2 text-xl">
          <IconMobileSignin />
          <span>To sign in,
          <span className=' text-[#253858] font-semibold'> please enter your mobile number</span>
          </span>

        </div>
      </DrawerTitle>

    <div className="grid gap-4 py-4">
      <div className="flex items-center gap-2 border rounded-md p-2">
        <FlagIcon />
        <span>+971</span>
        <Input
          placeholder="Enter your number"
          className="flex-1 border-none focus:outline-none"
        />
      </div>
      <Button type="submit" className="w-full bg-[#f9481e] text-white hover:bg-[#f9481e] hover:text-white active:bg-[#f9481e] focus:bg-[#f9481e]">
        Sign in with OTP
      </Button>
      <Button type="submit" className="w-full bg-[#f9481e] text-white hover:bg-[#f9481e] hover:text-white active:bg-[#f9481e] focus:bg-[#f9481e]">
       Admin login
      </Button>
    </div>

    <DrawerFooter>
      <div className="grid gap-2 py-4 text-[#253858]">
        <p className="text-sm">
          Once logged in, you will be able to perform the following important functions
        </p>
        <ul className="flex flex-row text-center items-center justify-center gap-1 text-sm">
          <li>• Download policy</li>
          <li>• Request changes</li>
          <li>• Raise concerns</li>
        </ul>
      </div>
    </DrawerFooter>
    </div>
  </DrawerContent>
  </Drawer>
  )
}

export default MobileDialog 

