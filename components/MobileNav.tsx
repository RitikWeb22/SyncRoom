'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
  

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <Sheet>
  <SheetTrigger>
    <Image src="/icons/hamburger.svg" alt='menu' width={24} height={24} className='cursor-pointer sm:hidden' />
  </SheetTrigger>
  <SheetContent side='left' className='border-none bg-dark-1'>
  <Link href="/" className='flex items-center gap-1'>
            <Image src="/icons/video-camera.png" alt='logo' width={32} height={32}  className='max-sm:size-10'/>
            <p className='text-[26px] font-extrabold text-white'>SyncRoom</p>
        </Link>

<div className='flex h-[calc(100vh-72px)] flex-col justify-between items-center  overflow-y-auto gap-10 text-white'>
  <div className='flex flex-col items-center gap-6'>
   <SheetClose asChild >    
    <section className='flex flex-col items-center gap-6 pt-16 text-white'>
    {sidebarLinks.map((link) => {
          const isActive = pathname === link.route 
          
          return (
            <SheetClose asChild key={link.route}>
 <Link
              href={link.route}
              key={link.label}
              className={cn('flex items-center rounded-lg justify-start gap-4 p-4', { 'bg-blue-1' : isActive})}
            >
              <Image src={link.imgURL} alt={link.label} width={20} height={20} />
              <p className='text-lg semibold'>{link.label}</p>
            </Link>
            </SheetClose>
           
          )
        })}
    </section>
   </SheetClose>
  </div>
</div>

  </SheetContent>
</Sheet>

  )
}

export default MobileNav