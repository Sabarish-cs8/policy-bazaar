import React from 'react'
import { useScreenSize } from '@/hook/header'
import MobileDialog from './Mobile-Dialog';
import DesktopDialog from './Desktop-Dialog';


type Props = {}

const SignIn = (props: Props) => {

  const screenSize = useScreenSize();

  console.log("screenSize", screenSize)
  return (
    <>
    {screenSize === 'mobile' ? (
      <MobileDialog />
    ) : (
      <DesktopDialog />
    )}
  </>
  )
}

export default SignIn


