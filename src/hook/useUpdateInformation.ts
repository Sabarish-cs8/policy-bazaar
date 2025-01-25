'use client'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { UserDetailsBasicInformation } from "@/utils/userUtils";
export const useUpdateInformation = () =>{
  
  const  pathname  =  usePathname();
  const userId = pathname.split('/').pop()
   const [email, setEmail] = useState<string>('');
   const [isOpen,setIsOpen] = useState(true)
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(true);
   //const [userInformation,setUserInformation] = useState<UserDetails | undefined>(undefined);

   const [isSheetOpen, setSheetOpen] = useState(false); 
    const [step, setStep] = useState<number>(1); 
         const [isSubmitting, setIsSubmitting] = useState(false);
         const [userDetails,setUserDetails]=useState<UserDetailsBasicInformation>({
           name: "",
           email: "",
           phoneNumber: "",
           city: "",
           officialEmail:"",
           nationality: "",
           monthlyIncome: "",
           employmentType: "",
           companyLandline: "",
           companyWebsite: "",
           salaryConsistency: "",
           creditCardDuration: "",
           missedPayments: ""
         });
        //  console.log("user data from Hook",userDetails)

         const handleFieldChange = (field:string,value:string) => {
          setUserDetails((prev)=>({...prev,[field]:value}));
        }
        const handleNextStep = () =>{
          setStep((prev)=>prev + 1);
          setSheetOpen(true);
          console.log("isSheetOpen",isSheetOpen)
        }


   useEffect(() => {
    if (!userId) {
      console.error('userId is undefined');
      return;
    }
    const fetchUserDetails = async () => {
      try {
        console.log('Fetching user details for ID:', userId);
        const response = await fetch(`/api/user/${userId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
  
        const userData = await response.json();
        console.log('User data:', userData);
        setUserDetails(userData);
        // setUserInformation(userData);
        setEmail(userData.officialEmail || '');
      } catch (error:any) {
        console.error('Error fetching user details:', error.message || error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchUserDetails();
  }, [userId]);
  
//  const submitEmail = async () =>{
//    if(!userId){
//        alert("User not authenticated.");
//       return;
//    }
//    try {
//       const response = await fetch(`/api/user/${userId}`,{
//          method:"PUT",
//          headers:{
//             'Content-Type':'application/json',
//          },
//          body:JSON.stringify({officialEmail:email}),
//       });
//       if (response.ok) {
//          setIsOpen(false); 
//          console.log("email updated successfully")
//        } else {
//          console.error("Failed to update email.");
//        }
//      } catch (error) {
//        console.error("An error occurred:", error);
//      }
//    };


   const handleUpdate = async () =>{

    setError(null);
    setIsSubmitting(true);
    if(!userId){
      alert("User not authenticated.");
      setIsSubmitting(false);
     return;
  }
    try {
      console.log('Submitting user data from Dynamic page...', userDetails);
      const payload = {
        city: userDetails.city,
        nationality: userDetails.nationality,
        name: userDetails.name,
        email: userDetails.email,
        officialEmail:userDetails.officialEmail,
        phoneNumber: userDetails.phoneNumber,
        MonthlyIncome:userDetails.monthlyIncome,
        employmentType:userDetails.employmentType,
        companyLandline: userDetails.companyLandline,
        companyWebsite: userDetails.companyWebsite,
        salaryConsistency: userDetails.salaryConsistency,
        creditCardDuration: userDetails.creditCardDuration,
        missedPayments: userDetails.missedPayments
      };

      if (!payload || typeof payload !== 'object') {
        throw new Error('Invalid payload');
      }

      const response = await fetch(`/api/user/${userId}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(payload)
      });
      if(!response.ok){
        console.error("Failed to update userDetails.");
      }
      const result = await response.json();
   console.log('user saved Successfully',result);
    } catch (error) {
      console.error("An error occurred:", error);
    }finally{
      setIsSubmitting(false);
    }
  }
   
         return{
            email,
            setEmail,
            isLoading,
            isOpen,
            userId,
            setIsOpen,
            // submitEmail,
            // userInformation,


            step,
            handleNextStep,
            handleFieldChange,
            setSheetOpen,
            userDetails,
            handleUpdate,
            isSubmitting,
            isSheetOpen,
            error
         }

      }