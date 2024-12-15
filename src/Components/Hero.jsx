import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/Profile.png"
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap pb-80 ">
            <div className="w-full lg:w-1/2 ">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="flex flex-col items-center lg:items-start">
                <motion.div variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >Sugrish</motion.div>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Software Engineer
                </motion.span>
                <motion.p variants={container(1)} initial="hidden" animate="visible"  className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
            </motion.div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="flex justify-center ">
                    <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} src={profilePic} alt="Sugrish" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero