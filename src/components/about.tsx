import Image from "next/image"

export function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-10 md:py-20">
            <div className="max-w-8xl mx-auto px-6 md:px-8">
                <div className="mb-8 md:mb-16">
                    <div className="w-full h-px bg-white/70 mb-2"/>
                    <h2 className="text-base font-main">À propos</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end md:px-24">
                    <div className="lg:col-span-6">
                        <div className="lg:max-w-[91%] mx-auto font-main">
                            <h2 className="text-3xl font-semibold md:text-5xl mb-8">BONJOUR, C&apos;EST ANDREAS</h2>
                            <p className="text-gray-300 leading-relaxed text-justify">
                                Passionné par le <strong>design UI/UX</strong>,
                                j&apos;adore donner vie à des idées à travers des interfaces <strong>élégantes et intuitives</strong>.
                                La <strong>création de sites web modernes et innovants</strong> est pour moi
                                bien plus qu&apos;un métier, c&apos;est une véritable passion.
                                Toujours curieux et motivé, j&apos;aime transformer chaque projet
                                en une <strong>expérience unique et sur-mesure</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="relative h-[300px] lg:h-[400px]">
                            <Image
                                src="/andreas.jpeg"
                                alt="Portrait"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-12 flex flex-col items-center justify-center pr-14 mt-[-60px] md:mt-[-80px]">
                        <Image
                            src="/arrow.svg"
                            alt=""
                            width={160}
                            height={40}
                            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-[160px] h-auto"
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 160px"
                        />
                        <div className="flex items-center gap-1 mt-[-60px]">
                            <span className="text-sm font-main">C&apos;est moi !</span>
                            <Image
                                src="/octopus.svg"
                                alt=""
                                width={67}
                                height={79}
                                className="opacity-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

