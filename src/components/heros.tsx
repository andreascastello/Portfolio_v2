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
                    initial={{opacity: 0.0, y: 40}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl dark:text-white text-center">
                        <TypewriterEffect words={words}/>
                    </div>
                </motion.div>
                <motion.a
                    href="#about"
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    >
                        <path
                            d="M12 5V19M12 19L19 12M12 19L5 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.a>
            </div>
        </>
    );
};
