'use client'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogCancel,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { Separator } from "../ui/separator";
  import { Input } from "../ui/input";
  import { X } from "lucide-react";
import MailAlertImage from "../../icons/mailalert";
import { useUpdateInformation } from "@/hook/useUpdateInformation";
import { UserDetailsBasicInformation } from "@/utils/userUtils";
  
type prop ={
  handleNextStep:()=>void;
  handleFieldChange: (field: string, value: string) => void;
  userDetails:UserDetailsBasicInformation;
}
  export function MailAlert({handleNextStep,handleFieldChange,userDetails}:prop) {

    const {
      isOpen,
      isLoading,
      error,
        setIsOpen,} = useUpdateInformation()
        if (error) {
          return <div>{error}</div>; 
        }

  if (isLoading) {
    return <div>Loading...</div>;
  }
    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-[#ebf2fe] bg-gradient-to-b from-[#ebf2fe] to-[#ffffff] shadow-[0_2px_10px_rgba(0,0,0,.1)] rounded-[10px] max-w-[590px] w-[300px] md:w-[450px] lg:w-full p-5">
          <div className="relative flex flex-col -top-16 items-center">
            <MailAlertImage />
            <AlertDialogCancel className="absolute  right-0 flex items-center justify-center bg-transparent border-transparent hover:bg-transparent border-none">
              <X color="white" size={48}/>
            </AlertDialogCancel>
          </div>
          <div className="relative -top-16">        
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[#1c222e] text-lg font-semibold">
                Unlock Better Recommendations
              </h1>
              <p className="text-[#314e6f] text-sm mt-2">
                Enter your Official Email address Now
              </p>
            </AlertDialogTitle>
            <Separator orientation="horizontal" className="my-3" />
            <AlertDialogDescription>
              <p className="text-[#1c222e] font-medium">Official Email ID</p>
              <div className="flex gap-3 mt-3 items-center">
                <Input className="flex-1" 
                value={userDetails.officialEmail}
                onChange={(e)=>handleFieldChange('officialEmail',e.target.value)}/>
                <Button className="bg-[#ff5722] hover:bg-[#ff5722]"
                onClick={()=>{
                  handleNextStep()
                }}>Submit</Button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  