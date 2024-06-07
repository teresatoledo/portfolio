"use client"
import logoAzul from '@/public/logoAzul.png'
import logoBold from '@/public/logoBold.png'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import { Github, Linkedin, Mail } from 'lucide-react'
import { ModeToggle } from './toggle-theme'

function Header() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <Image src={logoBold} alt="Logotipo" className="h-14 w-14 dark:hidden" onClick={()=> router.push('/')}/>
      <Image src={logoAzul} alt="Logotipo" className="h-14 w-14 hidden dark:flex" onClick={()=> router.push('/')}/>
      
      <div className="items-center justify-between hidden sm:flex"><HeaderDesktop/></div>
      <div className="flex sm:hidden"><HeaderMobile/></div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <a href='https://www.linkedin.com/in/teresatoledo' target='_blank'><Linkedin /></a>
        <a href='https://github.com/teresatoledo' target='_blank'><Github /></a>
        <a href='mailto:teresatoledolara@gmail.com'><Mail /></a>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Header