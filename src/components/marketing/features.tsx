"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib";
import { FEATURES } from "@/constants";
import Container from "../global/container";

/**
 * Looping video panel. Falls back to an animated gradient placeholder when the
 * .mp4 is missing, so the grid keeps its shape on a fresh checkout.
 */
const Panel = ({ src }: { src: string }) => {
    const [ready, setReady] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            <div
                className={cn(
                    "absolute inset-0 mesh-drift transition-opacity duration-700",
                    ready ? "opacity-0" : "opacity-70",
                )}
            />
            <video
                ref={ref}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                onCanPlay={() => setReady(true)}
                onError={() => setReady(false)}
                className={cn(
                    "size-full object-cover transition-opacity duration-700",
                    ready ? "opacity-100" : "opacity-0",
                )}
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};

const Features = () => (
    <section id="features" className="hairline mx-auto max-w-container px-5 py-24 lg:px-10 lg:py-28">
        <Container>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">Features</p>
            <h2 className="display-tight mt-4 max-w-3xl font-display text-4xl font-bold lg:text-5xl">
                Everything from prompt to production.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] text-white/55">
                One studio for the whole loop — describe, generate, refine, export.
            </p>
        </Container>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
                <Container
                    key={feature.title}
                    delay={0.1 + i * 0.06}
                    className={cn(feature.span)}
                >
                    <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/25">
                        <Panel src={feature.video} />
                        <div className="mt-6 flex flex-1 flex-col px-1 pb-1">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                                {feature.eyebrow}
                            </p>
                            <h3 className="mt-3 font-display text-xl font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </Container>
            ))}
        </div>
    </section>
);

export default Features;
