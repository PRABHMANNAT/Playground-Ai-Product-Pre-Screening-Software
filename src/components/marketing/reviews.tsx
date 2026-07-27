import { REVIEWS } from "@/constants";
import Container from "../global/container";

type Review = (typeof REVIEWS)[number];

const Card = ({ review }: { review: Review }) => (
    <figure className="flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/25">
        <blockquote className="text-[15px] leading-relaxed text-white/70">
            {review.quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/70">
                {review.initials}
            </span>
            <span>
                <span className="block text-sm font-medium">{review.name}</span>
                <span className="block text-xs text-white/45">{review.role}</span>
            </span>
        </figcaption>
    </figure>
);

const Row = ({ items, reverse, duration }: { items: Review[]; reverse?: boolean; duration: string }) => (
    <div className="marquee edge-fade overflow-hidden">
        <div
            className={`marquee-track gap-5 pr-5 ${reverse ? "reverse" : ""}`}
            style={{ "--marquee-duration": duration } as React.CSSProperties}
        >
            {[...items, ...items].map((review, i) => (
                <Card key={`${review.name}-${i}`} review={review} />
            ))}
        </div>
    </div>
);

const Reviews = () => {
    const half = Math.ceil(REVIEWS.length / 2);

    return (
        <section className="hairline py-24 lg:py-28">
            <div className="mx-auto max-w-container px-5 lg:px-10">
                <Container>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Reviews</p>
                    <h2 className="display-tight mt-4 font-display text-4xl font-bold lg:text-5xl">
                        Loved by founders who'd rather know.
                    </h2>
                </Container>
            </div>

            <div className="mt-14 flex flex-col gap-5">
                <Row items={REVIEWS.slice(0, half)} duration="64s" />
                <Row items={REVIEWS.slice(half)} duration="78s" reverse />
            </div>
        </section>
    );
};

export default Reviews;
