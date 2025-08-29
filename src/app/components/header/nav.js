"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import {Home ,User, Code2 , Mail,FileText , Folder } from "lucide-react"

const links=[
    {
        name : "Home",
        path : "/",
        icon : <Home className="w-5 h-5" />
    },

    {
        name : "Skills",
        path: "/skill",
        icon: <Code2 className="w-5 h-5" />,
    },
    {
        name : "Projects",
        path : "/project",
        icon : <Folder className="w-5 h-5" />
    },
    {
        name : "Work",
        path : "/work",
        icon: <FileText className="w-5 h-5" />,

    },
    {
        name : "Contact",
        path : "/contact",
        icon: <Mail className="w-5 h-5" />,
    },



   ];

const Nav = () => {
    const pathname = usePathname();
    return (
        <div className="flex gap-8">
            {links.map((link,index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`flex items-center gap-2 ${pathname === link.path ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </Link>
                );
            })}
        </div>
    )
}

export default Nav;
