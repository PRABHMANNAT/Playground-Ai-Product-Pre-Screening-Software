import { LOGOS } from "@/constants";

const Logos = () => (
    <section className="py-16 lg:py-20">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/35">
            Trusted by teams from
        </p>
        <div className="marquee edge-fade relative mt-8 overflow-hidden">
            <div className="marquee-track gap-14 pr-14" style={{ "--marquee-duration": "38s" } as React.CSSProperties}>
                {[...LOGOS, ...LOGOS].map((name, i) => (
                    <span
                        key={`${name}-${i}`}
                        className="whitespace-nowrap font-display text-xl font-semibold text-white/25 transition-colors hover:text-white/60"
                    >
                        {name}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export default Logos;
