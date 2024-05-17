import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row justify-between items-center px-5 h-10'>
      <div>
        Teresa Toledo | 2024
      </div>
      <div className="flex items-center justify-between gap-1 sm:gap-3">
        <Linkedin className='h-5' href='https://www.linkedin.com/in/teresatoledo' target='_blank'/>
        <Github className='h-5' href='https://github.com/teresatoledo' target='_blank'/>
        <Mail className='h-5' href='mailto:teresatoledolara@gmail.com'/>
      </div>
    </footer>
  )
}

export default Footer