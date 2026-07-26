import { motion } from "framer-motion";

import {
    RiNextjsLine,
    RiReactjsLine,
} from "react-icons/ri";

import {
    SiTypescript,
    SiNodedotjs,
    SiNestjs,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiPython,
    SiGit,
    SiAmazonwebservices,
    SiRedis,
} from "react-icons/si";

import { TbBrain } from "react-icons/tb";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const technologies = [
    {
        Icon: RiNextjsLine,
        color: "text-white",
        duration: 4.5,
        title: "Next.js",
    },
    {
        Icon: RiReactjsLine,
        color: "text-cyan-400",
        duration: 2.5,
        title: "React",
    },
    {
        Icon: SiTypescript,
        color: "text-blue-500",
        duration: 3,
        title: "TypeScript",
    },
    {
        Icon: SiNodedotjs,
        color: "text-green-500",
        duration: 3.5,
        title: "Node.js",
    },
    {
        Icon: SiNestjs,
        color: "text-red-500",
        duration: 4,
        title: "NestJS",
    },
    {
        Icon: SiPostgresql,
        color: "text-sky-500",
        duration: 4.5,
        title: "PostgreSQL",
    },
    {
        Icon: SiMongodb,
        color: "text-green-600",
        duration: 5,
        title: "MongoDB",
    },

    {
        Icon: SiPython,
        color: "text-yellow-400",
        duration: 4,
        title: "Python",
    },
    {
        Icon: TbBrain,
        color: "text-purple-500",
        duration: 3,
        title: "AI • OpenAI • LangChain • LangGraph • RAG",
    },
    {
        Icon: SiDocker,
        color: "text-blue-400",
        duration: 3.5,
        title: "Docker",
    },
    {
        Icon: SiAmazonwebservices,
        color: "text-orange-400",
        duration: 4.2,
        title: "AWS",
    },
    {
        Icon: SiRedis,
        color: "text-red-500",
        duration: 3.7,
        title: "Redis",
    },
    {
        Icon: SiGit,
        color: "text-orange-500",
        duration: 4.5,
        title: "Git",
    },
];

function Technologies() {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl font-semibold"
            >
                Technologies
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-5">
                {technologies.map(({ Icon, color, duration, title }, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(duration)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1 }}
                        title={title}
                        className="rounded-2xl border border-neutral-700 bg-neutral-900/40 p-5 transition-all hover:border-cyan-400"
                    >
                        <Icon className={`text-7xl ${color}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;