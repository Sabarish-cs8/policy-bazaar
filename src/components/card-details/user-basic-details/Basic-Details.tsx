"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserDetailsBasicInformation } from "@/utils/userUtils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { uaeRegions } from '@/data/Home/uae-Regions'
  import { useCountries } from 'use-react-countries';

  


type Props = {
    handleFieldChange: (field: string, value: string) => void;
     userDetails:UserDetailsBasicInformation;
     handleButtonData: React.MouseEventHandler<HTMLButtonElement>;
    
}

const BasicDetails = ({handleFieldChange,userDetails,handleButtonData}: Props) => {
    const { countries } = useCountries();
  return (
    <>
    <div className="flex flex-col">
    <div className="w-full overflow-y-auto h-[550px] flex flex-wrap gap-y-4 gap-x-3 p-5">
        <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Name</label>
        <Input className="border-0" value={userDetails.name || ""} onChange={(e)=>handleFieldChange('name',e.target.value)}></Input>
        </div>


        <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Email</label>
        <Input className="border-0" value={userDetails.email || ""} onChange={(e)=>handleFieldChange('email',e.target.value)}></Input>
        </div>



        <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Company Email (optional)</label>
        <Input className="border-0" ></Input>
        </div>



        <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Mobile Number</label>
        <Input className="border-0" value={userDetails.phoneNumber || ""} onChange={(e)=>handleFieldChange('phoneNumber',e.target.value)}></Input>
        </div>


        <div className="border border-[#e3eaf9] py-3 px-2 w-full">
            <label className="text-[#414141]">Get updates on WhatsApp</label>
        <Input className="border-0" value={userDetails.phoneNumber || ""}
        onChange={(e)=>handleFieldChange('phoneNumber',e.target.value)}></Input>
        </div>


        <div className=" py-3 px-2 w-full">
            <label className="text-[#414141]">Nationality</label>
            <Select value={userDetails.nationality} onValueChange={(e)=>handleFieldChange('nationality',e)}>
              <SelectTrigger>
                <SelectValue placeholder={userDetails.nationality} />
              </SelectTrigger>
              <SelectContent>
                {countries ? ( countries.sort((a,b)=>a.name.localeCompare(b.name)).map((country,index)=>(

                <SelectItem key={country.code} value={country.name}
                >
                    {country.name}</SelectItem>
                ))
              ):(
                <SelectItem value="no Country" disabled>No countries available</SelectItem>
              )
              }
              </SelectContent>
            </Select>
        </div>


        <div className="py-3 px-2 w-full">
            <label className="text-[#414141]">City (As per Visa)</label>
            <Select value={userDetails.city} onValueChange={(e)=>handleFieldChange('city',e)}>
              <SelectTrigger>
                <SelectValue placeholder={userDetails.city} />
              </SelectTrigger>
              <SelectContent>
                {uaeRegions.map((region)=>(

                <SelectItem key={region.value} value={region.value}
                onChange={()=>handleFieldChange('city',region.value)}
                >{region.value}</SelectItem>
                ))}
              </SelectContent>
            </Select>
        </div>

    </div>
    <div className="flex w-full shadow-[0_-2px_16px_#00000029] p-4">
        <Button className="bg-[#f9491f] hover:bg-[#f9491f] text-white justify-center py-3 px-2 w-full"
        value="Employment-Details"
        onClick={handleButtonData}>Next</Button>
    </div>
    </div>
    </>
  )
}

export default BasicDetails


