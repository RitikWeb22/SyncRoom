'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <section className='sticky left-0 flex h-screen w-fit flex-col justify-between bg-dark-1 py-28 text-white max-md:hidden lg:w-[260px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route  || pathname.startsWith(`${link.route}/`) ;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn('flex items-center rounded-lg justify-start gap-4 p-4', { 'bg-blue-1' : isActive})}
            >
              <Image src={link.imgURL} alt={link.label} width={24} height={24} />
              <p className='text-lg semibold max-lg:hidden'>{link.label}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar