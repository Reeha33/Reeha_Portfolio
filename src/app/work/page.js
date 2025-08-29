"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const workExperience = [
    {
        role: "Official Member",
        company: "IEEE (Institute of Electrical and Electronics Engineers)",
        description:
            "Actively participated in IEEE community activities, contributing to technical events and networking.",
        date: "2025 - Present",
        image: "/assets/IEEE.jpg",
    },
    {
        role: "Session Coordinator",
        company: "Rinova International",
        description:
            "Coordinated sessions, managed schedules, and ensured smooth event flow for Rinova International.",
        date: "2023 - Present",
        image: "/assets/session.jpg",
    },
    {
        role: "Assistant Event Manager",
        company: "Namal Literary & Debating Society",
        description:
            "Assisted in organizing events, managing logistics, and coordinating student participation.",
        date: "2024 - 2025",
        image: "/assets/manager.jpg",
    },
    {
        role: "Teacher Assistant (OOP)",
        company: "Namal University Mianwali",
        description:
            "Guided students in Object-Oriented Programming concepts and assignments.",
        date: "2024-2025",
        image: "/assets/OOP.jpg",
    },
    {
        role: "Teacher Assistant (Physics Lab)",
        company: "Namal University Mianwali",
        description:
            "Assisted in conducting physics experiments and helping students understand lab work.",
        date: "2023-2024",
        image: "/assets/lab.jpg",
    },
];

const Work = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="py-20 bg-background"
            id="work"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 border-b-4 border-accent transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:scale-110 inline-block group">
                    <span className="text-white">Professional </span>
                    <span className="text-accent">Journey</span>
                </h2>
                <p className="text-gray-200 text-lg mb-12 max-w-2xl mx-auto">
                    A glimpse of the roles, responsibilities, and experiences that have shaped my career path.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workExperience.map((work, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:bg-gray-800"
                        >
                            <div className="relative w-full h-40">
                                <Image
                                    src={work.image}
                                    alt={work.role}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {work.role}
                                </h3>
                                <p className="text-accent font-medium">{work.company}</p>
                                <p className="text-gray-300 text-sm mb-4">
                                    {work.description}
                                </p>
                                <span className="text-gray-200 text-xs">{work.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
