import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

function Projects() {
  return (
  <div className='max-w-6xl mx-auto sm:px-24 pb-10' id="projects">
    <h2 className="pl-6 font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Projects</h2>
    <div className='px-2 flex justify-center flex-wrap sm:flex-nowrap gap-5'>
      <Card className="w-[350px]">
          <CardHeader>
            {/* <Image src={} alt='Calcetopía landing page'/> */}
            <CardTitle>Calcetopía</CardTitle>
          </CardHeader>
          <CardContent className='h-32'>
            <p>Vibrant e-commerce platform specializing in socks, seamlessly blending front-end design with robust back-end functionality.</p>
          </CardContent>
          <CardFooter className='flex flex-col items-start'>
            <p><span className='font-bold'>Front:</span> Next.js, Typescript, TailwindCSS</p>
            <p><span className='font-bold'>Back:</span> Node.js, PostgreSQL</p>
            <a href="#" className='font-bold underline cursor-pointer'>See code</a>
          </CardFooter>
      </Card>
      <Card className="w-[350px]">
          <CardHeader>
            {/* <Image src={} alt='Calcetopía landing page'/> */}
            <CardTitle>Random WOD Generator</CardTitle>
          </CardHeader>
          <CardContent className='h-32'>
            <p>This CrossFit generator crafts personalized WODs on demand, keeping your fitness routine fresh and exciting. </p>
          </CardContent>
          <CardFooter className='flex flex-col items-start'>
            <p><span className='font-bold'>Front:</span> Next.js, Typescript, TailwindCSS</p>
            <p><span className='font-bold'>Back:</span> Node.js, PostgreSQL</p>
            <a href="#" className='font-bold underline cursor-pointer'>See code</a>
          </CardFooter>
      </Card>
    </div>
  </div>
  )
}

export default Projects