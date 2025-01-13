"use client"

import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface MobileMenuProps {
    isOpen: boolean
    onCloseAction: () => void
}

export function MobileMenu({ isOpen, onCloseAction }: MobileMenuProps) {
    return (
        <div
            className={cn(
                "fixed inset-0 bg-[#424867] z-50 transform transition-transform duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}
        >
            <div className="h-full flex flex-col p-6">
                <div className="flex justify-between items-center mb-12">
                    <span className="font-main text-xl">Andreas Castello</span>
                    <button onClick={onCloseAction} className="p-2">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-6 text-2xl font-main">
                        <li>
                            <a href="#about" onClick={onCloseAction}>À propos</a>
                        </li>
                        <li>
                            <a href="#works" onClick={onCloseAction}>Projets</a>
                        </li>
                        <li>
                            <a href="#services" onClick={onCloseAction}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={onCloseAction}>Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="border-t border-white/70 pt-6">
                    <ul className="font-main flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-200">
                        <li><a href="https://www.instagram.com/andreascastello/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                        <li><a href="https://www.behance.net/andrascastello" target="_blank" rel="noopener noreferrer">BEHANCE</a></li>
                        <li><a href="https://www.linkedin.com/in/andr%C3%A9as-castello-3b8068186/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
                        <li><a href="https://github.com/andreascastello" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">CREDITS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

