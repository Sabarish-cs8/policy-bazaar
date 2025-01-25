'use client';
import React, { useEffect } from 'react'
import BreadCrumbs from '@/components/header/Bread-crumbs'
import CarouselElement from '@/components/home/carousel-element'
import { Separator } from '@/components/ui/separator'
import NoAnnualFeeCreditCardImage from '@/components/home/no-annual-fee-credit-card'
import TripOfferImage from '@/components/home/trip-offer'
import WelcomeBonusImage from '@/components/home/welcome-bonus'
import ReviewsAndRating from '@/components/home/Reviews-rating'
import MoreFromCreditCards from '@/components/home/More-From-Credit-Cards'
import SmilingManPc from '@/components/home/smiling-man-pc'
import { useUserInformation } from '@/hook/home';
import BusinessCards from '@/components/home/BusinessCards';
import EligibilityCriteria from '@/components/home/Eligibility-Criteria';
import FooterPage from '../footer/page';


type Props = {
  handleNextStep:()=>void
  handleFieldChange:(name:string,value:string)=>void;
  userDetails:{city:string};
}

const HomePage = ({handleNextStep,handleFieldChange,userDetails}: Props) => {
  const {dynamicSelection,handleDynamicSelection,handleButtonClick,
    error} = useUserInformation()
  console.log("props",dynamicSelection)

  useEffect(() => {
    console.log("dynamicSelection:", dynamicSelection);
  }, [dynamicSelection]);
  
  return (

      <>
  
    <div className='w-full mx-auto p-5 text-[#253858] '>
    <div className='max-w-7xl mx-auto px-2 sm:px-2 lg:px-6 py-3'>

    

  <div className='text-[#253858] font-semibold  text-xl lg:text-3xl  mt-10' >
    <h1>Business Credit Cards in UAE & Dubai</h1>
  </div>

  <SmilingManPc   handleDynamicSelection={handleDynamicSelection}
   handleButtonClick={handleButtonClick} error={error} handleFieldChange={handleFieldChange} userDetails={userDetails}
   handleNextStep={handleNextStep}
  />

  <CarouselElement />
  <BreadCrumbs />

  <Separator />
   <div className='float-none text-[16px] font-normal leading-[25px] pb-[15px] text-[#253858] text-inherit'>
     <p className='mt-16 gap-2'>Corporate credit cards, while operating like regular credit cards, are meant for business expenses. With a business credit card, companies can manage their finances better and pay for things that they need — supplies, travel expenses, and more — without using cash right away. These cards also offer benefits like rewards or discounts on business-related purchases. </p>
     
      <p className='mt-4'>To seamlessly manage expenses and track company spending, you can consider getting a business credit card in the UAE.</p> 
      
      <NoAnnualFeeCreditCardImage />
      <div className='container mx-auto p-6'>
        <div className='text-center my-6'>
          <h1 className='text-3xl font-bold'>
          Key Features and Benefits of Top Corporate Credit Card
          </h1>
        </div>

        <div className='text-left my-4'>
          <span>
          Refer to the table below to learn more about the top business credit cards in the UAE —
          </span>
        </div>

      </div>

      <BusinessCards start={0} end={2}/>

    <TripOfferImage />

    <BusinessCards start={2} end={5}/>
    <EligibilityCriteria />
    <WelcomeBonusImage />


    <div className="container mx-auto p-6">
      {/* Heading */}
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold ">
          Documents Required to Apply for Business Credit Cards in the UAE
        </h1>
      </div>

      {/* Description */}
      <p className=" text-center mb-4">
        Enlisted below is the set of documents required to apply for a corporate credit card in the UAE:
      </p>

      {/* Document List */}
      <ul className="list-disc pl-6 space-y-2 ">
        <li>Emirates ID and/or Passports of the concerned signatories</li>
        <li>Residence visa (applicable to expats)</li>
        <li>Trade Licence</li>
        <li>Address proof</li>
        <li>Certificate of Commercial Registration</li>
        <li>Memorandum of Association</li>
        <li>Power of Attorney (if applicable)</li>
        <li>Company Profile and Bank Reference Letter (if applicable)</li>
      </ul>

      {/* Note */}
      <p className="mt-4 ">All the documents, whether original or copies, must be valid.</p>
      <p className="mt-4 ">
        
        Note: The above list contains the common documents. Your respective bank may ask for additional documents.
      </p>
    </div>
</div>
    
    <div className='container text-center mx-auto p-6 mt-4 mb-[10px] border-4 border-[#dadce0] rounded-md'>
      <span className='my-6 text-[#0065ff] hover:underline '>
      Apply for Best Credit Cards for SMEs in UAE
      </span>
    </div>

    <div className='container mx-auto p-6'>
        <div className='text-center my-6'>
          <h1 className='text-3xl font-bold'>
          How to Apply for Business Credit Cards via Policybazaar UAE?
          </h1>
        </div>

        <div className='text-left my-4 space-y-4'>
         <p>
           Policybazaar UAE helps you easily apply for UAE credit cards online. We offer you a wide range of cards — you can easily compare the options and get the most suitable card for yourself.
         </p>
         <p>
           All you need to do is visit the credit card quotes page and select your desired card.
         </p>
       </div>

       <ReviewsAndRating />
       <MoreFromCreditCards />
      </div>
      </div>
</div>

<FooterPage />
</>
  )
}

export default HomePage