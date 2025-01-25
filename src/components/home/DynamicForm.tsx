'use client';
import { useRouter } from 'next/navigation';
import HeaderPage from '@/app/(pages)/header/page';
import HomePage from '@/app/(pages)/home/page';
import { useState } from 'react';
import CityDetailsComponent from './CityDetailsComponent';
import ContactDetails from './contact-details';
import MonthlyIncome from './monthly-income';

const MultiStepFormPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userDetails, setUserDetails] = useState({
    city: '',
    nationality: '',
    name: '',
    email: '',
    phoneNumber: '',
    monthlyIncome: '',
    employmentType: 'Full-Time',
      companyLandline: true,
      companyWebsite: false,
      salaryConsistency: true,
      creditCardDuration: '6 months',
      missedPayments: false,
  });
  const [error, setError] = useState<string | null>(null); 

  const handleFieldChange = (field: string, value: string) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = async () => {
    setError(null); 
    setIsSubmitting(true);
    try {
      console.log('Submitting user data...', userDetails);

      const payload = {
        city: userDetails.city,
        nationality: userDetails.nationality,
        name: userDetails.name,
        email: userDetails.email,
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

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if(!response.ok) {
         const errorResponse = await response.json();
      console.error('Error response:', errorResponse);
      throw new Error(errorResponse.error || 'Failed to save user data');
       }

       const result = await response.json();
       console.log('user saved Successfully',result);
       router.push(`/credit-cards/apply/quotes/${result.user.id}`);
       return result;
   } catch (err) {
      console.error('SaveUserData Error:',err);
      setError('Failed to save user data');
    } finally{
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {step === 1 && (
       <>
       <HeaderPage />
       <HomePage handleNextStep={handleNextStep}
        handleFieldChange={handleFieldChange}
        userDetails={userDetails}
       /> 
       </>
      )}

      {step === 2 && (
        <>
        <CityDetailsComponent handleNextStep={handleNextStep} 
        handleFieldChange={handleFieldChange}
        userDetails={userDetails}
        handlePreviousStep={handlePreviousStep}
        />
        </>
      )}

      {step === 3 && (
       
            <ContactDetails handleNextStep={handleNextStep}
             handleFieldChange={handleFieldChange}
             userDetails={userDetails}
             handlePreviousStep={handlePreviousStep}
              />
    
      )}

      {step === 4 && (      
          <MonthlyIncome 
             handleFieldChange={handleFieldChange}
             handleSubmit={handleSubmit}
             userDetails={userDetails}
             handlePreviousStep={handlePreviousStep}
             isSubmitting={isSubmitting}
             />
   
      )}
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default MultiStepFormPage;
