
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {Code2, FileText, Folder, Home, Mail, Menu, User, X} from "lucide-react"; // Import icons for the hamburger and close buttons
const links = [
    // Your existing links from nav.js
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
        name : "Contact",
        path : "/contact",
        icon: <Mail className="w-5 h-5" />,
    },

    {
        name : "Work",
        path : "/work",
        icon: <FileText className="w-5 h-5" />,

    },

    {
        name : "Projects",
        path : "/project",
        icon : <Folder className="w-5 h-5" />
    }
];
const MblNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger icon for mobile */}
            <button onClick={toggleMenu} className="xl:hidden z-50 p-2 text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div
                className={`fixed top-0 right-0 h-full w-1/2  bg-background backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } xl:hidden`}>
                <button onClick={toggleMenu} className="xl:hidden absolute z-50 p-2 text-white">
                    <X className="h-6 w-6" />

                </button>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            onClick={toggleMenu} // Close menu on link click
                            className={`flex items-center text-2xl font-semibold capitalize transition-all hover:text-accent ${
                                pathname === link.path ? "text-accent" : "text-white"
                            }`}
                        >
                            {link.icon}
                            <span className="ml-2">{link.name}</span>
                        </Link>

                    ))}
                </div>
            </div>
        </>
    );
};

export default MblNavbar;




{/*"use client"

import {X, Menu, Home, User, Code2, Mail, FileText, Folder} from "lucide-react"
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

const links=[
    {
        name : "Home",
        path : "/",
        icon : <Home className="w-5 h-5" />
    },
    {
        name : "About",
        path : "/about",
        icon : <User className="w-5 h-5" />
    },
    {
        name : "Page",
        path: "/skill",
        icon: <Code2 className="w-5 h-5" />,
    },
    {
        name : "Contact",
        path : "/contact",
        icon: <Mail className="w-5 h-5" />,
    },

    {
        name : "Resume",
        path : "/work",
        icon: <FileText className="w-5 h-5" />,

    },

    {
        name : "Projects",
        path : "/project",
        icon : <Folder className="w-5 h-5" />
    }
];

const MblNavbar = () => {
    const [isOpen, setOpen] =useState(false)
    const pathname = usePathname();

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleMenu}  className="xl:hidden z-50 p-2 text-white">
                {isOpen ? <X className="w-6 h-6 " /> : <Menu className="w-6 h-6" />}
            </button>

            <div className={'fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform ${ isOpen ? "translate-x-0" : "translate-x-full"} xl:hidden '}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {
                        links.map((link , index) =>(
                            <Link
                                key={index}
                                href={link.path}
                                onClick={toggleMenu}
                                className={`text-2xl font-semibold capitalize transition-all hover:text-accent ${
                                    pathname === link.path ? "text-accent" : "text-white"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>



    )
}
export default MblNavbar*/}


