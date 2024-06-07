import React from 'react'
import { Album, BookOpenText, BriefcaseBusiness, Contact, FolderOpenDot, Home, Router } from 'lucide-react'

function HeaderDesktop() {
  return (
    <div>
      <nav>
        <ul className='flex gap-10'>
        <li className="relative group">
						<a href="/">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100">
								Home
							</span>
							<Home className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0'/>
						</a>
					</li>
         
					<li className="relative group">
						<a href="/#skills">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100 ">
								Skills
							</span>
              <Album className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0' />
							
						</a>
					</li>
					<li className="relative group">
						<a href="/#projects">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100">
								Projects
							</span>
              <FolderOpenDot className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0'/>
							
						</a>
					</li>
          <li className="relative group">
						<a href="/#education">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100">
								Education
							</span>
              <BookOpenText className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0'/>
							
						</a>
					</li>
          <li className="relative group">
						<a href="/#experience">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100">
								Experience
							</span>
              <BriefcaseBusiness className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0'/>
							
						</a>
					</li>
					<li className="relative group">
						<a href="/#contact">
							<span className="absolute inset-0 flex items-center justify-center  text-lg font-bold opacity-0 transition-opacity duration-300 text-darkblue group-hover:opacity-100">
								Contact
							</span>
              <Contact className='text-xl opacity-100 transition-opacity duration-300 group-hover:opacity-0'/>
						</a>
					</li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderDesktop