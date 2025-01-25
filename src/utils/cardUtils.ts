export enum PlanTypeEnum {
  ShariahCompliant = 'ShariahCompliant',
  LifetimeFree = 'LifetimeFree',
}

export interface CardDetails {
    id: number;
    icon: string;
    bankName: string;
    cardName: string;
    monthlyIncome: number;
    annualFees: string;
    features: string[];
    rewards: string[];
    benefits: string[];
    annualFee: string[];
    planType:PlanTypeEnum[];
  }