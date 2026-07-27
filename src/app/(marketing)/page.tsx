import Hero from "@/components/marketing/hero";
import Logos from "@/components/marketing/logos";
import HowItWorks from "@/components/marketing/how-it-works";
import Features from "@/components/marketing/features";
import Community from "@/components/marketing/community";
import Reviews from "@/components/marketing/reviews";
import FAQ from "@/components/marketing/faq";
import CTA from "@/components/marketing/cta";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Logos />
            <HowItWorks />
            <Features />
            <Community />
            <Reviews />
            <FAQ />
            <CTA />
        </>
    );
};

export default HomePage;
