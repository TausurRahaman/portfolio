import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from '../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT);

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='p-12 mb-10 w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

      <Link href={link} target='_blank'
        className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          width={500}
          height={500}
        />
      </Link>
      <div className='w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />

      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          priority
          width={200}
          height={200}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank'
            className='underline text-lg font-semibold md:text-base'
          >
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {

  const [myProjects, setMyProjects] = useState([])

  useEffect(() => {
    const databases = new Databases(client);
    const promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_PROJECT_DATABASE,
      process.env.NEXT_PUBLIC_PROJECT_COLLECTION
    );

    promise.then(function (response) {
      setMyProjects(response.documents.reverse());
    }, function (error) {
      console.log(error); // Failure
    });
  }, [])

  return (
    <>
      <Head>
        <title>Tausur | Projects Page</title>
        <meta name='description' content='Tausur Rahaman. Projects page.' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={"Imagination Trumps Knowledge!"} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

            <div className='col-span-12'>
              {
                myProjects.map((project) => {
                  if (project.Summary !== null) {
                    return (
                      <FeaturedProject
                        key={project.$id}
                        title={project.Title}
                        summary={project.Summary}
                        link={project.Link}
                        type={project.Type}
                        img={project.Image}
                        github={project.Github}
                      />
                    )
                  }
                })
              }
            </div>
            {myProjects.map((project) => {
              if (project.Summary === null) {
                return (
                  <div className='col-span-6 sm:col-span-12' key={project.$id}>
                    <Project
                      title={project.Title}
                      link={project.Link}
                      type={project.Type}
                      img={project.Image}
                      github={project.Github}
                    />
                  </div>
                )
              }
            })}

          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
