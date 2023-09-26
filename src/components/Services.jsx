import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Frontend Development',
    description: 'I create user-friendly and visually appealing websites that engage your audience.',
  },
  {
    name: 'Web Performance Optimization',
    description: 'I optimize web pages for speed and performance, ensuring quick load times and smooth user interactions.',
  },
  {
    name: 'Video Editing',
    description: 'I transform raw footage into captivating narratives, bringing stories to life through visuals and sound.',
  },
  {
    name: 'Video Marketing Campaigns',
    description: 'I develop and execute video marketing strategies to enhance your online presence and engagement.',
  },

]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row'>
           {/* text */}
           <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
            > 
              <h2 className='h2 text-accent mb-6'>What I Do</h2>
              <h3 className='h3 max-w-[455px] mb-16'>
              I create stunning websites and captivating video content
              </h3>
           </motion.div>

          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 '
          >
            <div >
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px]
                  flex'
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'
                    >
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                </div>
                )
              }) }
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
};

export default Services;
