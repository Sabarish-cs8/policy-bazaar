import React, { Dispatch, SetStateAction } from 'react'
import EditInformation from '../card-details/Edit-info'
import CardFilterComponent from '../card-filter/card-filter-component';
import AllFilter from '../card-filter/AllFilter';
import { CardDetails, PlanTypeEnum } from '@/utils/cardUtils';
import { useUpdateInformation } from '@/hook/useUpdateInformation';


type Props = {
 cards: CardDetails[];
   openDialog: () => void; 
   isDialogOpen: boolean; 
   handleSaveChanges: () => void; 
   selectedFeature: string[]; 
   toggleFeature: (feature: string) => void;
   setIsDialogOpen: Dispatch<SetStateAction<boolean>>; 
   toggleBank: (bank: string) => void; 
   selectedBank: string[]; 
   togglePlanType: (plan: PlanTypeEnum) => void; 
   selectedPlanType: PlanTypeEnum[]; 
   toggleReward: (reward: string) => void;
  selectedReward: string[];
  handleResetAll: () => void;
  handleChange: (e: any) => void;
}

  const SubHeader = ({cards,openDialog,
    isDialogOpen,
    handleSaveChanges,selectedFeature,toggleFeature,setIsDialogOpen,toggleBank,
    selectedBank,togglePlanType,selectedPlanType,selectedReward,toggleReward,handleResetAll,handleChange}: Props) => {
  const{ userDetails ,handleNextStep,isSubmitting,handleUpdate,setSheetOpen,isSheetOpen,handleFieldChange}=useUpdateInformation()
  return (
    <>
    <div className='bg-white
    w-fit
    lg:w-full
    flex 
    flex-wrap
    lg:flex-row 
    top-3
    lg:top-13
    pt-5
    lg:pt-11
    pb-1 
    z-10 
    fixed
    px-0 
    lg:px-2 
    mx-auto items-center 
    justify-start
    lg:justify-center 
    space-x-3
    sm:left-0
    md:left-0
    '>
      <span className='text-[#052e5e] font-semibold hidden lg:block '>
        Quick filters
        </span>
        <div className='flex flex-col lg:flex-row w-full  lg:w-[616px] py-[10px] px-[8px] bg-white lg:justify-center justify-start items-center sm:left-0 md:left-0'>
        <CardFilterComponent  
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
        handleChange={handleChange}
        
        />
        </div>
        <div className='flex
        sm:w-auto 
        md:w-auto 
        lg:w-[116px]  
        py-[10px] 
        px-[8px] 
        bg-white 
        justify-center 
        items-center 
        border border-solid border-[#b3bac5] rounded-[30px]'>
        <AllFilter
         selectedFeature={selectedFeature}
         toggleFeature={toggleFeature}
        toggleBank={toggleBank}
        selectedBank={selectedBank}
        togglePlanType={togglePlanType}
        selectedPlanType={selectedPlanType}
        selectedReward={selectedReward}
        toggleReward={toggleReward}
        handleResetAll={handleResetAll}
        />
        </div>
   <div className='w-[320px] py-[10px] px-[8px] bg-white justify-center items-center border border-solid border-[#b3bac5] rounded-[30px] hidden lg:block'>
     <EditInformation  
     handleNextStep={handleNextStep}
     handleFieldChange={handleFieldChange}
     setSheetOpen={setSheetOpen}
     isSheetOpen={isSheetOpen}
     userDetails={userDetails}
     handleUpdate={handleUpdate}
     isSubmitting={isSubmitting}
     />
  </div>
    </div>
    </>
  )
}

export default SubHeader