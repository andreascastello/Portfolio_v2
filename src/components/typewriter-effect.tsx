"use client";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";

export const TypewriterEffect = ({
                                     words,
                                     className,
                                     cursorClassName,
                                 }: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
            <div>
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black`, word.className)}
                                >
                  {char === "O" || char === "o" ? (
                      <Image
                          src="/logo.png"
                          alt="poulpe"
                          className="inline-block w-20 h-auto sm:w-24 md:w-32 lg:w-40 xl:w-[162px]"
                          width={162}
                          height={191}
                          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 128px, (max-width: 1280px) 160px, 162px"
                      />

                  ) : (
                      char
                  )}
                </span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}{" "}
                </div>
                {" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-white",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
