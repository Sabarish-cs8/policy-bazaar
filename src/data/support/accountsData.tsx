// src/data/support/accountsData.tsx
import  ViewPolicies  from '@/icons/View-Policies';
import  RaiseaQuery  from '@/icons/Raise-a-Query';
import  Claimicon  from '@/icons/claim-icon';
import  ViewMore  from '@/icons/view-more';

export const Accounts: {
  accounts: { icon?: JSX.Element; title: string }[];  
  claim: { icon?: JSX.Element; title: string }[];
} = {
  accounts: [
    {
      icon: <ViewPolicies />,
      title: "View Policies",
    },
    {
      icon: <RaiseaQuery />,
      title: "Raise a Query",
    },
  ],
  claim: [
    {
      icon: <Claimicon />,
      title: "Learn how to file a claim",
    },
    {
      icon: <ViewMore />,
      title: "View More",
    },
  ],
};
