

import Image from 'next/image'
import Logo from '../../../icons/logo.svg'
import TalkToExpert from '@/components/header/talk-to-expert'
import React from 'react'
import EditInfo from '@/icons/Edit-info'

type Props = {}

const CardHeaderPage = (props: Props) => {
  return (
    <header className="w-full left-0 bg-white z-50 fixed top-0"
    style={{ boxShadow: '0 6px 7px 0 hsla(0, 0%, 77%, 0.16)' }}
    >
    <div className='max-w-7xl max-h-fit mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center'>
  
      <div className=' flex z-20'>
      <Image src={Logo} alt='logo' width={150} height={90} className='hidden md:hidden lg:block'/>
      <span className='text-[#000] block md:block lg:hidden  font-bold'>Credit Card Plan</span>
      </div>
              <div className='flex gap-4 items-center'>
                <div className='flex gap-2 items-center block md:block lg:hidden'>
                    <EditInfo />
                <span className='text-[#062e5e] text-sm font-bold'>Edit Info</span>
                </div>
                <div className="h-8 border-l-2 border-gray-300  block md:block lg:hidden" />
              <TalkToExpert />
              </div>
    </div>
    </header>
  )
}

export default CardHeaderPage