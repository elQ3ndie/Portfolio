import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'



const About = () => {

  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top'>
          </motion.div>
           {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              Frontend Developer and Video Editor
            </h3>
            <p className='mb-6'>
            I'm a versatile creative professional, skilled in web
             development and video editing. I specialize in crafting
              immersive websites and compelling video narratives to
               engage and inspire. Let's collaborate to bring your
               digital vision to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
