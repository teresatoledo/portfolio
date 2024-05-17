import React from 'react'

function Education() {
  return ( 
  <div className='max-w-6xl px-6 mx-auto sm:px-24' id="education">
    <h2 className="font-main font-bold  hover:text-darkblue duration-75 delay-75 text-2xl pt-3 hover:text-3xl md:text-3xl md:pt-8 md:hover:text-4xl pb-8">Education</h2>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2023-March 2024</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web development bootcamp (Adalab)</h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">During the bootcamp, I primarily focused on mastering the fundamentals of programming. The main emphasis during these months was on front-end development, where I learned HTML and CSS/SASS. I progressed further by creating dynamic websites with JavaScript and React. Additionally, I expanded my skills in the front-end domain by acquiring knowledge of Node.js, MySQL, and MongoDB.</p>
          
      </li>
      <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022-June 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master's degree in medical translation (AulaSIC)</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Throughout this year, I honed my existing skills in medical translation and also delved into the realm of veterinary translation. In addition to translation expertise, I cultivated essential skills crucial for this delicate field: precision and meticulous attention to detail..</p>
      </li>
      <li className="ms-4 mb-10">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021-June 2022</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master's degree in software translation (ISTRAD)</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">During this year, I acquired a solid understanding of HTML and CSS fundamentals. Additionally, I immersed myself fully in the realm of software, website, and mobile app translation, familiarizing myself with the necessary processes for website localization.</p>
      </li>
      <li className="ms-4 mb-10">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2017-June 2021</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor's degree in translation and interpreting (University of Granada)</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Over these past four years, I've immersed myself in various fields of translation: scientific-technical, legal, video game localization, and website localization. Additionally, I seized the opportunity to spend a year with the <span className='font-bold'>Erasmus program at the University of the West of Scotland</span>, where I further developed and consolidated my English skills.</p>
      </li>
  </ol>
</div>
  )
}

export default Education