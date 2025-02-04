"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    showRadialGradient?: boolean;
    scrollOpacity?: number;
}

export const AuroraBackground = ({
                                     className,
                                     showRadialGradient = true,
                                     scrollOpacity = 1,
                                     ...props
                                 }: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "fixed top-0 left-0 w-full h-screen z-0 pointer-events-none",
                className
            )}
            {...props}
        >
            {/* Fond animé */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        `
                        [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                        [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                        [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
                        [background-image:var(--white-gradient),var(--aurora)]
                        dark:[background-image:var(--dark-gradient),var(--aurora)]
                        [background-size:300%,_200%]
                        [background-position:50%_50%,50%_50%]
                        filter blur-[10px] invert dark:invert-0
                        after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                        after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                        after:[background-size:200%,_100%] 
                        after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                        pointer-events-none
                        absolute inset-0 will-change-transform`,
                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                    style={{
                        opacity: scrollOpacity,
                        transition: "opacity 0.5s ease",
                    }}
                ></div>
            </div>
        </div>
    );
};

