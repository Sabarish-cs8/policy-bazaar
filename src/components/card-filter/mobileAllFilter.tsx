import React from 'react'
import { Button } from '../ui/button';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

const MobileAllFilter = ({isOpen,onClose}: Props) => {
  return (
    <div className={`fixed inset-0  bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="top-0 p-3  bg-white w-full h-full">
        {/* <Button variant="ghost" className="text-2xl hover:bg-white z-40" onClick={isOpen ? closeSidebar : openSidebar}>
                    <span>{isOpen ? (<ArrowLeft />) : (<SlidersHorizontal />)}</span>
                    </Button> */}
            MobileAllFilter
        </div>
        </div>
  )
}

export default MobileAllFilter