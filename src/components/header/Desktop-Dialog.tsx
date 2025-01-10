import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import IconSignin from '@/icons/icon-sign-in' 
import Logo from '../../../public/logo.png'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import IconMobileSignin from '@/icons/icon-mobile-signin'
import FlagIcon from '@/icons/icon-flag'
import Link from 'next/link'


type Props = {}

const DesktopDialog = (props: Props) => {

  return (
  
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="border-blue-100 rounded-xl flex z-40 items-center gap-1 text-[#0065ff]">
      <IconSignin />
      <span className="font-semibold">SIGN IN</span>
    </Button>
  </DialogTrigger>

  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader className="flex flex-col items-center gap-4">
      <Image src={Logo} alt="logo" />
      <DialogTitle className="text-center">
        <div className="flex items-center gap-2 text-xl">
          <IconMobileSignin />
          <span>To sign in,
          <span className=' text-[#253858] font-semibold'> please enter your mobile number</span>
          </span>

        </div>
      </DialogTitle>
    </DialogHeader>

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
      <Link href={'/admin/admin-login'}>
      <Button type="submit" className="w-full bg-[#f9481e] text-white hover:bg-[#f9481e] hover:text-white active:bg-[#f9481e] focus:bg-[#f9481e]">
        Admin Login
      </Button>
      </Link>
    </div>

    <DialogFooter>
      <div className="grid gap-2 py-4 text-center text-[#253858]">
        <p className="text-sm text-gray-600">
          Once logged in, you will be able to perform the following important functions
        </p>
        <ul className="flex flex-row gap-1 text-sm">
          <li>• Download policy</li>
          <li>• Request changes</li>
          <li>• Raise concerns</li>
        </ul>
      </div>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default DesktopDialog


