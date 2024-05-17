import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Separator } from './ui/separator'

function HeaderMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu/>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col justify-center items-center'>
        <Link href="#home" className='block py-1'>Home</Link>
        <Separator/>
        <Link href="#skills" className='block py-1'>Skills</Link>
        <Separator/>
        <Link href="#projects" className='block py-1'>Projects</Link>
        <Separator/>
        <Link href="#education" className='block py-1'>Education</Link>
        <Separator/>
        <Link href="#experience" className='block py-1'>Experience</Link>
        <Separator/>
        <Link href="#contact" className='block py-1'>Contact</Link>
      </PopoverContent>
    </Popover>
  )
}

export default HeaderMobile