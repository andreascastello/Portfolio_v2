"use client"

import {motion, AnimatePresence} from 'framer-motion'
import {ArrowLeft} from 'lucide-react'
import Image from 'next/image'
import {AuroraBackground} from '@/components/aurora-background'
import {useState, useEffect} from 'react'

interface Project {
    title: string
    type: string
    txt: string
    image: string
}

interface ProjectOverlayProps {
    project: Project | null
    rect: DOMRect | null
    onClose: () => void
}

export function ProjectOverlay({project, rect, onClose}: ProjectOverlayProps) {
    const [isExiting, setIsExiting] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    if (!project || !rect) return null

    const handleClose = () => {
        setIsExiting(true)
    }

    return (
        <AnimatePresence mode="wait" onExitComplete={onClose}>
            {!isExiting && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0, transition: {delay: 1.4, duration: 0.5}}}
                    className="fixed inset-0 z-[60]"
                >
                    <div className="absolute inset-0 bg-background z-[54]"></div>
                    <AuroraBackground className="absolute inset-0 z-[55]" scrollOpacity={1}/>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0, transition: {delay: 1.2, duration: 0.3}}}
                        className="absolute inset-0 bg-black/10 z-[56]"
                    ></motion.div>

                    <motion.div
                        initial={{
                            width: rect.width,
                            height: rect.height,
                            top: rect.top,
                            left: rect.left
                        }}
                        animate={{
                            width: isMobile ? "80%" : "50%",
                            height: isMobile ? "20%" : "50%",
                            top: isMobile ? "50%" : "50%",
                            bottom: isMobile ? "0" : "auto",
                            left: isMobile ? "50%" : "70%",
                            translateX: "-50%",
                            translateY: isMobile ? "0" : "-50%"
                        }}
                        exit={{
                            width: rect.width,
                            height: rect.height,
                            top: rect.top,
                            left: rect.left,
                            translateX: "0%",
                            translateY: "0%",
                            transition: {
                                type: "easeInOut",
                                damping: 20,
                                stiffness: 80,
                                duration: 0.8,
                                delay: 0.6
                            }
                        }}
                        transition={{
                            type: "easeInOut",
                            damping: 20,
                            stiffness: 80,
                            duration: 0.8
                        }}
                        className="absolute rounded-lg overflow-hidden z-[58]"
                    >
                        <a href="#" className="block w-full h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover cursor-pointer"
                            />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{y: -window.innerHeight}}
                        animate={{y: "0"}}
                        exit={{
                            y: -window.innerHeight,
                            transition: {
                                type: "spring",
                                damping: 20,
                                stiffness: 80,
                                duration: 0.6,
                                delay: 0
                            }
                        }}
                        transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 80,
                            duration: 0.6,
                            delay: 0.8
                        }}
                        className="absolute left-0 top-0 md:h-full h-auto md:w-[400px] w-full bg-[#424867] p-8 md:p-12 flex flex-col md:justify-start justify-between z-[57]"
                    >
                        <div className={isMobile ? "" : "absolute bottom-[25%] pr-4"}>
                            <button
                                onClick={handleClose}
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                <Image src="/arrow_exit.svg"
                                       alt="back"
                                       width={150}
                                       height={174}
                                />

                            </button>
                            <div className={isMobile ? "mt-auto" : ""}>
                                <h2 className="text-3xl md:text-4xl font-main mb-2 md:mb-4 text-white">{project.title}</h2>
                                <p className="text-white/80 uppercase font-main">{project.txt}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0, transition: {delay: 1.3, duration: 0.4}}}
                        className="absolute inset-0 bg-black/50 z-[56]"
                    ></motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 50}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="absolute bottom-28 right-1/2 md:bottom-14 md:right-32 flex items-center z-[59]"
                    >
                        <a
                            href="#"
                            className="relative flex flex-col items-center justify-center border border-white/50 rounded-lg px-6 py-4 text-center hover:text-gray-300 transition-colors"
                        >
                            <span className="text-white text-sm font-main uppercase hover:text-gray-300 transition-colors">Voir plus</span>
                            <div className="absolute -top-9 -right-9">
                                <Image
                                    src="/arrow3.svg"
                                    alt="see more"
                                    width={35}
                                    height={35}
                                    className="cursor-pointer"
                                />
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

