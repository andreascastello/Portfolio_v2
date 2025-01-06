'use client'

import {useState} from 'react'
import Link from 'next/link'

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="min-h-screen w-full flex flex-col justify-end pb-8">
            {/* Footer */}
            <div className="max-w-8xl px-8 w-full flex flex-col items-end space-y-8 z-20">
                {/* Titre */}
                <h1 className="font-main text-5xl md:text-9xl text-white text-right font-semibold pb-24">
                    PARLONS<br/>PROJET !
                </h1>

                {/* Bouton + Liens */}
                <div className="w-full flex items-end justify-between">
                    {/* Bouton Contact */}
                    <div
                        className="relative group w-1/2" // 50% de la largeur
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            className="border rounded-lg p-8 md:p-12 transition-all duration-500 hover:bg-white/5 w-full">
                            <h2 className="font-main text-3xl md:text-4xl text-white mb-4 font-bold">
                                CONTACTEZ MOI !
                            </h2>
                            <p className="font-main text-gray-300 text-lg md:text-xl">
                                Vous avez un projet en tête ou une idée à développer ? Faisons équipe pour concevoir
                                quelque chose d’unique, sur-mesure et à votre image.
                            </p>
                            <div className="flex justify-end mt-4">
                                <svg
                                    className={`w-6 h-6 text-white transition-transform duration-500 ${isHovered ? 'translate-x-2' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Liens avec bordure blanche */}
                    <div className="flex flex-col items-end">
                        <div className="border-t border-white/70 w-full mb-4"/>
                        <div className="font-main flex items-center gap-8 text-white/70">
                            <Link href="#" className="hover:text-white transition-colors">INSTAGRAM</Link>
                            <Link href="#" className="hover:text-white transition-colors">BEHANCE</Link>
                            <Link href="#" className="hover:text-white transition-colors">LINKEDIN</Link>
                            <Link href="#" className="hover:text-white transition-colors">GITHUB</Link>
                            <Link href="#" className="hover:text-white transition-colors">CREDITS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
