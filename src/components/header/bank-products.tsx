"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { bankingProducts } from "@/data/BankingProducts/bankingData";

const ListItem = ({
    icon,
  title,
  children,
}: {
 icon:React.JSX.Element;
  title: string;
  children: React.ReactNode;
}) => (
  <li className="flex flex-col gap-2 p-2">
    <span className="font-medium flex flex-row gap-2 text-[#0065ff]">{icon}{title}</span>
    {children && <ul className="pl-4 space-y-1">{children}</ul>}
  </li>
);

const BankingProducts = () => {
  return (
   
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#052f5f]">Banking Products
          <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-[#0065ff] scale-x-0 transition-all group-hover:scale-x-100 group-hover:scale-y-100" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
           <ul className="grid  w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {bankingProducts.map((product) => (
                        <ListItem key={product.title} icon={product.icon} title={product.title}>
                          {product.subItems && (
                            <ul className="flex flex-row gap-3 mt-2 flex-wrap">
                              {product.subItems.map((subItem) => (
                                <li key={subItem} className="pl-2 w-auto">
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          )}
                        </ListItem>
                      )
                    )}
                  </ul>

          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default BankingProducts;
