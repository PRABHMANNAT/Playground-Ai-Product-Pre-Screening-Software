"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Paperclip, AudioLines, LibraryBig } from "lucide-react";
import { cn } from "@/lib";

const PROMPTS = [
    "a ribbed ceramic planter with a matte glaze",
    "a folding camp stool in anodised aluminium",
    "a walnut espresso tamper with a knurled grip",
];

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = useState(false);
    const [value, setValue] = useState("");

    return (
        <section className="relative isolate flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 lg:px-10">
            {/* ---- Background stack ------------------------------------------
                1. mesh-drift : always painted, so the hero is never flat black
                2. <video>    : covers the mesh once /videos/hero.mp4 decodes
                3. scrims     : keep type legible over whatever is behind it  */}
            <div className="absolute inset-0 -z-10 grain overflow-hidden">
                <div className="absolute inset-0 mesh-drift" />

                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={() => setVideoReady(true)}
                    onError={() => setVideoReady(false)}
                    className={cn(
                        "absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover object-top transition-opacity duration-1000",
                        videoReady ? "opacity-100" : "opacity-0",
                    )}
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* vignette + bottom fade into the page background */}
                <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_20%,rgba(0,0,0,0.55)_70%,#000_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/85 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
            >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Now generating in under a minute
                </span>

                <h1 className="display-tight font-display text-[2.6rem] font-bold sm:text-6xl lg:text-[4rem]">
                    Design the physical world
                    <br />
                    without opening CAD
                </h1>

                <p className="mt-6 max-w-xl text-balance text-base text-white/65 lg:text-lg">
                    Describe a product in plain words. Get back a textured, watertight
                    3D model you can refine, export, and actually manufacture.
                </p>
            </motion.div>

            {/* ---- Prompt bar ----
                Dark glass outer shell (matches the rest of the hero chrome),
                white inner card (matches the reference's input surface) so
                the typed text reads as high-contrast against the video. */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-10 w-full max-w-[728px]"
            >
                <div
                    className="rounded-[18px] p-2.5"
                    style={{
                        background: "rgba(0, 0, 0, 0.24)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    }}
                >
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col gap-3 rounded-xl bg-white px-4 py-3 sm:px-5 sm:py-4"
                        style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.1)" }}
                    >
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="A puffy, cloud-shaped water bottle…"
                            aria-label="Describe a product you want to make"
                            className="min-w-0 flex-1 bg-transparent text-[15px] text-black/90 outline-none placeholder:text-black/40 sm:text-base"
                        />
                        <div className="flex items-end justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                                {[
                                    { icon: Paperclip, label: "Attach" },
                                    { icon: AudioLines, label: "Voice" },
                                    { icon: LibraryBig, label: "Library" },
                                ].map(({ icon: Icon, label }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        className="inline-flex items-center gap-1.5 rounded-md bg-[#f8f8f8] px-2.5 py-1.5 text-xs font-medium text-black transition-colors hover:bg-[#eeeeee]"
                                    >
                                        <Icon className="size-3.5" />
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <button
                                type="submit"
                                aria-label="Generate model"
                                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/10 text-black transition-colors hover:bg-black/15 disabled:opacity-40"
                                disabled={!value.trim()}
                            >
                                <ArrowUp className="size-4" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {PROMPTS.map((p) => (
                        <button
                            key={p}
                            type="button"
                            onClick={() => setValue(p)}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/55 backdrop-blur-md transition-colors hover:border-white/25 hover:text-white/90"
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
