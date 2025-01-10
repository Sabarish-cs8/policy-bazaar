import Creditscore from  "@/icons/credit-score"
import Creditcard from  "@/icons/credit-card"


export const bankingProducts: { icon: React.JSX.Element; title: string; subItems?: string[] }[] = [
    {
        icon:<Creditscore />,
        title:"Credit Score",
        subItems:[
            "AECB Credit Score",
            "Check FREE Credit Score",
            "AI Etihad Credit Bureau Report",
            "Credit Score for Personal Loan",
            "Credit Score for Home Loan",
            "Credit Score for Car Loan",
            "Credit Score for Student Loan",
        ]
    },
  {
    icon: <Creditcard />,
    title: "Credit Card",
    subItems: [
        "Credit Card in UAE",
        "Best Credit Card in UAE",
        "Cashback Credit Cards",
        "Balance Transfer Credit Cards",
        "Reward and Offers Credit Cards",
        "Free for Life Credit Cards",
        "Golf Credit Cards",
        "Travel Credit Cards",
        "Cinema Offers Credit Cards",
        "Air Miles Credit Cards",
        "Airport Lounge Access Credit Cards",
      ],
  },
];