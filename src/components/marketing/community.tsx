import { COMMUNITY } from "@/constants";
import Container from "../global/container";

const Community = () => (
    <section id="community" className="hairline mx-auto max-w-container px-5 py-24 lg:px-10 lg:py-28">
        <Container>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">Community</p>
            <h2 className="display-tight mt-4 font-display text-4xl font-bold lg:text-5xl">
                Validated with Playground.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] text-white/55">
                A sample of the questions teams have answered before shipping. Hover a card for the verdict.
            </p>
        </Container>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {COMMUNITY.map((item, i) => (
                <Container key={item.title} delay={0.08 + i * 0.05}>
                    <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                        {/* rendered state */}
                        <div className="absolute inset-0 mesh-drift opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
                        {/* wireframe state, revealed on hover */}
                        <div
                            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                                backgroundSize: "22px 22px",
                            }}
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                            <p className="truncate text-sm font-medium">{item.title}</p>
                            <p className="mt-0.5 truncate text-xs text-white/45">
                                {item.author}
                            </p>
                        </figcaption>
                    </figure>
                </Container>
            ))}
        </div>
    </section>
);

export default Community;
