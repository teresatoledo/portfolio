import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row justify-between items-center px-5 h-10'>
      <div>
        Teresa Toledo | 2024
      </div>
      <div className="flex items-center justify-between gap-1 sm:gap-3">
        <a href='https://www.linkedin.com/in/teresatoledo' target='_blank'><Linkedin className='h-5' /></a>
        <a href='https://github.com/teresatoledo' target='_blank'><Github className='h-5' /></a>
        <a className='h-5' href='mailto:teresatoledolara@gmail.com'><Mail /></a>
        
        
      </div>
    </footer>
  )
}

export default Footer