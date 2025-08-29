"use client";

import "./globals.css";
import { Download } from "lucide-react";
import Social from "@/app/components/socials/page";
import Photo from "@/app/components/photo/page";
import Page from "@/app/skill/page.js";

const Home = () => {
    return (
        <section className="h-full py-12 px-48 bg-background">
            <div className="container mx-auto h-full px-8">
                <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24 gap-8">
                    <div className="text-center xl:text-left order-2 xl:order-none lg:mt-0 -mt-24">
                        <span className="text-2xl text-accent">Web Developer</span>
                        <h1 className="h1 mb-6 text-text-primary">
                            Hello I&#39;m <br /> <span className="text-accent">Reeha Batool</span>
                        </h1>
                        <p className="text-center xl:w-1/2 mb-9 text-white">
                            A Computer Science student with expertise in C++ and Assembly
                            Language. Skilled in Object-Oriented Programming and System
                            Development. Passionate about building efficient, scalable
                            software solutions and problem-solving in real-world applications.
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => window.open("/assets/Resume.jpg", "_blank")}
                                className="group flex items-center gap-2 rounded-full border border-accent px-6 py-2 text-accent transition hover:bg-accent/10"
                            >
                <span className="uppercase font-semibold whitespace-nowrap">
                  Download Resume
                </span>
                                <Download
                                    className="text-accent group-hover:translate-y-0.5 transition-transform"
                                    size={18}
                                ></Download>
                            </button>
                            <Social />
                        </div>
                    </div>
                    <div>
                        <Photo />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
