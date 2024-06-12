"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import main from '@/public/main.jpg'
import calceMain from '@/public/calceMain.jpg'
import Link from 'next/link'
function Projects() {
  const router = useRouter()
  const handleRWG = () => {
    router.push('/rwg')
  }
  const handleCalce = () => {
    router.push('/calcetopia')
  }
  return (
  <div className='max-w-6xl mx-auto sm:px-24 pb-10' id="projects">
    <h2 className="pl-6 font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Projects</h2>
    <div className='px-2 flex justify-center flex-wrap sm:flex-nowrap gap-5'>
    <Card className="w-[350px]">
          <CardHeader>
            <Image className='cursor-pointer' onClick={handleCalce} src={calceMain} alt='RWG main page'/>
            <Link href={'/calcetopia'}>
              <CardTitle>Calcetopía</CardTitle>
            </Link>
          </CardHeader>
          <CardContent className='pb-3'>
            <p>E-commerce where all those funny sock lovers can find the most colorful and unique socks. </p>
          </CardContent>
          <CardFooter className='flex flex-col items-start'>
            <div className='pb-3'>
              <p><span className='font-bold'>Front:</span> NextJs, Typescript, Stripe, TailwindCSS</p>
              <p><span className='font-bold'>Back:</span> MySQL, Typescript</p>
            </div>
            <a href="https://github.com/teresatoledo/calcetopia" target='_blank' className='font-bold underline cursor-pointer'>View code</a>
            <a href="https://calcetopia.vercel.app/" target='_blank' className='font-bold underline cursor-pointer'>Visit live project</a>
            <a onClick={handleCalce} className='font-bold underline cursor-pointer'>More info</a>
          </CardFooter>
      </Card>
      <Card className="w-[350px]">
          <CardHeader>
            <Image className='cursor-pointer' onClick={handleRWG} src={main} alt='RWG main page'/>
            <Link href={'/rwg'}>
              <CardTitle>Random WOD Generator</CardTitle>
            </Link>
          </CardHeader>
          <CardContent className='pb-3'>
            <p>This CrossFit generator crafts personalized WODs on demand, keeping your fitness routine fresh and exciting. </p>
          </CardContent>
          <CardFooter className='flex flex-col items-start'>
            <div className='pb-3'>
              <p><span className='font-bold'>Front:</span> NextJs, Typescript, TailwindCSS</p>
              <p><span className='font-bold'>Back:</span> MySQL, Typescript</p>
            </div>
            <a href="https://github.com/teresatoledo/rwg-v2" target='_blank' className='font-bold underline cursor-pointer'>View code</a>
            <a href="https://random-wod-generator.vercel.app/" target='_blank' className='font-bold underline cursor-pointer'>Visit live project</a>
            <a onClick={handleRWG} className='font-bold underline cursor-pointer'>More info</a>
          </CardFooter>
      </Card>
    </div>
  </div>
  )
}

export default Projects