"use client"
import React, { useRef } from 'react';
import { Button } from './ui/button';

function Contact() {
  const emailRef = useRef(null);

  const copyEmailToClipboard = () => {
    if (emailRef.current) {
      emailRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className='max-w-6xl mx-auto sm:px-24 mb-10 px-6' id="contact">
      <h2 className="font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Contact</h2>
      <p>Thank you for taking the time to review my portfolio! If you have any recommendations, comments, or would like to learn more about me, feel free to reach out via my social media channels or through email.</p>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <div className='flex gap-4 pt-2'>
          <Button>LinkedIn</Button>
          <Button>GitHub</Button>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap justify-center gap-2'>
        <input
          ref={emailRef}
          type="text"
          value="teresatoledolara@gmail.com"
          readOnly
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 h-fit"
        />
        <Button onClick={copyEmailToClipboard}>Copy email</Button>
        
        </div>
        
      </div>
      
    </div>
  );
}

export default Contact;
