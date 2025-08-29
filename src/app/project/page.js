"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Keylogger",
        description: "A keylogger built as a system monitoring experiment.",
        tags: ["Assembly Language"],
        image: "/assets/keylogger.jpg",
        link: "#",
    },
    {
        title: "History of Pakistan Web App",
        description: "A web application to showcase the history of Pakistan.",
        tags: ["React.js", "Tailwind", "MYSQL"],
        image: "/assets/history.jpg",
        link: "#",
    },
    {
        title: "LMS Console App",
        description: "A console-based Learning Management System (LMS).",
        tags: ["C++", "OOP"],
        image: "/assets/lms.jpg",
        link: "#",
    },
    {
        title: "Employee Payroll System",
        description: "Payroll management system built in C++.",
        tags: ["C++", "File Handling"],
        image: "/assets/payroll.jpg",
        link: "#",
    },
    {
        title: "File Compression Tool",
        description: "A tool to compress and decompress files.",
        tags: ["C++", "Algorithms"],
        image: "/assets/compression.jpg",
        link: "#",
    },
    {
        title: "Chess Game",
        description: "A console-based Chess game implementing classic rules.",
        tags: ["C++", "Algorithms"],
        image: "/assets/chess.jpg",
        link: "#",
    },
    {
        title: "Snake and Ladder Game",
        description: "A fun console-based Snake and Ladder game built with C++.",
        tags: ["C++", "OOP"],
        image: "/assets/snake.jpg",
        link: "#",
    },
    {
        title: "Tic-Tac-Toe",
        description: "A two-player Tic-Tac-Toe game with win-checking logic.",
        tags: ["C++", "Game Dev"],
        image: "/assets/tictactoe.jpg",
        link: "#",
    },
];

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="py-20 bg-background"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold mb-4 border-b-4 border-accent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:scale-110 inline-block group">
                    <span className="text-white">Projects & </span>
                    <span className="text-accent">Creations</span>
                </h2>
                <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
                    Explore some of my best work, innovative solutions and creative
                    projects built using modern technologies like C++, React, and more.
                </p>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <div className="relative w-full h-40">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-200 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
