'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/logo.png'
import BankingProducts from '@/components/header/bank-products'
import Support from '@/components/header/support'
import TalkToExpert from '@/components/header/talk-to-expert'
import SignIn from '@/components/header/sign-in'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/hook/header'
import Sidebar from './side-bar'

type Props = {}

const HeaderPage = (props: Props) => {
    const {isOpen, openSidebar, closeSidebar} = useSidebar();
  return (
    
    <header className="w-full left-0 bg-white z-40 fixed h-14">
  <div className='max-w-7xl max-h-fit mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center'>
    <div className='md:hidden flex'>
        <Button variant="ghost" className="text-2xl hover:bg-white z-40" onClick={isOpen ? closeSidebar : openSidebar}>
        <span>{isOpen ? '✖' : '☰'}</span>
        </Button>
    </div>

    <div className=' flex z-40'>
    <Image src={Logo} alt='logo' width={150} height={90}/>
    </div>

    <nav className=' flex items-center space-x-1 md:space-x-2 lg:space-x-6'>
        <ul>
            <li className='cursor-pointer hidden md:block lg:'>
                <BankingProducts />
            </li>
        </ul>
        <ul>
            <li className='cursor-pointer hidden md:block lg:'>
                <Support />
            </li>
        </ul>
            <TalkToExpert />
            <SignIn />
    </nav>
  </div>

  <Sidebar isOpen={isOpen} onClose={closeSidebar} />
  </header>

  )
}

export default HeaderPage