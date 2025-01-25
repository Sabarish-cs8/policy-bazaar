'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "../ui/separator"
import Image from "next/image"
import logo from "../../../public/logo-pb.png"
import { useState } from "react"
import { features } from "@/data/advantage-cardpage/features"

export function Advantage() {
    const [showDescription, setShowDescription] = useState(false);
    
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-5 mb-2">

        <Image src={logo} alt="logo-pb" width={25} height={25}/>
        <CardTitle>Advantage</CardTitle>
        </div>
        <Separator orientation="horizontal"/>
      </CardHeader>
      <CardContent>
       <div>
        {/* <Image src="/icons/advantage.svg.svg" alt="advantage" width={50} height={50} className="w-10 h-10"/> */}
        {features.map((feature, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-sm text-[#052e5e] font-semibold">{feature.title}</h2>
              {showDescription && (
                <p className="text-sm text-[#46454e]">{feature.description}</p>
              )}
            </div>
          ))}
       </div>
      </CardContent>
      <CardFooter className=''>
        <Button variant="outline" className='w-fit text-center mx-auto p-2 mt-2 mb-6 border-2 border-[#0065ff] rounded-md text-[#0065ff] hover:text-none hover:bg-white'
         onClick={() => setShowDescription(!showDescription)}
         >
            {showDescription? "View Less":"View More"}
            </Button>
      </CardFooter>
    </Card>
  )
}
