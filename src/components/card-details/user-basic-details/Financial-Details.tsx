import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserDetailsBasicInformation } from '@/utils/userUtils';
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useCardData from '@/hook/useCardData';
import { Badge } from '@/components/ui/badge';


type Props = {
    handleNextStep:()=>void;
    handleFieldChange: (field: string, value: string) => void;
         userDetails:UserDetailsBasicInformation;
         handleUpdate:()=> void;
         isSubmitting:boolean;
}

const FinancialDetails = ({handleFieldChange,userDetails,isSubmitting,handleUpdate,handleNextStep}: Props) => {
  const [hasSalaryBank, setSalaryBank] = useState<string | null>(null);
  const{cards} = useCardData()
  const handleSalaryBankClick =(value:string)=>{
    setSalaryBank(value);
    handleFieldChange('salaryConsistency',value)
  }
  return (
    <>
    <div className="flex flex-col">
    <div className="w-full  overflow-y-auto h-[550px] flex flex-wrap gap-y-4 gap-x-3 p-5">
    <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Monthly Income (AED)</label>
        <Input className="border-0" value={userDetails.monthlyIncome}
        onChange={(e)=>handleFieldChange('monthlyIncome',e.target.value)}
        />
        </div>

        <div className="py-3 px-2 w-full space-y-4">
                    <label className="text-[#414141]">Did you receive the same salary in your bank account for the last three months?</label>
                    <div className='flex flex-row gap-x-3'>
                    <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                          hasSalaryBank === 'YES'
                            ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                            : 'bg-white hover:bg-transparent border-[#97a0af]'
                        }`}
                        onClick={() => handleSalaryBankClick('YES')}>YES</Button>
                    <Button variant='outline' className={`p-3 w-full justify-center items-center border ${
                          hasSalaryBank === 'NO'
                            ? 'text-[#0065ff] hover:text-[#0065ff] bg-white border-[#0065ff]'
                            : 'bg-white hover:bg-transparent border-[#97a0af]'
                        }`}
                        onClick={() => handleSalaryBankClick('NO')}>NO</Button>
                    </div>
                </div>

        <div className=" py-3 px-2 w-full">
            <label className="text-[#414141]">Since how many months do you have your existing credit cards/loans?</label>
            <Select value={userDetails.creditCardDuration} onValueChange={(e)=>handleFieldChange('creditCardDuration',e)}>
  <SelectTrigger >
    <SelectValue placeholder={userDetails.creditCardDuration} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Less than 6 months" onChange={()=>handleFieldChange('creditCardDuration','Less than 6 months')}>Less than 6 months</SelectItem>
    <SelectItem value="Equal to or more than 6 months" onChange={()=>handleFieldChange('creditCardDuration','Equal to or more than 6 months')}>Equal to or more than 6 months</SelectItem>
    <SelectItem value="Don't own any credit cards/loan/liabilities" onChange={()=>handleFieldChange('creditCardDuration',"Don't own any credit cards/loan/liabilities")}>Don&apos;t own any credit cards/loan/liabilities</SelectItem>
  </SelectContent>
</Select>

        </div>
        <div className=" py-3 px-2 w-full">
            <label className="text-[#414141]">Have you missed out on your credit card/personal loan payment in the last 3 months?</label>
            <Select value={userDetails.missedPayments} onValueChange={(e)=>handleFieldChange('missedPayments',e)}>
  <SelectTrigger >
    <SelectValue placeholder={userDetails.missedPayments} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="YES" onChange={()=>handleFieldChange('missedPayment','YES')}>YES</SelectItem>
    <SelectItem value="NO" onChange={()=>handleFieldChange('missedPayment','NO')}>NO</SelectItem>
  </SelectContent>
</Select>
        </div>
        <div className=" py-3 px-2 w-full">
            <label className="text-[#414141]">Which banks credit cards do you have ?(Optional)</label>

            <Select>
  <SelectTrigger >
    <SelectValue placeholder="Bank Details" />
  </SelectTrigger>

    <SelectContent>
  {[...new Set(cards.map((card)=>card.bankName))].map((bankName,index)=>(
    <SelectItem key={index} value={bankName}>{bankName}</SelectItem>
  ))}
  </SelectContent>
</Select>





        </div>

        <div className=" py-3 px-2 w-full">
            <label className="text-[#414141]  font-semibold">Most popular banks</label>
            <div>
  {[...new Set(cards.map((card) => card.bankName))].map((bankName) => (
    <div key={bankName} value={bankName} className='gap-4 space-y-4'>
    <Badge variant="outline" className="gap-2">
      {bankName}
    </Badge>
    </div>
  ))}
</div>

        </div>
      </div>
      <div className="flex w-full shadow-[0_-2px_16px_#00000029] p-4">
        <Button type='submit' className="bg-[#f9491f] hover:bg-[#f9491f] text-white justify-center py-3 px-2 w-full"
         onClick={()=>{handleUpdate();
          handleNextStep()}
         } disabled={isSubmitting}>
          {isSubmitting ? 'Updating...': 'Update'}
          </Button>
    </div>
      </div>
    </>
  )
}

export default FinancialDetails



