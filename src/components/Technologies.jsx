import { FaJava, FaPython, FaHtml5 } from "react-icons/fa"
import { RiReactjsLine, RiJavascriptFill } from "react-icons/ri"
import { SiCplusplus, SiAndroidstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
// https://react-icons.github.io/react-icons

const iconVariation = (duration) => ({
    initial: {y:-5},
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, x:0}}
        initial={{x:100, opacity:0}}
        transition={{duration:1, delay:0}}
        className="my-20 text-center text-4xl">Tech Stack</motion.h1>
        <motion.div
        whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5, delay:0}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariation(2.5)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-6xl text-yellow-400"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    Python
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(6)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-6xl text-blue-600"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    Java
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(4)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-6xl text-cyan-500"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    C++
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(2)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <SiAndroidstudio className="text-6xl text-green-500"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    Android Studio
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(5)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-6xl text-blue-600"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    JavaScript
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(2.5)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    React
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(6)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-6xl text-blue-900"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    MySQL
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariation(4)}
                initial="initial"
                animate="animate"
                className="relative group rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-6xl text-red-600"/>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md py-1 px-2">
                    HTML5
                </div>
            </motion.div>
        </motion.div>
    </div>
)
}

export default Technologies