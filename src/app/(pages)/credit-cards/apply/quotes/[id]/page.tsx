'use client'
import CardHeaderPage from '@/app/(pages)/header/CardHeaderPage'
import CardList from '@/app/cards/page'
import AddCardForm from '@/components/card-details/AddCardForm'
import { MailAlert } from '@/components/card-details/mail-alert'
import SubHeader from '@/components/sub-header/page'

import React from 'react'

type Props = {}

const CustomerPage = (props: Props) => {
  

  return (
    <>
    
    <MailAlert />
    <div className='max-w-7xl max-h-fit mx-auto p-5'>
      <CardHeaderPage />
        {/* <div className='flex flex-col mx-auto scroll-smooth mt-10 border-[#e3eaf9]'>
            <div className='flex-1 w-full py-6'>
              <SubHeader/>
            </div>
            <div className='flex flex-row'>
            <div className='md:w-full lg:w-[952px] 
            md:px-[15px]
            lg:pr-[23px] 
            space-y-[24px]'>
                <CardList />
            </div>
            <div className='hidden md:hidden lg:block w-[328px]'>
            <AddCardForm />
            </div>
            </div>
        </div> */}
    </div>
    
    </>
  )
}

export default CustomerPage