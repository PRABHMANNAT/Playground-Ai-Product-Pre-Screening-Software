import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { FAQS } from "@/constants";
import Container from "../global/container";

const FAQ = () => (
    <section id="faq" className="hairline mx-auto max-w-container px-5 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Container>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">FAQ</p>
                <h2 className="display-tight mt-4 font-display text-4xl font-bold lg:text-5xl">
                    Questions,
                    <br />
                    answered.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] text-white/55">
                    What you need to know about validating a product before you build
                    it. Still stuck? Drop us a line.
                </p>
            </Container>

            <Container delay={0.15}>
                <Accordion type="single" collapsible className="w-full">
                    {FAQS.map((faq, i) => (
                        <AccordionItem
                            key={faq.question}
                            value={`item-${i}`}
                            className="border-white/10"
                        >
                            <AccordionTrigger className="py-5 text-left font-display text-base font-medium hover:no-underline lg:text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-white/55">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </div>
    </section>
);

export default FAQ;
