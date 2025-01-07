'use client'
import Image from "next/image"
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="min-h-screen w-full flex flex-col justify-end pb-8">
            {/* Footer */}
            <div className="max-w-8xl px-4 md:px-8 w-full flex flex-col items-end space-y-8 z-20">
                {/* Titre */}
                <h1 className="font-main text-6xl md:text-9xl text-white text-right font-semibold pb-56 md:pb-24">
                    PARLONS<br />PROJET !
                </h1>

                {/* Bouton + Liens */}
                <div className="w-full flex flex-col md:flex-row items-end md:justify-between relative gap-12 md:gap-6">
                    {/* Bouton Contact */}
                    <motion.div
                        initial={{ height: 'auto' }}
                        animate={{
                            height: isExpanded
                                ? window.innerWidth < 768 // Condition pour mobile
                                    ? '300px'
                                    : '400px'
                                : 'auto',
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="relative group w-full md:w-1/2 border rounded-lg overflow-hidden"
                    >
                        <div
                            className="flex flex-col justify-between h-full p-4 md:p-8 cursor-pointer"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {/* Texte principal (reste en bas) */}
                            <div className="mt-auto">
                                <h2 className="font-main text-3xl md:text-4xl text-white mb-2 md:mb-4 font-bold">
                                    CONTACTEZ MOI !
                                </h2>
                                <p className="font-main text-gray-300 text-base md:text-xl">
                                    Vous avez un projet en tête ou une idée à développer ? Faisons équipe pour concevoir
                                    quelque chose d’unique, sur-mesure et à votre image.
                                </p>
                                <div className="flex justify-end mt-4">
                                    <motion.svg
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </motion.svg>
                                </div>
                            </div>

                            {/* Contenu additionnel */}
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute top-0 left-0 w-full bg-[#4F4F76] p-4 md:p-12 rounded-lg shadow-lg"
                                >
                                    <div className="flex flex-col space-y-4">
                                        <a href="tel:0782410906" className="flex items-center gap-4 text-white hover:opacity-80">
                                            <Image
                                                src="/phone.svg"
                                                alt="Phone Icon"
                                                width={24}
                                                height={24}
                                            />
                                            <span className="font-secondary text-base md:text-xl">07 82 41 09 06</span>
                                        </a>
                                        <a href="mailto:andreas.castello06@gmail.com" className="flex items-center gap-4 text-white hover:opacity-80">
                                            <Image
                                                src="/mail.svg"
                                                alt="Mail Icon"
                                                width={24}
                                                height={24}
                                            />
                                            <span className="font-secondary text-base md:text-xl">andreas.castello06@gmail.com</span>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Liens avec barre blanche */}
                    <div className="flex flex-col w-full md:w-1/2">
                        {/* Barre blanche ajustée */}
                        <div className="relative w-full">
                            <div className="absolute border-t border-white/70 w-full" />
                        </div>
                        {/* Liens */}
                        <div className="font-main flex flex-wrap items-center justify-between md:justify-end gap-4 md:gap-8 text-white/70 mt-4">
                            <Link href="#" className="hover:text-white transition-colors">
                                INSTAGRAM
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                BEHANCE
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                LINKEDIN
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                GITHUB
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                CREDITS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
