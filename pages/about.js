import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../public/images/developer.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 5000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Tausur | About Page</title>
        <meta name='description' content='Tausur Rahaman. About page.' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={'Passion Fuels Purpose!'} className='!text-8xl mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                Tausur Rahaman, an accomplished web developer and visionary UI/UX Designer, has sculpted a dynamic career in the realm of digital innovation. Armed with a strong foundation in Computer Science, Tausur's journey unfolds like an intricate code, weaving technical prowess and artistic finesse.
              </p>
              <p className='my-4 font-medium'>
                Throughout a trajectory defined by innovation, Tausur's collaborations resonate with brilliance. From crafting seamless websites to orchestrating user-centric interfaces, each project is a testament to Tausur's dedication to reshaping the digital landscape.
              </p>
              
            </div>
            <div className='col-span-3 md:order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="Tausur"
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
                priority
                className="w-full h-auto rounded-2xl" />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
              </div>

            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default About
