'use client'
import { MailAlert } from "./mail-alert";
import EditInformation from "./Edit-info";
import { useUpdateInformation } from "@/hook/useUpdateInformation";
import CustomerPage from "@/app/(pages)/credit-cards/apply/quotes/[id]/page";

const DynamicFormCardPage = () => {
  const{
    isSheetOpen,
    step,
            handleNextStep,
            handleFieldChange,
            setSheetOpen,
            userDetails,
            handleUpdate,
            isSubmitting,
  }=useUpdateInformation()
      return(
        <>
        {step === 1 && (
            <MailAlert 
            handleNextStep={handleNextStep}
            handleFieldChange={handleFieldChange}
            userDetails={userDetails}
            />
        )}
        {step === 2 && (
            <EditInformation 
            handleNextStep={handleNextStep}
            handleFieldChange={handleFieldChange}
            setSheetOpen={setSheetOpen}
            isSheetOpen={isSheetOpen}
            userDetails={userDetails}
            handleUpdate={handleUpdate}
            isSubmitting={isSubmitting}
            />
        )}
        {step === 3 && (
          <CustomerPage  />
        )}
        </>
      )

    }
export default DynamicFormCardPage;