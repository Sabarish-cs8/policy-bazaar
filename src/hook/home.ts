'use client'
// import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";



export const useUserInformation = () =>{
   // const router = useRouter();
   // const [userDetails, setUserDetails] = useState({
   //    name: '',
   //    email: '',
   //    phoneNumber: '',
   //    city: '',
   //    nationality: '',
   //    monthlyIncome: '',
   //    employmentType: 'Full-Time',
   //    companyLandline: true,
   //    companyWebsite: false,
   //    salaryConsistency: true,
   //    creditCardDuration: '6 months',
   //    missedPayments: false,
   //  });
   // const {data:session} = useSession();
   // const userId = session?.user?.email;
   // console.log("userId",userId)
   const [selectedRegion, setSelectedRegion] = useState<string>('');
   const [dynamicSelection, setDynamicSelection] = useState<boolean>(false);
   const [cityName, setCityName] = useState<string>('');
   const [textLength, setTextLength] = useState<string>('');
   const [showWhatsapp, setShowWhatsapp] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   // const [name, setName] = useState<string>('');
   // const [email, setEmail] = useState<string>('');
   const [monthlyIncome, setMonthlyIncome] = useState<string>('');
   // const [officialEmail,setOfficialEmail]=useState();
   const [isOpen,setIsOpen] = useState(true)
           
   // const handleFieldChange = (field: string, value: string) => {
   //    console.log('Updating field:', field, 'with value:', value); // Debug log
   //    setUserDetails(prev => ({ ...prev, [field]: value }));
   //  };
   //  useEffect(() => {
   //    console.log('UserDetails updated:', userDetails);
   //  }, [userDetails]);
    
            //Select region
         useEffect(()=>{   
                setCityName(selectedRegion || '')
               //  setUserDetails(prev => ({ ...prev, city: cityName }));
         },[selectedRegion,cityName])

         useEffect(() => {
            setShowWhatsapp(textLength.length === 10);
         }, [textLength]);
          
         const handleCitySelection = async (city: string) => {
            setSelectedRegion(city);
            console.log("city",city)
            // setUserDetails(prev => ({ ...prev, city:city }));
          };
          const handleDynamicSelection = (value:boolean) =>{
            setDynamicSelection(value)
          }

            const handleButtonClick = (value:string) => {

               if (value === 'region' && !selectedRegion) {
                  setError('Please select a region before proceeding');
                  return;
               }
               if (value === 'contact' && textLength.length !== 10) {
                  setError('Please enter a valid 10-digit mobile number');
                  return;
               }
               setError(null);
               setDynamicSelection(true);
             };


             

   //Contact information

   // const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>) => 
   // {
   //    setName(e.target.value);
   //    setUserDetails(prev => ({ ...prev, name: e.target.value }));
   // }

   // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    setEmail(e.target.value);
   //    setUserDetails(prev => ({ ...prev, email: e.target.value }));
   // };
   
   const handleGetUpdateOnWhatsapp = (value:string) =>{
      const phoneNumber = value.replace(/[^0-9.]/g,'');
      setTextLength(phoneNumber)
      // setUserDetails(prev => ({ ...prev, phoneNumber: phoneNumber }));
  }

  const handleMonthlyIncome=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const income=e.target.value.replace(/[^0-9.]/g, '');
   setMonthlyIncome(income)
   // setUserDetails(prev => ({...prev, monthlyIncome: income}));
 }
  const validateFields = () => {
   // if (!name) return 'Name is required.';
   // if (!email) return 'Email is required.';
   if (textLength.length !== 10) return 'Mobile number must be 10 digits.';
   return null;
};


//API call server action
// const saveUserData = async () =>{
//    try {
//       console.log('Submitting user data...', userDetails);
//       const response = await fetch('/api/user',{
//          method:'POST',
//          headers:{
//             'Content-Type':'application/json',
//          },
//          body:JSON.stringify(userDetails),
//       });

//     console.log('Response status:', response.status);
//       if(!response.ok) {
//          const errorResponse = await response.json();
//       console.error('Error response:', errorResponse);
//       throw new Error(errorResponse.error || 'Failed to save user data');
//        }
//        const result = await response.json();
//        console.log('user saved Successfully',result);
//        router.push(`/credit-cards/apply/quotes/${result.user.id}`);
//        return result;
//    } catch (err) {
//       console.error('SaveUserData Error:',err);
//     setError('Failed to save user data');
//    }
// }

const handleCitySubmit = async (e:React.FormEvent)=>{
   e.preventDefault();
   // const result = await userDetails.city

   // console.log("result",result)
}

    const handleSubmit =async (e: React.FormEvent) =>{
      e.preventDefault();
      const errorMsg = validateFields();
      if (errorMsg) {
         setError(errorMsg);
         return;
      }
      // console.log('Submitting user data...', userDetails); 
      //  await saveUserData();
      
    }


    //Monthly income

    const handleIncomeSubmit =async (e: React.FormEvent)=>{
      e.preventDefault();

      // console.log('Final userDetails:', userDetails);

      const parsedIncome = parseFloat(monthlyIncome);
      
      if(isNaN(parsedIncome) || parsedIncome <= 0 || parsedIncome >= 999999){
         setError("Enter correct amount. It should be greater than 0 and less than 999999.")
         return;
      }

  setError(null);
//   const result = await saveUserData();
//   if (result?.user?.id) {
//    router.push(`/credit-cards/apply/quotes/${result.user.id}`);
 }


//  const submitEmail = async () =>{
//    if(!userId){
//        alert("User not authenticated.");
//       return;
//    }
//    try {
//       const response = await fetch('/api/user',{
//          method:"PUT",
//          headers:{
//             'Content-Type':'application/json',
//          },
//          body:JSON.stringify({userId,officialEmail:email}),
//       });
//       if (response.ok) {
//          alert("Email updated successfully!");
//          setIsOpen(false); // Close the dialog on success
//        } else {
//          console.error("Failed to update email.");
//          alert("Failed to update email. Please try again.");
//        }
//      } catch (error) {
//        console.error("An error occurred:", error);
//        alert("An error occurred. Please try again.");
//      }
//    };
   
         return{
            dynamicSelection,
            handleDynamicSelection,
            selectedRegion,
            setSelectedRegion,
            handleCitySelection,
            cityName,
            textLength,
            handleGetUpdateOnWhatsapp,
            showWhatsapp,
            handleButtonClick,
            // handleNameChange,
            // handleEmailChange,
            handleSubmit,
            // name,
            // email,
            // setEmail,
            handleMonthlyIncome,
            monthlyIncome,
            handleIncomeSubmit,
            // handleFieldChange,
            // userDetails,
            handleCitySubmit,
            isOpen,
            setIsOpen,
            // officialEmail,
            // submitEmail,
            error
         }

      }