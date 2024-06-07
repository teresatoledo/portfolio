import { CardContent } from '@/components/ui/card'
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Carousel } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import landing from '@/public/landing.jpg'
import main from '@/public/main.jpg'
import mainHeart from '@/public/mainheart.jpg'
import tooltip from '@/public/tooltip.jpg'
import wod from '@/public/wod.jpg'
import rm from '@/public/rm.jpg'
import calories from '@/public/calories.jpg'
function Page() {
  return (
    <div>
    <div className='flex flex-col justify-center items-center'>
      <Carousel className="max-w-md lg:max-w-xl">
        <CarouselContent >
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={landing} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={main} alt=''/></span></CardContent></CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={mainHeart} alt=''/></span></CardContent></CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={tooltip} alt=''/></span></CardContent></CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={wod} alt=''/></span></CardContent></CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={rm} alt=''/></span></CardContent></CarouselItem>
          <CarouselItem><CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={calories} alt=''/></span></CardContent></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div className='flex flex-col justify-center gap-3 ml-4 sm:mx-16'>
      <h2 className="font-bold  hover:text-darkblue duration-75 delay-75 text-xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Random WOD Generator</h2>
      <h4 className='text-lg font-bold text-darkblue'>Summary</h4>
      <p>Random WOD Generator is a website that allows you to randomly generate CrossFit workouts based on different variables of your choice such as the type of workout you want to do, the main focus you want to give it, the time you have available and your own level. With all these parameters it generates a workout for you to make the most of the time you have available.</p>
      <p>It has a <span className='font-bold'>built-in timer</span> that you can pause and restart as many times as you like so you don&apos;t need any additional tools to workout, with RWG you have it all in one place.</p>
      <p>One of the most important functionalities that RWG includes is a <span className='font-bold'>built-in video</span> for each exercise. You can click on each one of the exercise and watch a tutorial on how to do that movement.</p>
      <p>If you&apos;ve logged in, you&apos;ll have the ability to <span className='font-bold'>save the workout as a favourite</span> which you can then view at any time in your porfile.</p>
      <p>The profile offers a wealth of opportunities for users: from basic functions such as viewing your data or <span className='font-bold'>changing your password</span>, to other RWG features such as viewing your saved workouts as favourites, a <span className='font-bold'>record of maximum lifts</span> for each available exercise and a <span className='font-bold'>calorie calculator</span> that you can customise with your data and goals, so you can get the most out of your workouts.</p>
      <p>You also have available a <span className='font-bold'>FAQ section</span> in case you have any doubt about how to use any of the functionalities RWG offers.</p>
      <h4 className='text-lg font-bold text-darkblue'>Technologies used</h4>
      <p><span className='font-bold'>Front:</span> TailwindCSS, NextJs, Typescript</p>
      <p><span className='font-bold'>Back:</span> MySQL, Typescript</p>
      <h4 className='text-lg font-bold text-darkblue'>Project</h4>
      <a href="https://random-wod-generator.vercel.app/" target='_blank' className='font-bold underline cursor-pointer'>Visit live project</a>
      <a href="https://github.com/teresatoledo/rwg-v2" target='_blank' className='font-bold underline cursor-pointer pb-5'>View code</a>
    </div>
    </div>
  )
}

export default Page