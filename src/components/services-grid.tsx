"use client";

import { WobbleCard } from "./wobble-card";

export default function ServicesGrid() {
    return (
        <section id="services" className="py-20">
            <div className="max-w-8xl mx-auto px-6 md:px-8">
                <div className="mb-8 md:mb-16">
                    <div className="w-full h-px bg-white/70 mb-2" />
                    <h2 className="text-base font-main">Services</h2>
                </div>
                <div className="font-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 items-start md:px-24">
                    {/* Carte 1 */}
                    <WobbleCard
                        containerClassName="col-span-1 md:col-span-2 lg:col-span-8 bg-card h-full max-h-[293px]"
                    >
                        <div className="max-w-xl">
                            <h2 className="text-left text-2xl md:text-3xl font-semibold text-white uppercase">
                                Création de sites vitrines
                            </h2>
                            <p className="mt-4 text-justify text-neutral-200">
                                Donnez vie à votre présence en ligne avec un site moderne, élégant et entièrement optimisé pour vos besoins. Idéal pour présenter vos services, votre marque ou vos projets de manière professionnelle.
                            </p>
                        </div>
                    </WobbleCard>
                    {/* Carte 2 */}
                    <WobbleCard
                        containerClassName="col-span-1 md:col-span-1 lg:col-span-4 bg-card h-[293px]"
                    >
                        <h2 className="text-left text-2xl md:text-3xl font-semibold text-white uppercase">
                            Applications Mobiles
                        </h2>
                        <p className="mt-4 text-justify text-neutral-200">
                            Donnez vie à votre projet sur iOS et Android avec des applications modernes et performantes.
                        </p>
                    </WobbleCard>
                    {/* Autres Cartes */}
                    {["Identité Visuelle", "Design UI/UX", "Supports Imprimés & Digitaux"].map(
                        (title, index) => (
                            <WobbleCard
                                key={index}
                                containerClassName="col-span-1 md:col-span-1 lg:col-span-4 bg-card h-[350px]"
                            >
                                <h2 className="text-left text-2xl md:text-3xl font-semibold text-white uppercase">
                                    {title}
                                </h2>
                                <p className="mt-4 text-justify text-neutral-200">
                                    {title === "Identité Visuelle"
                                        ? "Construisez une image forte et mémorable avec un logo unique et une palette de couleurs harmonieuse."
                                        : title === "Design UI/UX"
                                            ? "Offrez à vos utilisateurs une expérience fluide et intuitive grâce à des interfaces modernes."
                                            : "De la carte de visite au flyer, en passant par les bannières et visuels digitaux."}
                                </p>
                            </WobbleCard>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
