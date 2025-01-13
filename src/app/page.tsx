"use client";
import {Nav} from "@/components/nav"
import {About} from "@/components/about"
import {Work} from "@/components/work"
import React from "react";
import Contact from "@/components/contact"
import ServicesGrid from "@/components/services-grid"
import {useEffect, useState} from "react";
import {Hero} from "@/components/heros";

const words = [
    {
        text: "Andréas",
        className: "font-alex font-normal text-4xl md:text-8xl antialiased",
    },
    {
        text: "CASTELLO",
        className: "font-main font-normal text-5xl md:text-9xl antialiased",
    }
];
export default function Home() {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const threshold = 500;

            if (scrollY === 0) {
                setScrollOpacity(1);
            } else if (scrollY > 0 && scrollY < threshold) {
                setScrollOpacity(1 - scrollY / threshold);
            } else if (scrollY >= maxScroll - threshold) {
                const progress = (scrollY - (maxScroll - threshold)) / threshold;
                setScrollOpacity(progress);
            } else {
                setScrollOpacity(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Nav/>
            <Hero words={words} scrollOpacity={scrollOpacity}/>
            <About/>
            <Work/>
            <ServicesGrid/>
            <Contact/>
        </>
    );
}
