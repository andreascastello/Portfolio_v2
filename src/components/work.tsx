"use client"

import {useState, useRef} from "react"
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"
import {ProjectOverlay} from "./project-overlay"

const projects = [
    {
        title: "LES FILLES DU SUD",
        type: "UX/UI Design",
        image: "/filles-du-sud.png",
        txt: "Une maquette  sur mesure pour un institut de beauté",
        href: "#"
    },
    {
        title: "SARAH GRINDLER",
        type: "Design & Website Development",
        image: "/sarah-grindler.png",
        txt : "Un site vitrine pour une artiste",
        href: "#"
    },
    {
        title: "KYUMI AGENCY",
        type: "UX/UI Design & Website Development",
        image: "/kyumi.png",
        txt: "Un site vitrine pour une agence d'aide au animaux",
        href: "#"
    },
    {
        title: "ANDREAS CASTELLO",
        type: "UX/UI Design",
        image: "/andreas.jpeg",
        txt: "Un site vitrine pour moi",
        href: "#"
    },
    {
        title: "PAUSE COOK",
        type: "UX/UI Design & Development",
        image: "/pausecook.png",
        txt: "Un site de recettes de cuisine",
        href: "#"
    }
]

export function Work() {
    const [selectedProject, setSelectedProject] = useState<{
        project: typeof projects[0]
        rect: DOMRect
    } | null>(null)

    const handleClick = (project: typeof projects[0], ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
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
            <section id="work" className={`py-20 ${selectedProject ? 'pointer-events-none' : ''}`}>
                <div className="max-w-8xl mx-auto px-6 md:px-8">
                    <div className="mb-8 md:mb-16">
                        <div className="w-full h-px bg-white/70 mb-2"/>
                        <h2 className="text-base font-main">Selected works</h2>
                    </div>
                    <div className="space-y-32 md:space-y-32">
                        {projects.map((project, index) => {
                            const imageRef = useRef<HTMLDivElement>(null)

                            return (
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
                                                    ref={imageRef}
                                                    onClick={() => handleClick(project, imageRef)}
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
                                            </>
                                        ) : index % 2 === 1 ? (
                                            <>
                                                <div
                                                    className="col-span-12 lg:col-span-4 lg:col-start-2 cursor-pointer"
                                                    ref={imageRef}
                                                    onClick={() => handleClick(project, imageRef)}
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
                                                <div className="col-span-12 lg:col-span-2 lg:col-start-6">
                                                    <h3 className="text-3xl md:text-4xl font-main mb-4">{project.title}</h3>
                                                    <p className="text-gray-300 font-main">{project.type}</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className="col-span-12 lg:col-span-4 lg:col-start-6 cursor-pointer"
                                                    ref={imageRef}
                                                    onClick={() => handleClick(project, imageRef)}
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
                            )
                        })}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectOverlay
                        project={selectedProject.project}
                        rect={selectedProject.rect}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
