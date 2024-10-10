import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between fixed z-50 w-full px-6 py-4 lg:px-10 bg-dark-1'>
        <Link href="/" className='flex items-center gap-2'>
            <Image src="/icons/video-camera.png" alt='logo' width={32} height={32} className='max-sm:size-10'/>
            <p className='text-[26px] font-extrabold text-white max-sm:hidden'>SyncRoom</p>
        </Link>
        <div className='flex items-center gap-5'>
          {/* clerk user management */}
          <SignedIn>
            <UserButton appearance={{
              variables:{
                colorPrimary:'#fff',
                colorBackground:'#0056B3',
                colorText:"#fff",
              }
            }} 
            />
          </SignedIn>
          
          <section className='w-full max-w-[264px]'>
            <MobileNav /> 
          </section>
        </div>
    </nav>
  )
}

export default Navbar