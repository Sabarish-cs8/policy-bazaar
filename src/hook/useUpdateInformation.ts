'use client'
import { useEffect, useState } from "react";

// import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
export const useUpdateInformation = () =>{
   // const router = useRouter();
  const  pathname  =  usePathname();
  const userId = pathname.split('/').pop()
    console.log("user Id " , userId)
   const [email, setEmail] = useState<string>('');
   const [isOpen,setIsOpen] = useState(true)
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(true);
           
   useEffect(() => {
      if (userId) {
        const fetchUserDetails = async () => {
          try {
            const response = await fetch(`/api/user/${userId}`);
            if (response.ok) {
              const userData = await response.json();
              setEmail(userData.officialEmail || ''); 
            } else {
              console.error('Failed to fetch user details');
            }
          } catch (error) {
            console.error('Error fetching user details:', error);
          } finally {
            setIsLoading(false);
          }
        };
  
        fetchUserDetails();
      }
    }, [userId]);
  
 const submitEmail = async () =>{
   if(!userId){
       alert("User not authenticated.");
      return;
   }
   try {
      const response = await fetch('/api/user',{
         method:"PUT",
         headers:{
            'Content-Type':'application/json',
         },
         body:JSON.stringify({userId,officialEmail:email}),
      });
      if (response.ok) {
         alert("Email updated successfully!");
         setIsOpen(false); 
       } else {
         console.error("Failed to update email.");
         alert("Failed to update email. Please try again.");
       }
     } catch (error) {
       console.error("An error occurred:", error);
       alert("An error occurred. Please try again.");
     }
   };
   
         return{
            email,
            setEmail,
            isLoading,
            isOpen,
            setIsOpen,
            submitEmail,
            error
         }

      }