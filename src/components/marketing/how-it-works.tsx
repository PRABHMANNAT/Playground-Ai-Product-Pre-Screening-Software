"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, Check } from "lucide-react";
import { cn } from "@/lib";
import { STEPS } from "@/constants";

/** Original mock visuals per step — no external assets. */
const StepVisual = ({ index }: { index: number }) => {
    if (index === 0) {
        return (
            <div className="relative flex h-full w-full items-center justify-center p-8">
                <div className="absolute inset-0 mesh-drift opacity-50" />
                <div className="relative w-full max-w-sm rounded-xl bg-white px-4 py-3 shadow-2xl">
                    <p className="text-[13px] leading-snug text-black/80">
                        a walnut espresso tamper with a knurled grip
                    </p>
                    <div className="mt-3 flex justify-end">
                        <span className="flex size-7 items-center justify-center rounded-full bg-black/10 text-black">
                            <ArrowUp className="size-3.5" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    if (index === 1) {
        return (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 mesh-drift" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="relative flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-5 py-2.5 text-sm text-white/85 backdrop-blur-md">
                    <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Generating mesh…
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-8">
            <div className="absolute inset-0 mesh-drift opacity-30" />
            {["STL", "OBJ", "STEP"].map((format) => (
                <span
                    key={format}
                    className="relative w-full max-w-[200px] rounded-lg border border-white/15 bg-white/5 px-6 py-2.5 text-center text-sm font-medium text-white/85 backdrop-blur-md"
                >
                    {format}
                </span>
            ))}
        </div>
    );
};

const HowItWorks = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [active, setActive] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Parallax shift on the whole sticky content, mirroring the reference's
    // translateY drift as scroll progresses through the pinned section.
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -140]);
    // Heading fades / blurs slightly as it rides up, matching the reference's
    // progress-driven blur/opacity treatment on the title block.
    const headingBlur = useTransform(scrollYProgress, [0, 0.35], [0, 6]);
    const headingBlurFilter = useTransform(headingBlur, (v) => `blur(${v}px)`);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.4]);

    // Scroll progress → active step index (three equal-height bands).
    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            const idx = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
            setActive(idx);
        });
    }, [scrollYProgress]);

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="relative"
            style={{ height: "300vh" }}
        >
            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
                <motion.div
                    style={{ y: contentY }}
                    className="mx-auto w-full max-w-container px-5 lg:px-10"
                >
                    <motion.div
                        style={{ filter: headingBlurFilter, opacity: headingOpacity }}
                        className="mb-10 text-center"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                            How it works
                        </p>
                        <h2 className="display-tight mt-4 font-display text-4xl font-bold lg:text-5xl">
                            Bring an idea into the real world.
                        </h2>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
                        <div className="flex flex-col gap-8">
                            {STEPS.map((step, i) => (
                                <motion.div
                                    key={step.step}
                                    animate={{
                                        opacity: active === i ? 1 : 0.28,
                                    }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center gap-6"
                                >
                                    <motion.span
                                        animate={{ scale: active === i ? 1.1 : 1 }}
                                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                        className={cn(
                                            "flex size-10 shrink-0 items-center justify-center rounded-full border-2 font-display text-sm font-semibold",
                                            active >= i
                                                ? "border-white bg-white text-black"
                                                : "border-white/20 bg-white/[0.03] text-white/40",
                                        )}
                                    >
                                        {active > i ? <Check className="size-4" strokeWidth={3} /> : step.step}
                                    </motion.span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold lg:text-2xl">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/55">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black md:block">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full w-full"
                                >
                                    <StepVisual index={active} />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
