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

const HeaderPage = () => {
    const {isOpen, openSidebar, closeSidebar} = useSidebar();
  return (
    
    <header className="w-full left-0 bg-white z-40 fixed h-14">
  <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-6 py-3 flex lg:justify-between items-center'>
    <div className='lg:hidden flex'>
        <Button variant="ghost" className="text-2xl hover:bg-white z-40" onClick={isOpen ? closeSidebar : openSidebar}>
        <span>{isOpen ? '✖' : '☰'}</span>
        </Button>
    </div>

    <div className=' flex z-40'>
    <Image src={Logo} alt='logo' width={130} height={90}/>
    </div>

    <nav className=' flex flex-1 justify-end items-center space-x-1 md:space-x-2 lg:space-x-6'>
        <ul className='hidden lg:flex space-x-2 lg:space-x-4'>
            <li className='cursor-pointer '>
                <BankingProducts />
            </li>
            <li className='cursor-pointer'>
                <Support />
            </li>
        </ul>
        <div className="flex items-center space-x-4">
            <TalkToExpert />
            <SignIn />
        </div>
    </nav>
  </div>

  <Sidebar isOpen={isOpen} onClose={closeSidebar} />
  </header>

  )
}

export default HeaderPage