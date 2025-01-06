import { AuroraBackground } from "@/components/aurora-background";
import { motion } from "framer-motion";
import {TypewriterEffect} from "@/components/typewriter-effect";

interface HeroProps {
    words: { text: string; className: string }[];
    scrollOpacity: number;
}

export const Hero = ({ words, scrollOpacity }: HeroProps) => {
    return (
        <>
            <AuroraBackground scrollOpacity={scrollOpacity} />
            <div className="relative z-10 h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl dark:text-white text-center">
                        <TypewriterEffect words={words} />
                    </div>
                </motion.div>
            </div>
        </>
    );
};
