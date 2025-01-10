'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

type Props = {}

const BreadCrumbs = (props: Props) => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
  return (
    <Breadcrumb className='mt-2 mb-2'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className='text-[#0065ff]'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.length > 2 && (
            <>
            
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {pathSegments.slice(0,pathSegments.length -1).map((segment , index) =>{
            const href = '/'+ pathSegments.slice(0 , index + 1).join('/');
            return(
                <DropdownMenuItem key={href}>
                    <Link href = {href}>{decodeURIComponent(segment)}</Link>
                </DropdownMenuItem>
            );
            })}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
            </>
          )}
          {pathSegments.slice(-1).map((segment , index)=>{
            const href= '/' + pathSegments.join('/');
            console.log("Render Last Segment",index)

            return(
                <React.Fragment key={href}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
                    </BreadcrumbItem>
                </React.Fragment>
            )
        })}
        </BreadcrumbList>
      </Breadcrumb>
  )
}

export default BreadCrumbs
