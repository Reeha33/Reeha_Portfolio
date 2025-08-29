"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative mb-[280px] lg:mb-0 lg:mt-0 mt-24">
            {/* This container handles the mobile centering */}
            <div className="flex justify-center items-center h-full w-full lg:absolute lg:right-0">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
                    className="absolute z-10 w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] lg:right-5 mix-blend-lighten"
                >
                    <div className="relative w-full h-full rounded-full overflow-hidden ">
                        <Image
                            src="/assets/Reeha.jpg"
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Circle */}
                <motion.div className="absolute z-0 w-[250px] h-[300px] xl:w-[350px] xl:h-[350px] lg:right-0">
                    <motion.svg
                        className="w-full h-full relative"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="260"
                            stroke="#00ff99"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360]
                            }}
                            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                        />
                    </motion.svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Photo;
