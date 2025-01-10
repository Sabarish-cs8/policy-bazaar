import { useScreenSize } from "@/hook/header";
import React from "react";  
import TalkToExpertDesktop from "./talk-to-expert-desktop";
import { Button } from "../ui/button";
import Image from "next/image";
const TalkToExpert = () => {
   const screenSize = useScreenSize();
  return (
    <>
    {screenSize === 'mobile' ? (
      <div className="z-40">
      <Button variant="outline" className='border-blue-100 rounded-xl flex  items-center gap-1 text-[#0065ff]' >
            <Image  
                alt='phone-ring'
                src='https://cdn.policybazaar.ae/pbuae/images/talktoexper.gif' 
                width={20}
                height={20}
            />
          </Button>
      </div>
    ) : (
      <TalkToExpertDesktop />
    )}
    </>
  );
};

export default TalkToExpert;
