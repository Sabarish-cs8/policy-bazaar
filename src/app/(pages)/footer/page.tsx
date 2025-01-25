
import Image from 'next/image'
import React from 'react'
import CreditCardIcon from "@/icons/credit-card-icon.svg"
import CreditScoreIcon from '@/icons/credit-score-footer-icon.svg'
import FacebookIcon from "@/icons/facebook..svg"
import TwitterIcon from "@/icons/twitter..svg"
import LinkedInIcon from "@/icons/linkdinn..svg"
import InstagramIcon from "@/icons/instagram-icon.svg"
import YoutubeIcon from "@/icons/youtube..svg"
import PolicyBazaarIcon from "@/icons/policybazar_meib.svg"
import VisaCard from "@/icons/visa.png"
import MasterCard from "@/icons/master-card.png"

// type Props = {}

const FooterPage = () => {
  return (
      <footer className='w-full bg-[#000]'>   
      <div className='flex flex-col border-t-[20px] border-t-[#4c9aff] py-[50px]'>
            <div className='text-white flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-0'>
              <div className='flex-1'>
              <h1 className='text-start items-start justify-start text-2xl mb-4'>
                Compare Our Products
              </h1>
              <div className=' flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <Image src={CreditCardIcon} alt="Credit-Card " />
                  <span>Credit Card</span>
                </div>
                <div className='flex items-center gap-4'>
                <Image src={CreditScoreIcon} alt="Credit-Score " />
                  <span>Credit Score</span>
                </div>
              </div>
              </div>
              </div>

              <div className='bg-[#202020] text-white py-6'>
              <div className='flex flex-col lg:flex-row lg:justify-between  lg:items-center max-w-7xl mx-auto  px-4 sm:px-6 lg:px-7 space-y-6 lg:space-y-0'>
                <ul className='flex flex-wrap gap-4 text-sm justify-center lg:justify-start'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Articles</li>
                  <li>Insurance Companies</li>
                  <li>Legal & Admin Policies</li>
                  <li>Sitemap</li>
                  <li>Reviews</li>
                  <li>Podcast</li>
                </ul>
              </div>
              <div className='flex items-center gap-4 justify-center'>
                <span>Follow Us :</span>

                <div className='flex gap-4'>

                <Image src={FacebookIcon} alt="FacebookIcon" className='w-6 h-6 transition-colors duration-300 hover:opacity-80'/>
                <Image src={TwitterIcon} alt='TwitterIcon' 
                className='w-6 h-6 transition-colors duration-300 hover:opacity-80'/>
                <Image src={LinkedInIcon} alt='LinkedInIcon' 
                className='w-6 h-6 transition-colors duration-300 hover:opacity-80'/>
                <Image src={YoutubeIcon} alt='YoutubeIcon' 
                className='w-6 h-6 transition-colors duration-300 hover:opacity-80'/>
                <Image src={InstagramIcon} alt='InstagramIcon'
                className='w-6 h-6 transition-colors duration-300 hover:opacity-80' />
                </div>
              </div>
            </div>
            </div>



            <div className='flex flex-col  
            lg:flex-row 
            lg:justify-center 
            lg:items-center 
            max-w-7xl
            mx-auto
            px-4 sm:px-6 lg:px-8 py-6'>
              <div className='flex flex-col lg:text-left mt-5 md:mt-0  md:items-center order-1'>
              <div className=' p-2 flex justify-center items-center'>
                <Image src={PolicyBazaarIcon} alt="policy-bazaar" className='bg-white w-16 h-5 rounded-sm mx-auto' />
                </div>
                <p className='text-[#969696] text-sm   mt-8 md:text-base text-center '>
                Office No. 1304, Al Shafar Tower 1, Barsha Heights (Tecom), Dubai, UAE.<br />

                Insurance is provided by Policybazaar Middle East Insurance Brokers, regulated by the UAE Insurance Authority, LicenseNo:123 <br />

                PB Fintech FZ LLC Office No. 214, 2nd Floor, Building number 06, Dubai outsource City, Dubai, UAE. <br />

                Insurance is the subject matter of solicitation. © Copyright-2025 policybazaar.ae. All Rights Reserved.
                </p>
              </div>

              <div className='text-white flex flex-col mt-5 lg:mt-0 lg:order-2'>
              <span className='text-center'>Payment Methods</span>
                <div className='flex gap-4 justify-center'>
                <Image src={VisaCard} alt="visa-card" className='bg-white w-16 h-7 rounded-sm mt-5'/>
                <Image src={MasterCard} alt="master-card" className='bg-white w-16 h-7 rounded-sm mt-5'/>
                </div>
              </div>           
      </div>
      </footer>
  )
}

export default FooterPage
