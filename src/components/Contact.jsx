import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-25}}
    transition={{duration:1,delay:0}}
    className="pb-4">
        <div className="flex justify-center items-center">
            <h6 className="text-1xl text-center mr-5 mt-5">Developed using React.js, Tailwind CSS, Framer Motion</h6>
            <span className="text-1xl text-center ml-5 mt-5 text-4xl"><a href="https://linkedin.com/in/harsh-palresha" target="_blank"><FaLinkedin color='white'/></a></span>
        </div>
    </motion.div>
  )
}

export default Contact