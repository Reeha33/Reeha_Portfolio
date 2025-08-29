"use client"

import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import Stairs from "../header/stair"; // Ensure the path is correct

const StairTransition = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 pointer-events-none z-40 flex">
                    <Stairs/>
                </div>
            </div>
        </AnimatePresence>
    )
}

export default StairTransition;
