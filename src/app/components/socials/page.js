"use client"

import Link from "next/link";
import {FaGithub, FaLinkedin } from "react-icons/fa";


const Socials =[
    {
        icon: <FaGithub className="h-7 w-7" />,
        path: "https://github.com/Reeha33",
    },
    {
        icon: <FaLinkedin className="h-7 w-7 " />,
        path: "https://www.linkedin.com/in/reehabatool9866",
    }
]
const Social = () => {
    return (
        <div className="flex space-x-4 py-4 px-5  ">
            {Socials.map((social,index) => {
               return (<Link key={index} href={social.path} target="_blank" rel="noopener noreferrer"  className="border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-green-500/10 hover:text-primary hover:transition-all duration-500 w-11 h-11">
                   {social.icon}
               </Link>)
            })
            }
        </div>
    )
}

export default Social;
