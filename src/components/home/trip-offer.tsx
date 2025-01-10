import Image from 'next/image'
import React from 'react'
import TripOfferImageSmallScreen from '../../../public/trip-offer-350x300-mobile.jpeg'
import TripOfferImageLargeScreen from '../../../public/trip-offer-full-width.png'


type Props = {}

const TripOfferImage = (props: Props) => {
  return (
    <div className='relative'>
        <Image src={TripOfferImageLargeScreen} alt='No-Annual-Fee-Image-Desktop' className='mt-16 rounded-md  hidden md:block w-full' />

        <Image src={TripOfferImageSmallScreen} alt='No-Annual-Fee-Image-Mobile' className='mt-4 rounded-md block md:hidden w-[60%] h-[350px] ml-0 mx-auto md:w-full'/>

    </div>
  )
}

export default TripOfferImage