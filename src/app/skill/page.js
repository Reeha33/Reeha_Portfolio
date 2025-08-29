"use client"
import {
    SiReact,
    SiCplusplus,
    SiMysql,
    SiAssemblyscript,
    SiNextdotjs,
    SiTailwindcss,
    SiCanva,
} from "react-icons/si";
import { FaBrain, FaUsers,FaLightbulb}  from "react-icons/fa";

const skills=[
    {
        name: "React.js",
        icon: <SiReact className="text-cyan-400 text-4xl" />
    },
    {
        name: "C++",
        icon: <SiCplusplus className="text-blue-400 text-4xl" />
    },

    {
        name: "Assembly Language",
        icon: <SiAssemblyscript className="text-yellow-400 text-4xl" />
    },

    {
        name: "MySQL",
        icon: <SiMysql className="text-sky-400 text-4xl" />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,

    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
    },

    {
        name: "Canva Design",
        icon: <SiCanva className="text-cyan-400 text-4xl" />
    },
    { name: "Critical Thinking", icon: <FaBrain className="text-white text-4xl" />, },
    { name: "Problem-Solving", icon: <FaLightbulb className="text-white text-4xl" />, },
    { name: "Team Collaboration", icon: <FaUsers className="text-white text-4xl" />, },


];


const Skills=()=>{
    return (
        <section className="py-20 min-h-screen px-24">
            <div className="container mx-auto px-8 text-center ">
                <h2 className="text-4xl font-bold inline-block border-b-4 border-accent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:scale-110 group">
                    <span className="text-white">My  </span>
                    <span className="text-accent gap-2">Skills</span>
                </h2>
                <p className="text-white/70 mt-3 text-xl">
                    A mix of technical expertise and soft skills that drive my work.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 left-0 gap-2 mt-12">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=" p-6 flex flex-col items-center justify-center text-white hover:scale-105 hover:drop-shadow-lg hover:text-accent transition-transform"
                        >
                            {skill.icon}
                            <p className="mt-3 text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>

            </div>

        </section>

    )

}
export default Skills;
