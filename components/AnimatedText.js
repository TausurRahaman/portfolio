import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5
    }
  }
}

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className='w-full mx-auto flex py-2 sm:py-0 items-center justify-center overflow-hidden text-center'>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className} dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span key={word + '-' + index}
              className='inline-block'
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          )
        })}
      </motion.h1>
    </div>
  )
}

export default AnimatedText