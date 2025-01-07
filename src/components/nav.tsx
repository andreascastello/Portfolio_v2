"use client"

import { useState } from "react"
import { Menu } from 'lucide-react'
import { MobileMenu } from "./mobile-menu"

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 w-full z-40 backdrop-blur-sm">
                <div className="max-w-[1800px] mx-auto px-6 md:px-8">
                    <nav className="border-b border-white relative flex items-center justify-between py-5">
                        {/* Logo and Title */}
                        <div>
                            <a
                                href="#"
                                className="font-main flex flex-col items-center space-y-1 md:flex-row md:items-baseline md:space-x-7"
                            >
                                <span className="font-semibold text-xl md:text-base">Andreas Castello</span>
                                <span className="hidden md:flex tracking-wider">UX/UI DESIGNER DEVELOPER</span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="font-main hidden md:flex items-center space-x-5">
                            <li>
                                <a href="#services" className="hover:text-neutral-400 transition-colors">
                                Services
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="hover:text-neutral-400 transition-colors">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-neutral-400 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-neutral-400 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMenuOpen}
                onCloseAction={() => setIsMenuOpen(false)}
            />
        </>
    )
}

