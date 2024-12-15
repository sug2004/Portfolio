import { ACHIVEMENTS } from "../constants"
import { motion } from "framer-motion"

// function Achivements() {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl">Achivements</h1>
//       <div>
//         {ACHIVEMENTS.map((achivement, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <div className="w-full max-w-xl lg:w-3/4" >
//                     <h6 className="mb-2 font-semibold" >{achivement.title}</h6>
//                     <p className="mb-4 text-neutral-400" >{achivement.description}</p>
//                     {achivement.technologies.map((tech, i) => (
//                       <span key={i} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
//                         {tech}
//                       </span>
//                     ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Achivements



function Achivements() {
    return (
        <div className="border-b border-neutral-900 pb-4">
          <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}  className="my-20 text-center text-4xl">Achivements</motion.h1>
          <div>
            {ACHIVEMENTS.map((achivement, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
                  <img
                    src={achivement.image}
                    width={150}
                    height={150}
                    alt={achivement.title}
                    className="mb-6 rounded"
                  />
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4" >
                        <h6 className="mb-2 font-semibold" >{achivement.title}</h6>
                        <p className="mb-4 text-neutral-400" >{achivement.description}</p>
                        {achivement.technologies.map((tech, i) => (
                          <span key={i} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                            {tech}
                          </span>
                        ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Achivements