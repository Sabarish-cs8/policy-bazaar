"use client";
import Image from 'next/image'
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import CallIcon from '@/icons/call-icon'
import BankIcon from '@/icons/bank-icon'
import { Button } from "../ui/button";
import WhatsappIcon from '@/icons/whatsapp';
import { Separator } from '../ui/separator';

const ListItem = ({
  icon,
  title,
  contact,
}: {
  icon: React.JSX.Element;
  title: string;
  contact?: number; 
}) => (
  <div>

  <li className="flex flex-row w-full gap-2 p-2">
    <span className="flex">{icon}</span>
    <span className="font-medium flex flex-col space-x-3 gap-2 text-black">
      {title}
      {contact && <span className='"text-[#052f5f]'>{contact}</span>} 
    </span>
  </li>
    <Separator orientation='horizontal'/>
  </div>
);


const TalktoExpert: { icon: React.JSX.Element | string; title: string; contact?: number }[] = [
    {
      icon: <CallIcon />,
      title: "Call Us for Insurance",
      contact: 800800001, 
    },
    {
      icon: <BankIcon />,
      title: "Call Us for Banking",
      contact: 8007284644, 
    },
    {
      icon: <WhatsappIcon />,
      title: "Connect on Whatsapp",
    },
  ];
  
  

const TalkToExpertDesktop = () => {
  return (
   
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger>
        <Button variant="outline" className='border-blue-100 rounded-xl flex z-40 items-center gap-1 text-[#0065ff]' >
            <Image  
                alt='phone-ring'
                src='https://cdn.policybazaar.ae/pbuae/images/talktoexper.gif' 
                width={20}
                height={20}
            />
          <span className="font-semibold   hidden md:block lg:">TALK TO EXPERT</span>
          <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-[#0065ff] scale-x-0 transition-all group-hover:scale-x-100 group-hover:scale-y-100" />
          </Button>
          
          </NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 w-full md:w-[500px] lg:w-[300px]">                     
                     {TalktoExpert.map((product) => (
                       <li key={product.title}className="col-span-full">
                         <ListItem icon={product.icon} title={product.title} contact={product.contact}/>
                       </li>
                     ))}
          </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TalkToExpertDesktop;
