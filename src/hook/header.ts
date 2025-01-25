'use client'
import { useEffect, useState } from 'react';

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
  };
};


export const useScreenSize = ()  => {
  const [screenSize,setScreenSize] = useState<'mobile' | 'desktop'>('desktop');

  useEffect(()=>{
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 768 ? 'mobile' : 'desktop');
    }
    handleResize()
    window.addEventListener('resize' , handleResize)

    return () => window.removeEventListener('resize',handleResize);
  },[]);
  return screenSize
}

export const usePlusIcon = () => {
  const [openProduct, setOpenProduct] = useState<string | null>(null);

  const toggleSubtitle = (title : string) =>{
    setOpenProduct((prev) => (prev === title ? null : title));
  }
  return {
    openProduct,
    toggleSubtitle
  };
}