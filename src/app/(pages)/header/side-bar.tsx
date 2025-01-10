
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { bankingProducts } from '@/data/BankingProducts/bankingData';
import { Accounts } from '@/data/support/accountsData';
import { usePlusIcon } from '@/hook/header';
import { PlusCircleIcon } from 'lucide-react';
import React from 'react';


type Props = {
    isOpen: boolean;
    onClose: () => void;
  };

const Sidebar = ({isOpen,onClose}:Props) => {
  const {openProduct,toggleSubtitle} = usePlusIcon();
  return (
<div className={`fixed inset-0  bg-opacity-50 z-30 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="top-0 p-3  bg-white w-full h-full">
        <div className='p-4 mt-12 space-y-5'>
        <div className="relative flex flex-row items-center w-full">
          <Badge variant="outline" className="bg-[#f8ecec] text-[#c48383] px-2 py-1 rounded-2xl">
             Account
          </Badge>
          </div>
        {Accounts.accounts.map((product)=>(
          <div key={product.title} className='flex flex-col'>
            <span className='flex gap-3'>{product.icon}{product.title}</span>
          </div>
        ))}
        </div>
        <Separator className="p-0 top-[50%] h-[3px] w-full" style={{ boxShadow: '0 3px 0 #3469cb33' }} />


        <div className='p-4 space-y-5'>
        <div className="relative flex flex-row items-center w-full">
          <Badge variant="outline" className="bg-[#f8ecec] text-[#c48383] px-2 py-1 rounded-2xl">
          Explore Products
          </Badge>
          </div>
        {bankingProducts.map((product)=>(
          <div key={product.title} className='flex flex-col'>
            <span className='flex gap-3 items-center w-full text-[#0065ff]'>{product.icon}{product.title}
              <Button variant='ghost' className='hover:bg-white text-black ml-auto' onClick={()=>toggleSubtitle(product.title)}>
                <PlusCircleIcon size={48} />
              </Button>
            </span>
            {openProduct === product.title && (
              <div className='flex pl-9 pr-9 mt-2'>
                <ul className='flex flex-col'>
                  {product.subItems?.map((subItem,index)=>(
                    <li key={index} className='flex flex-col text-[#000000d9] text-sm mb-4'>
                      {subItem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        </div>
        <Separator className="p-0 top-[50%] h-[3px] w-full" style={{ boxShadow: '0 3px 0 #3469cb33' }} />

        <div className='p-4 space-y-5 flex flex-col'>
        <div className="relative flex flex-row items-center w-full">
          <Badge variant="outline" className="bg-[#f8ecec] text-[#c48383] px-2 py-1 rounded-2xl">
             Claim
          </Badge>
          </div>
        {Accounts.claim.map((product)=>(
          <div key={product.title} className='flex flex-col'>
            <span className='flex gap-3'>{product.icon}{product.title}
            </span>
            <div className='p-0 flex'>
               <Separator className="mt-5 top-[50%] h-[3px] w-full" style={{ boxShadow: '0 3px 0 #3469cb33' }} />
            </div>
          </div>
        ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
