import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../global/container";

const CTA = () => (
    <section id="cta" className="mx-auto max-w-container px-5 py-24 lg:px-10 lg:py-28">
        <Container>
            <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 px-6 py-20 text-center lg:px-16">
                <div className="absolute inset-0 -z-10 mesh-drift opacity-45" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(100%_100%_at_50%_0%,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

                <h2 className="display-tight mx-auto max-w-2xl font-display text-4xl font-bold lg:text-5xl">
                    Test your idea before you build it.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-[15px] text-white/65 lg:text-base">
                    Describe your product, the customer it's for, and the decision you
                    need to make. Get AI findings today, human-confirmed results
                    within days.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="#"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-95"
                    >
                        Start a validation
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                        href="#pricing"
                        className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
                    >
                        See pricing
                    </Link>
                </div>
            </div>
        </Container>
    </section>
);

export default CTA;
