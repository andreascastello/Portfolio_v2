"use client"

import { X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
                    <button onClick={onClose} className="p-2">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-6 text-2xl font-main">
                        <li>
                            <a href="#works" onClick={onClose}>Works</a>
                        </li>
                        <li>
                            <a href="#about" onClick={onClose}>About</a>
                        </li>
                        <li>
                            <a href="#services" onClick={onClose}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={onClose}>Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className="border-t border-white/70 pt-6">
                    <ul className="font-main flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-200">
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">BEHANCE</a></li>
                        <li><a href="#">LINKEDIN</a></li>
                        <li><a href="#">GITHUB</a></li>
                        <li><a href="#">CREDITS</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

