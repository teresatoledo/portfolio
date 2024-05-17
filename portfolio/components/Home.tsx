import React from 'react'
import blackLogo from '@/public/blackLogo.jpg'
import logoAzul from '@/public/logoAzul.png'
import Image from 'next/image'
function Home() {
  return (
		<div
			className="flex flex-col md:flex-row items-start justify-center pb-10"
			id="home"
		>
			<Image 	className="h-60 md:h-72 lg:h-80 pt-8 order-2 md:order-1 hidden dark:flex"
				src={blackLogo}
				alt="Logo"/>
        <Image 	className="h-60 md:h-72 lg:h-80 pt-8 order-2 md:order-1 dark:hidden"
				src={logoAzul}
				alt="Logo"/>
			<div className="flex flex-col items-center px-5 lg:pr-10 md:order-2">
				<h3 className="py-10 font-main font-bold text-3xl">
					Hi! I'm <span className="text-darkblue">Teresa Toledo</span>
				</h3>
				<p className="font-main text-md text-cream pr-3">
					As a{' '}
					<span className="font-bold">
						junior full-stack developer
					</span>{' '}
					with a background in translation, I bring a unique blend of
					skills to the table. My experience in translation has
					equipped me with solid{' '}
					<span className="font-bold">language proficiency</span> and
					invaluable traits such as{' '}
					<span className="font-bold">
						attention to detail, self-learning, communication and
						project management.
					</span>{' '}
					Explore my work to witness how these diverse skills converge
					to create innovative solutions!
				</p>
			</div>
		</div>
	);
}

export default Home