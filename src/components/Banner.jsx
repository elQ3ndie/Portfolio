import React from 'react';
import Image from '../assets/avatar.svg'
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center,'  id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
        
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[90px] pt-20'
            >
            ANDREW <span>MIRACLE</span>
            </motion.h1>

            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Video Editor',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Welcome to my portfolio! I'm a versatile creative who 
              thrives at the intersection of web development and video editing. 
              With a passion for crafting immersive digital experiences and telling 
              compelling visual stories, I bring a unique blend of technical expertise 
              and creative flair to every project.
            </motion.p>


            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='https://github.com/elQ3ndie'>
                <FaGithub />
              </a>
              <a href='https://twitter.com/elQ3ndie'>
                <FaTwitter />
              </a>
              <a href='https://discord.com/users/874646357355425803'>
                <FaDiscord />
              </a>
            </motion.div>
          </div>  

          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial='hidden' 
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div> 
    </section>
  )
};

export default Banner;
