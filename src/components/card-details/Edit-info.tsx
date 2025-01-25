
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import EditInfo from '@/icons/Edit-info'
import UserBasicDetails from './user-basic-details/page'
import { UserDetailsBasicInformation } from '@/utils/userUtils'

type Props = {
    handleNextStep:()=>void;
    handleFieldChange: (field: string, value: string) => void;
    isSheetOpen:boolean;
    userDetails:UserDetailsBasicInformation;
    setSheetOpen:(open:boolean)=>void;
    handleUpdate:()=>void;
    isSubmitting:boolean;
}

const EditInformation = ({handleNextStep,isSubmitting,handleUpdate,setSheetOpen,isSheetOpen,handleFieldChange,userDetails}: Props) => {
 
 console.log("isSheetOpen from page",isSheetOpen)

  return (
    <>
    <div className='flex w-full z-50 top-0'>
       <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>


        <div className='flex justify-center w-full items-center'>
            <Button variant='ghost' className=' flex  bg-white items-center sm:block lg:hidden hover:bg-transparent'>
              <div className='flex gap-3'>
                <EditInfo />
                <span className='text-[#062e5e] text-sm font-bold'>Edit Info</span>
              </div>
            </Button>
            <Button 
            variant='ghost' 
            className='items-center justify-center bg-white hidden sm:hidden lg:block hover:bg-transparent'>
                    <div className='flex gap-3'>
                    <EditInfo />
                <span className='text-[#062e5e] text-sm font-bold'>Edit Info</span>
                    </div>
            </Button>
        </div>


      </SheetTrigger>
      <SheetContent className='!w-[90%] !max-w-[550px]'>
        <SheetHeader>
          <SheetTitle>Edit Detail</SheetTitle>
          
        </SheetHeader>
        <div className='bg-white'>
        <UserBasicDetails
        handleNextStep={handleNextStep}
        handleFieldChange={handleFieldChange}
        userDetails={userDetails}
        handleUpdate={handleUpdate}
        isSubmitting={isSubmitting}
        />
        </div>
      </SheetContent>
    </Sheet>
    </div>
    </>
  )
}

export default EditInformation
  
    