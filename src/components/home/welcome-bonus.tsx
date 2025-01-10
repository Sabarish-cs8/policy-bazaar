import Image from 'next/image'
import React from 'react'
import WelcomeBonusImageSmallScreen from '../../../public/welcome-bonus-350x300-mobile.jpeg'
import WelcomeBonusImageLargeScreen from '../../../public/welcome-bonus-full-width.png'


type Props = {}

const WelcomeBonusImage = (props: Props) => {
  return (
    <div className='relative'>
        <Image src={WelcomeBonusImageLargeScreen} alt='No-Annual-Fee-Image-Desktop' className='mt-16 rounded-md  hidden md:block w-full' />

        <Image src={WelcomeBonusImageSmallScreen} alt='No-Annual-Fee-Image-Mobile' className='mt-4 rounded-md block md:hidden w-[60%] h-[350px] ml-0 mx-auto md:w-full'/>

    </div>
  )
}

export default WelcomeBonusImage