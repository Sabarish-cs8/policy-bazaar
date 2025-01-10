import Image from 'next/image'
import React from 'react'
import NoAnnualFeeImageSmallScreen from '../../../public/no-annual-fee-credit-card-mobile.png'
import NoAnnualFeeImageLargeScreen from '../../../public/no-annual-fee-credit-card-740x180-desktop.png'


type Props = {}

const NoAnnualFeeCreditCardImage = (props: Props) => {
  return (
    <div className='relative'>
        <Image src={NoAnnualFeeImageLargeScreen} alt='No-Annual-Fee-Image-Desktop' className='mt-16 rounded-md  hidden md:block w-full' />

        <Image src={NoAnnualFeeImageSmallScreen} alt='No-Annual-Fee-Image-Mobile' className='mt-4 rounded-md block md:hidden w-[60%] h-[350px] ml-0 mx-auto md:w-full'/>

    </div>
  )
}

export default NoAnnualFeeCreditCardImage