'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

//Card
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { uaeRegions } from '@/data/Home/uae-Regions'
import { useUserInformation } from '@/hook/home'


type Props = {
  handleDynamicSelection: (value: boolean) => void ;
  handleButtonClick: (value:string) => void;
  handleFieldChange:(name:string,value:string)=>void;
  userDetails:{city:string};
  handleNextStep:() =>void;
  error:string | null;
}


const GettingUserDetails = ({ handleDynamicSelection,userDetails,handleNextStep ,handleFieldChange, handleButtonClick ,error}: Props) => {
     const { setSelectedRegion,handleCitySelection } = useUserInformation();
    

     const handleSelectChange = (value: string) => {
      setSelectedRegion(value);  // Update the selected region
      handleFieldChange('city', value);  // Update the user details
      handleDynamicSelection(true); 
      handleNextStep()
    };

  return (
    <>
    {/* <form onSubmit={handleCitySubmit}> */}
      <Card className='ml-12 w-auto lg:w-full '>
        <CardHeader>
          <CardTitle className='text-xl'>
            Best credit cards with
            <span className='text-[#0065ff]'> 0 Annual fee*</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={userDetails.city} onValueChange={handleSelectChange }>
            <SelectTrigger className="w-full mt-2 border rounded-md p-2">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {uaeRegions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <div className="grid grid-cols-2 mt-2 gap-2">
            {uaeRegions.slice(0,4).map((region)=>(

                  <Button 
                  type='submit'
                  key={region.value}
                  value={userDetails.city}
                  variant="outline" 
                  className="hover:border-[#0065ff]  bg-white rounded-md hover:bg-white cursor-pointer"
                  onClick={() =>{ handleCitySelection(region.label);
                    handleDynamicSelection(true);
                 handleFieldChange('city',region.label);
                 handleNextStep()
                }
                  }>
                    {region.label}
                    </Button>
            ))}
            
              </div>
          <Button 
            type="submit" 
            className="w-full mt-5 bg-[#f9481e] text-white hover:bg-[#f9481e] active:bg-[#f9481e] focus:outline-none focus:ring-2 focus:ring-[#f9481e]"
           onClick={()=>handleButtonClick('region')}
          >
            Apply Now
          </Button>
        </CardContent>
      </Card>
      {/* </form> */}
    </>
  )
}

export default GettingUserDetails