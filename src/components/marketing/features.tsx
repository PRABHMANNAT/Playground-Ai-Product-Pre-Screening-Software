"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib";
import { FEATURES } from "@/constants";

/** Bezier with a slight overshoot at the end — matches the reference's card easing. */
const OVERSHOOT = [0.4, 2, 0.3, 1] as const;

/** Original CSS-only illustrations, one per feature card. No external assets. */
const CardArt = ({ index }: { index: number }) => {
    if (index === 0) {
        return (
            <div className="relative flex h-full w-full items-center justify-center p-6">
                <div className="absolute inset-0 mesh-drift opacity-45" />
                <div className="relative w-[80%] max-w-[280px] rounded-xl bg-white px-3 py-2.5 shadow-2xl">
                    <div className="flex items-center gap-2">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                            <span className="text-sm leading-none">+</span>
                        </span>
                        <p className="flex-1 truncate text-[13px] text-black/80">why users drop off during signup</p>
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                            <ArrowUp className="size-3 rotate-90" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    if (index === 1) {
        return (
            <div className="relative flex h-full w-full items-center justify-center p-6">
                <div className="absolute inset-0 mesh-drift opacity-40" />
                <div className="relative grid w-[80%] max-w-[280px] grid-cols-3 gap-2">
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                        <div
                            key={n}
                            className={cn(
                                "aspect-square rounded-md border border-white/15 backdrop-blur-md",
                                n === 2 ? "bg-white/25 ring-2 ring-white" : "bg-white/[0.08]",
                            )}
                        />
                    ))}
                </div>
            </div>
        );
    }
    if (index === 2) {
        return (
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6">
                <div className="absolute inset-0 mesh-drift opacity-40" />
                {["AI: unclear pricing tiers", "Human: confirmed confusing", "Verdict: rename tiers"].map((t) => (
                    <div
                        key={t}
                        className="relative rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2 text-[13px] text-white/85 backdrop-blur-md"
                    >
                        {t}
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6">
            <div className="absolute inset-0 mesh-drift opacity-30" />
            {["Verdict: ship it", "2 issues found", "Report ready"].map((label) => (
                <span
                    key={label}
                    className="relative w-full max-w-[200px] rounded-lg border border-white/15 bg-white/5 px-6 py-2.5 text-center text-sm font-medium text-white/85 backdrop-blur-md"
                >
                    {label}
                </span>
            ))}
        </div>
    );
};

/** Per-card transform from stack position relative to the active card. */
const positionStyle = (offset: number, total: number): React.CSSProperties => {
    // Normalise offset so wrapping around the shortest way is chosen.
    let d = offset;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;

    if (d === 0) {
        return {
            zIndex: 3,
            opacity: 1,
            transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
            pointerEvents: "auto",
        };
    }
    if (d === 1) {
        return {
            zIndex: 2,
            opacity: 1,
            transform: "translateX(60px) translateY(-48px) scale(0.85) rotateY(-15deg)",
            pointerEvents: "auto",
        };
    }
    if (d === -1) {
        return {
            zIndex: 2,
            opacity: 1,
            transform: "translateX(-60px) translateY(-48px) scale(0.85) rotateY(15deg)",
            pointerEvents: "auto",
        };
    }
    return {
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
    };
};

const Features = () => {
    const [active, setActive] = useState(0);
    const total = FEATURES.length;

    const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
    const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

    // Keyboard arrows advance/retract the stack when it's in view.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev]);

    const activeFeature = FEATURES[active];

    return (
        <section
            id="features"
            className="hairline relative mx-auto w-full max-w-container px-5 py-24 lg:px-10 lg:py-28"
        >
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-2xl text-center"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">Features</p>
                <h2 className="display-tight mt-4 font-display text-4xl font-bold lg:text-5xl">
                    Everything from idea to decision.
                </h2>
                <p className="mt-4 text-[15px] text-white/55">
                    One platform for the whole validation loop.
                </p>
            </motion.div>

            <div className="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-16">
                {/* ---- Stacked card carousel ------------------------------ */}
                <div
                    className="relative mx-auto h-[360px] w-full max-w-[420px] md:h-[420px]"
                    style={{ perspective: "1200px" }}
                >
                    {FEATURES.map((feature, i) => {
                        const style = positionStyle(i - active, total);
                        return (
                            <div
                                key={feature.title}
                                aria-hidden={i !== active}
                                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                                style={{
                                    ...style,
                                    transformStyle: "preserve-3d",
                                    transition: "0.8s cubic-bezier(0.4, 2, 0.3, 1)",
                                }}
                            >
                                <CardArt index={i} />
                            </div>
                        );
                    })}
                </div>

                {/* ---- Copy + arrow controls ---- */}
                <div>
                    <motion.div
                        key={activeFeature.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: OVERSHOOT }}
                    >
                        <h3 className="font-display text-2xl font-bold lg:text-3xl">
                            {activeFeature.title}
                        </h3>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
                            {activeFeature.eyebrow}
                        </p>
                        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
                            {activeFeature.description}
                        </p>
                    </motion.div>

                    <div className="mt-8 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous feature"
                            className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/10"
                        >
                            <ArrowLeft className="size-4" />
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next feature"
                            className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/10"
                        >
                            <ArrowRight className="size-4" />
                        </button>
                        <span
                            className="ml-3 text-xs tabular-nums text-white/40"
                            aria-live="polite"
                        >
                            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
