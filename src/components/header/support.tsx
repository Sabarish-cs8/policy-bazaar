"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Badge } from "../ui/badge";
import { Accounts } from "@/data/support/accountsData";
const ListItem = ({
    icon,
  title,
}: {
 icon:React.JSX.Element;
  title: string;
}) => (
  <li className="flex flex-col w-full gap-2 p-2">
    <span className="font-medium flex flex-row gap-2 text-[#0065ff]">{icon}{title}</span>
   
  </li>
);
  

const Support = () => {
  return (
   
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#052f5f]">Support
          <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-[#0065ff] scale-x-0 transition-all group-hover:scale-x-100 group-hover:scale-y-100" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[100px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[300px]">
                     <li className="col-span-full">
                       <div className="relative flex flex-row items-center w-full">
                         <Badge variant="outline" className="bg-[#f8ecec] text-[#c48383] px-2 py-1 rounded-2xl">
                           Account
                         </Badge>
                         <hr className=" left-0 top-[50%] h-[1px] w-full bg-[#f8ecec] " />
                       </div>
                     </li>
                     
                     {Accounts.accounts.map((product) => (
                       <li key={product.title}className="col-span-full">
                         <ListItem icon={product.icon} title={product.title} />
                       </li>
                     ))}
                   
                   
                             
                   <li className="col-span-full">
                       <div className="relative flex flex-row items-center w-full">
                         <Badge variant="outline" className="bg-[#f8ecec] text-[#c48383] px-2 py-1 rounded-2xl">
                          Claim
                         </Badge>
                         <hr className=" left-0 top-[50%] h-[1px] w-full bg-[#f8ecec] " />
                       </div>
                     </li>
                    {Accounts.claim.map((product) => (
                        <li key={product.title} className="col-span-full" >
                        <ListItem key={product.title} icon={product.icon} title={product.title} />
                        </li>
                      )
                    )}
          </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Support;
