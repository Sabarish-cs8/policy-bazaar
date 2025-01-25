import { PlanTypeEnum } from "@/utils/cardUtils";
import { useState } from "react";

export const useAddCard = () =>{
    const [formData, setFormData] = useState({
        icon: '',
        bankName: '',
        cardName: '',
        monthlyIncome: '',
        annualFees: '',
        features: '',
        rewards: '',
        benefits: '',
        annualFee: '',
        planType: PlanTypeEnum.LifetimeFree,
      });

      return{
        formData,setFormData
      }
}