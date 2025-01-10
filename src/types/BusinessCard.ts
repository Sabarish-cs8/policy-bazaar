
export interface BusinessCard{
    id:number;
    name:string;
    features:string[];
    eligibility:{
        age:string;
        nationality:string;
    };
    documents:string[];
}