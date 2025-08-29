"use client"

import Nav from "./nav"
import MblNavbar from "@/app/components/header/MblNavbar";

const Navbar = () => {
    return (
        <header className="py-2 xl:py-8 bg-background text-white  border-b-2">
            <div className="container mx-h-2 flex items-center justify-between py-sm px-sm">
                <h1 className="text-base font-semibold  hover:text-accent transition-all">
                    Reeha&#39;s Portfolio<span className="text-accent">.</span>
                </h1>
                <div className="hidden xl:flex">
                    <Nav />
                </div>
                <div className="xl:hidden">
                    <MblNavbar />
                </div>
            </div>
        </header>
    )
}

export default Navbar;
