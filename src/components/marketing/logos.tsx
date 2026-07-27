import { LOGOS } from "@/constants";

const Logos = () => (
    <section className="py-16 lg:py-20">
        <div className="flex justify-center">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Trusted by teams from
            </p>
        </div>
        <div className="marquee marquee-sweep edge-fade relative mt-8 overflow-hidden">
            <div className="marquee-track gap-16 pr-16" style={{ "--marquee-duration": "38s" } as React.CSSProperties}>
                {[...LOGOS, ...LOGOS].map((name, i) => (
                    <span
                        key={`${name}-${i}`}
                        className="group relative whitespace-nowrap py-1"
                    >
                        <span
                            className="inline-block font-display text-lg font-bold tracking-tight text-white/25 transition-all duration-300 ease-out will-change-transform group-hover:-translate-y-0.5 group-hover:scale-[1.08] group-hover:text-white group-hover:[text-shadow:0_0_18px_rgba(255,255,255,0.35)] md:text-xl"
                        >
                            {name}
                        </span>
                        <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-white/50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export default Logos;
