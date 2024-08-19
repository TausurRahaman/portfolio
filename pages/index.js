import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePicture from '../public/images/developer.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tausur Rahaman - A passionate Web Developer, UI/UX Designer.</title>
        <meta name='description' content='Developer portfolio of Tausur' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='col-span-3 md:order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePicture} alt="Tausur"
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                priority
                className="w-full h-auto rounded-2xl" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href={'/Resume.pdf'} target='_blank'
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className='w-6 ml-1' />
                </Link>
                <Link href={'mailto:tausur345@gmail.com'} target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Tausur' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
