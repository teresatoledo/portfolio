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
      <Image src={logoAzul} alt="Logotipo" className="h-14 w-14" onClick={()=> router.push('/')}/>
      
      <div className="items-center justify-between hidden sm:flex"><HeaderDesktop/></div>
      <div className="flex sm:hidden"><HeaderMobile/></div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <Linkedin href='https://www.linkedin.com/in/teresatoledo' target='_blank'/>
        <Github href='https://github.com/teresatoledo' target='_blank'/>
        <Mail href='mailto:teresatoledolara@gmail.com'/>
        <ModeToggle/>
      </div>
    </div>
  )
}

export default Header