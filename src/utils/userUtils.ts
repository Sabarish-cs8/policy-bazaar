export interface UserDetails {
  id: string;
  name: string;
  email: string;
  officialEmail: string;
  phoneNumber: string;
  city: string;
  nationality: string;
  monthlyIncome: string; 
  employmentType: string;
  companyLandline: boolean;
  companyWebsite: boolean;
  salaryConsistency: boolean;
  creditCardDuration: string;
  missedPayments: boolean;
}

export interface UserDetailsBasicInformation {
  name: string;
  email: string;
  officialEmail: string;
  phoneNumber: string;
  city: string;
  nationality: string;
  monthlyIncome: string;
  employmentType: string;
  companyLandline: string;  
  companyWebsite: string;
  salaryConsistency: string;
  creditCardDuration: string;
  missedPayments: string;
}