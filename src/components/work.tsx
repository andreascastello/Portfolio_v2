"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectOverlay } from "./project-overlay"

const projects = [
    {
        title: "BEAUTY INSTITUTE",
        type: "UX/UI Design",
        image: "/Beauty_Institute.webp",
        txt: "Une maquette  sur mesure pour un institut de beauté",
        href: "https://www.behance.net/gallery/216276401/Beauty-Institute"
    },
    {
        title: "SARAH GRINDLER",
        type: "UX/UI Design, Development",
        image: "/sarah-grindler.png",
        txt : "Un site vitrine pour une artiste",
        href: "#"
    },
    {
        title: "YVENT",
        type: "UX/UI Design, Development",
        image: "/yvent.png",
        txt: "Une application calendrier pour les événements du campus Ynov",
        href: "https://www.behance.net/gallery/216276681/Yvent"
    },
    {
        title: "PAUSE COOK",
        type: "UX/UI Design, Development",
        image: "/pausecook.png",
        txt: "Un site de recettes de cuisine",
        href: "https://www.behance.net/gallery/216275981/Pause-Cook"
    },
    {
        title: "KYUMI AGENCY",
        type: "UX/UI Design, Development",
        image: "/kyumi.png",
        txt: "Une application mobile d'aide au animaux",
        href: "https://www.behance.net/gallery/216278411/Kyumi-Agency"
    }
]

export function Work() {
    const [selectedProject, setSelectedProject] = useState<{
        project: typeof projects[0]
        rect: DOMRect
    } | null>(null)

    const imageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        imageRefs.current = imageRefs.current.slice(0, projects.length)
    }, [])

    const handleClick = (project: typeof projects[0], index: number) => {
        const ref = imageRefs.current[index]
        if (ref) {
            const rect = ref.getBoundingClientRect()
            setSelectedProject({ project, rect })
            document.body.classList.add('overflow-hidden') // Désactiver le scroll
        }
    }

    const handleClose = () => {
        setSelectedProject(null)
        document.body.classList.remove('overflow-hidden') // Réactiver le scroll
    }

    return (
        <>
            <section id="works" className={`py-16 md:py-20 ${selectedProject ? 'pointer-events-none' : ''}`}>
                <div className="max-w-8xl mx-auto px-6 md:px-8">
                    <div className="mb-8 md:mb-16">
                        <div className="w-full h-px bg-white/70 mb-2"/>
                        <h2 className="text-base font-main">Projets</h2>
                    </div>
                    <div className="space-y-32 md:space-y-32">
                        {projects.map((project, index) => (
                            <div key={project.title} className="block group">
                                <div className="grid grid-cols-12 gap-8 items-start">
                                    {index === 0 ? (
                                        <>
                                            <div className="col-span-12 lg:col-span-2 lg:col-start-3">
                                                <h3 className="text-3xl md:text-4xl font-main mb-4">{project.title}</h3>
                                                <p className="text-gray-300 font-main">{project.type}</p>
                                            </div>
                                            <div
                                                className="col-span-12 lg:col-span-4 lg:col-start-5 cursor-pointer"
                                                ref={(el: HTMLDivElement | null) => { imageRefs.current[index] = el }}
                                                onClick={() => handleClick(project, index)}
                                            >
                                                <motion.div
                                                    layoutId={`project-${project.title}`}
                                                    className="relative h-[200px] w-full overflow-hidden rounded-lg"
                                                    transition={{
                                                        type: "easeInOut",
                                                        duration: 1 // Durée totale fixée à 1 seconde
                                                    }}
                                                >
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                                    />
                                                </motion.div>
                                            </div>
                                        </>
                                    ) : index % 2 === 1 ? (
                                        <>
                                            <div
                                                className="col-span-12 lg:col-span-4 lg:col-start-2 cursor-pointer"
                                                ref={(el: HTMLDivElement | null) => { imageRefs.current[index] = el }}
                                                onClick={() => handleClick(project, index)}
                                            >
                                                <motion.div
                                                    layoutId={`project-${project.title}`}
                                                    className="relative h-[200px] w-full overflow-hidden rounded-lg"
                                                    transition={{
                                                        type: "easeInOut",
                                                        duration: 1 // Durée totale fixée à 1 seconde
                                                    }}
                                                >
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-2 lg:col-start-6">
                                                <h3 className="text-3xl md:text-4xl font-main mb-4">{project.title}</h3>
                                                <p className="text-gray-300 font-main">{project.type}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="col-span-12 lg:col-span-4 lg:col-start-6 cursor-pointer"
                                                ref={(el: HTMLDivElement | null) => { imageRefs.current[index] = el }}
                                                onClick={() => handleClick(project, index)}
                                            >
                                                <motion.div
                                                    layoutId={`project-${project.title}`}
                                                    className="relative h-[200px] w-full overflow-hidden rounded-lg"
                                                    transition={{
                                                        type: "spring",
                                                        damping: 30,
                                                        stiffness: 120,
                                                        duration: 1 // Durée totale fixée à 1 seconde
                                                    }}
                                                >
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                                                    />
                                                </motion.div>
                                            </div>
                                            <div className="col-span-12 lg:col-span-2 lg:col-start-10">
                                                <h3 className="text-3xl md:text-4xl font-main mb-4">{project.title}</h3>
                                                <p className="text-gray-300 font-main">{project.type}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectOverlay
                        project={selectedProject.project}
                        rect={selectedProject.rect}
                        onCloseAction={handleClose}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

