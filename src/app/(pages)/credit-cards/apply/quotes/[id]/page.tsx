'use client'
import CardHeaderPage from '@/app/(pages)/header/CardHeaderPage'
// import { CardDataProvider } from '@/app/cards/CardDataProvider'
import CardList from '@/app/cards/page'
// import AddCardForm from '@/components/card-details/AddCardForm'
import DynamicFormCardPage from '@/components/card-details/DynamicFormCardPage'
import SideCardPage from '@/components/side-card/page'
import SubHeader from '@/components/sub-header/page'
import useCardData from '@/hook/useCardData'
import { useCompareCard } from '@/hook/useCompareCard'
import { useUpdateInformation } from '@/hook/useUpdateInformation'
// import { UserDetailsBasicInformation } from '@/utils/userUtils'

import React from 'react'

type Props = {}

const CustomerPage = (props: Props) => {

  // const {userInformation}=useUpdateInformation();
  const{ userDetails}=useUpdateInformation()
  const{filteredCards,cards,openDialog,
      isDialogOpen,
      handleSaveChanges,selectedFeature,toggleFeature,setIsDialogOpen,toggleBank,
      selectedBank,togglePlanType,selectedPlanType,selectedReward,toggleReward,loading,handleResetAll,handleChange,
    handleShortlist,selectedCardId}=useCardData();

    const {compareCards,compareSheetOpen,handleCards ,handleClose,bottomCard,handleBottomCard,setCompareSheetOpen} = useCompareCard()
  // const {cards} = useCardData();
  const checkOfficialMail = userDetails?.officialEmail;

  console.log("Filtered Cards in page[id]:", filteredCards);
  return (
    <>
    {!checkOfficialMail ? 
    (
      <DynamicFormCardPage />
    ):(
      <>
      {/* {cards.map((card)=>( */}
       <div className='max-w-7xl max-h-fit mx-auto p-5'>
       <div className='flex flex-row fixed  z-40 bg-white top-0'>
   <CardHeaderPage />
           <SubHeader  
           cards={cards}
           openDialog={openDialog}
           isDialogOpen={isDialogOpen}
           handleSaveChanges={handleSaveChanges}
           selectedFeature={selectedFeature}
           toggleFeature={toggleFeature}
           setIsDialogOpen={setIsDialogOpen}
           toggleBank={toggleBank}
           selectedBank={selectedBank}
           togglePlanType={togglePlanType}
           selectedPlanType={selectedPlanType}
           selectedReward={selectedReward}
           toggleReward={toggleReward}
           handleResetAll={handleResetAll}
           handleChange={handleChange}
           
            />
       </div>
     <div className='flex flex-col mx-auto scroll-smooth mt-4 border-[#e3eaf9]'>
         <div className='flex flex-col lg:flex-row'>
         <div className='flex 
         flex-col
         sm:w-full 
         md:w-fit 
         lg:w-[952px] 
         md:px-4
         lg:px-6
         lg:pr-[23px] 
         sm:mx-4
         md:mx-6
         lg:mx-auto
         space-y-6 lg:mt-28  mt-56'>
           
             <CardList  
             cards={filteredCards} loading={loading}  selectedCardId={selectedCardId} handleShortlist={handleShortlist}
             
             
             compareCards={compareCards}
             handleCards={handleCards}
             compareSheetOpen={compareSheetOpen}
             handleClose={handleClose}
             bottomCard={bottomCard}
             handleBottomCard={handleBottomCard}
             setCompareSheetOpen={setCompareSheetOpen}
             
             />
           
         </div>
         <div className='hidden md:hidden lg:block w-full lg:w-[328px] mx-auto lg:ml-3'>
         <SideCardPage  
         selectedCardId={selectedCardId}
         selectedFeature={selectedFeature}
           toggleFeature={toggleFeature}
           handleResetAll={handleResetAll}
         />
         </div>
         </div>
     </div>
 </div>
            {/* // ))} */}
    </>
    )}
    
    </>
  )
}

export default CustomerPage