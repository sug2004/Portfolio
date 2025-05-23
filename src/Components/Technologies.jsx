import { RiReactjsLine } from "react-icons/ri"
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNodedotjs } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
// import { SiKeras } from "react-icons/si";
import { motion } from "framer-motion";
import { RiNextjsLine } from "react-icons/ri";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1  whileInView={{ opacity: 1, y: 0 }}  initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">
            Technologies
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-4" >
            <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <RiNextjsLine  className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-yellow-500" />
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <BiLogoMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <SiNodedotjs className="text-7xl text-green-500 " />
            </motion.div>            
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-500" />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies