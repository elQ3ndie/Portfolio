import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10' >

          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Projects
              </h2>
              <p className='max-w-sm mb-16'>
              Take a look at a selection of my recent projects
              that highlight my skills in web development and video editing
              </p>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <a href='https://frontend-stage2-orpin.vercel.app/' target="_blank">
                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24  transition-all duration-500 z-50'
                >
                  <span className='text-gradient'>
                    Web Development
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14  transition-all duration-700 z-50'
                >
                  <span className='text-3xl text-white'>Movie Catalog</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
           className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <a target="_blank" href='https://drive.google.com/file/d/1BBJa2tEu0qkLrsxVO09jdgS6IIFQJ9_U/view?usp=drive_link'>
                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24  transition-all duration-500 z-50'
                >
                  <span className='text-gradient'>
                    Video Editing
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14  transition-all duration-700 z-50'
                >
                  <span className='text-3xl text-white'>Trailer</span>
                </div>
              </a>

            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-xl'
            >
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'></div>
              {/* img */}
              <a href='https://task3-frontend.vercel.app/' target="_blank">
                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24  transition-all duration-500 z-50'
                >
                  <span className='text-gradient'>
                    Frontend Development
                  </span>
                </div>
                {/* title */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14  transition-all duration-700 z-50'
                >
                  <span className='text-3xl text-white'>Image Gallery</span>
                </div>
              </a>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
};

export default Work;
