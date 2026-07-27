import { STEPS } from "@/constants";
import Container from "../global/container";

const HowItWorks = () => (
    <section id="how-it-works" className="hairline mx-auto max-w-container px-5 py-24 lg:px-10 lg:py-28">
        <Container>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                How it works
            </p>
            <h2 className="display-tight mt-4 max-w-2xl font-display text-4xl font-bold lg:text-5xl">
                Bring an idea into the real world.
            </h2>
        </Container>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
                <Container key={step.step} delay={0.1 + i * 0.08}>
                    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.04]">
                        <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 font-display text-sm text-white/60 transition-colors group-hover:border-white/40 group-hover:text-white">
                            {step.step}
                        </span>
                        <h3 className="mt-6 font-display text-xl font-semibold">
                            {step.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                            {step.description}
                        </p>
                    </div>
                </Container>
            ))}
        </div>
    </section>
);

export default HowItWorks;
