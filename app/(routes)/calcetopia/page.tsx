import { CardContent } from '@/components/ui/card'
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Carousel } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import calceMain from '@/public/calceMain.jpg'
import categories from '@/public/categories.jpg'
import section from '@/public/section.jpg'
import offers from '@/public/offers.jpg'
import favorites from '@/public/favorites.jpg'
import cart from '@/public/cart.jpg'
function Page() {
  return (
    <div>
    <div className='flex flex-col justify-center items-center'>
      <Carousel className="max-w-md lg:max-w-xl">
        <CarouselContent >
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={calceMain} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={categories} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={section} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={offers} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={favorites} alt=''/></span></CardContent>
          </CarouselItem>
          <CarouselItem>
            <CardContent className="flex aspect-square items-center justify-center p-6"><span className="text-4xl font-semibold"><Image src={cart} alt=''/></span></CardContent>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <div className='flex flex-col justify-center gap-3 ml-4 sm:mx-16'>
      <h2 className="font-bold  hover:text-darkblue duration-75 delay-75 text-xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Calcetopía</h2>
      <h4 className='text-lg font-bold text-darkblue'>Summary</h4>
      <p>Calcetopía is a website that allows you to buy the most fun and colorful socks online. It not only lets you view all the products the store offers but also filter socks by different categories or even by products that are on sale.</p>
      {/* <p>All personality quiz enthusiasts will find one on the homepage that will let you know which sock you are among all the best sellers, and you can add it directly to your cart.</p> */}
      <p>Each product has a detail page where you can see, in addition to the pictures, a short description and the available sizes. At the bottom of this page, there is a similar products section in case you need any additional help to find your favorite sock.</p>
      <p>It has a favorites section where you can save the socks you liked the most and, of course, it is dynamic. You can remove them or go directly to the product details to see them up close and add them to your cart.</p>
      <p>And, as it should be for an online store, it has a shopping cart where you can add all the products you want. At the top of the screen, there is an icon from which you can always see how many products you have in the cart.</p>
      <p>Thanks to integration with Stripe, Calcetopía has a fictitious but very realistic payment gateway where you can even place an order with fake purchase data.</p>
      <p>And last but not least, you can also find a Frequently Asked Questions section where you can find information, such as the fake purchase data you can use in the payment gateway or other minor details about the website, like the discount code.</p>
      <h4 className='text-lg font-bold text-darkblue'>Technologies used</h4>
      <p><span className='font-bold'>Front:</span> TailwindCSS, Shadcn, NextJs, Typescript, Stripe</p>
      <p><span className='font-bold'>Back:</span> MySQL, Typescript</p>
      <h4 className='text-lg font-bold text-darkblue'>Project</h4>
      <a href="https://calcetopia.vercel.app/" target='_blank' className='font-bold underline cursor-pointer'>Visit live project</a>
      <a href="https://github.com/teresatoledo/calcetopia" target='_blank' className='font-bold underline cursor-pointer pb-5'>View code</a>
    </div>
    </div>
  )
}

export default Page