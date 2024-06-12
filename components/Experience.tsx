import React from 'react'
import { Button } from './ui/button'

function Experience() {
  return ( 
    <div>
  <div className='max-w-6xl mx-auto sm:px-24 px-6' id="experience">
    <h2 className="font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Experience</h2>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2021-August 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Associate Translator (RWS)</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Over these past two and a half years, I dedicated myself entirely to translating and proofreading scientific and technical texts. This endeavor allowed me to develop crucial skills in the translation industry, attention to detail and curiosity. Additionally, I assumed the role of project manager for certain clients, where I was responsible for tasks such as project preparation, managing delivery schedules, overseeing the team, and resolving any issues that arose.</p>
      </li>
  </ol>
  
</div>
<div className='flex justify-center pb-3'><Button className='bg-darkblue hover:bg-darkblue'><a href="https://drive.google.com/file/d/12q53O_0wjbsNAdMitzVj5gjrb5DmCe92/view" target='_blank'>Download my CV</a></Button></div>
</div>
  )
}

export default Experience