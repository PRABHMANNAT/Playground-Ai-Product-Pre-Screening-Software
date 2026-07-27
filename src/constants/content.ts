/**
 * All site copy lives here so it can be swapped without touching components.
 *
 * NOTE: REVIEWS below are placeholder testimonials for layout purposes only.
 * Replace them with real, attributable quotes before this site goes live.
 */

export const NAV_LINKS = [
    { title: "Features", href: "#features" },
    { title: "How it works", href: "#how-it-works" },
    { title: "Community", href: "#community" },
    { title: "Pricing", href: "#pricing" },
];

export const LOGOS = [
    "IngenLabs",
    "Orchestra",
    "Aperture",
    "SwasthAI",
    "Waypoint",
    "AssembleOne",
    "Forge",
    "ResidueLabs",
];

export const STEPS = [
    {
        step: "01",
        title: "Describe your idea",
        description:
            "Tell us who it's for and the one decision you're trying to make. Bring a description, a prototype link, a screen recording, or a live product — whatever stage you're at.",
    },
    {
        step: "02",
        title: "AI tests it first",
        description:
            "Agents walk through your key user journeys the way a first-time customer would, flagging confusing flows, unclear value, and drop-off points before a single human joins.",
    },
    {
        step: "03",
        title: "Humans confirm it",
        description:
            "Matched participants complete the same tasks. We compare their real behaviour against the AI's findings and hand you a clear report on what to fix next.",
    },
];

export const FEATURES = [
    {
        eyebrow: "Agent walkthroughs",
        title: "AI tests your product first",
        description:
            "Agents move through onboarding, pricing, and your core flows the way a new user would, surfacing the moments where people get stuck or drop off — before you spend budget on human testers.",
        video: "/videos/feature-prompt.mp4",
        span: "lg:col-span-2",
    },
    {
        eyebrow: "Matched participants",
        title: "Real users, targeted to your customer",
        description:
            "Tell us who you're building for. We recruit participants who match that profile and give them the same tasks your AI agents just ran.",
        video: "/videos/feature-reference.mp4",
        span: "",
    },
    {
        eyebrow: "AI vs. human",
        title: "See where they agree — and where they don't",
        description:
            "Every finding is compared side by side. When AI predictions and human behaviour diverge, that gap is usually the most important thing in your report.",
        video: "/videos/feature-iterate.mp4",
        span: "",
    },
    {
        eyebrow: "Decision-ready",
        title: "A report built for one decision",
        description:
            "No raw transcripts to sift through. You get a clear verdict on the question you asked, plus the next thing worth testing or changing before you ship.",
        video: "/videos/feature-materials.mp4",
        span: "lg:col-span-2",
    },
];

export const COMMUNITY = [
    { title: "Onboarding flow", author: "62% dropped before setup" },
    { title: "Pricing page", author: "Tier names confused testers" },
    { title: "Core workflow", author: "AI and humans agreed" },
    { title: "New feature launch", author: "Value unclear to 4 in 10" },
    { title: "Landing page copy", author: "Message landed clearly" },
    { title: "Mobile onboarding", author: "3 blocking issues found" },
];

export const REVIEWS = [
    {
        quote: "We thought the onboarding flow was broken. Playground showed it wasn't the steps — nobody understood what the product did until screen four.",
        name: "Elena R.",
        role: "Founder, early-stage SaaS",
        initials: "ER",
    },
    {
        quote: "The AI agents flagged three confusing screens in twenty minutes. The human sessions confirmed exactly which one actually mattered.",
        name: "Charlotte G.",
        role: "Product Lead",
        initials: "CG",
    },
    {
        quote: "I run this before every release now. It's the fastest way I've found to tell a product problem from a distribution problem.",
        name: "Youssef M.",
        role: "Founder",
        initials: "YM",
    },
    {
        quote: "As a solo founder I don't have a research team. This is the closest thing I have to one.",
        name: "Anastasia P.",
        role: "Indie Founder",
        initials: "AP",
    },
    {
        quote: "We were about to rebuild our core flow over one loud customer complaint. Playground showed most users actually liked it — we fixed something else instead.",
        name: "Rahul S.",
        role: "Head of Product",
        initials: "RS",
    },
    {
        quote: "The gap between what our AI pass predicted and what real users did on the pricing page was the single most useful slide I've shown our board.",
        name: "Duncan A.",
        role: "Founder",
        initials: "DA",
    },
    {
        quote: "Every sprint we pick one open question and test it here before committing engineering time to it.",
        name: "Stefan L.",
        role: "Engineering Lead",
        initials: "SL",
    },
    {
        quote: "It replaced the 'can someone try this and tell me if it makes sense' Slack thread that used to eat a full day.",
        name: "Karina A.",
        role: "Founder",
        initials: "KA",
    },
    {
        quote: "Our PMs used to guess which feedback to trust. Now they know whether it's a pattern or one person's opinion.",
        name: "Hao L.",
        role: "VP Product",
        initials: "HL",
    },
];

export const FAQS = [
    {
        question: "What can I test with Playground?",
        answer:
            "An idea, a prototype, or a live product. Bring a description, a Figma link, a screen recording, or a working URL — Playground works with whatever stage you're at.",
    },
    {
        question: "How is this different from asking friends or posting online?",
        answer:
            "Friends aren't your target customer, and forum feedback is self-selected and unstructured. Playground matches participants to the profile you define and runs everyone through the same tasks, so the results are actually comparable.",
    },
    {
        question: "What do the AI agents actually do?",
        answer:
            "They walk through the user journeys you flag — onboarding, checkout, a core workflow — the way a first-time user would, and log where they hesitate, misread something, or give up.",
    },
    {
        question: "How does billing work?",
        answer:
            "Each plan includes a set number of validations per month, covering both the AI pass and a matched round of human participants. Larger studies with more participants draw on additional credits.",
    },
    {
        question: "Who sees the raw session data?",
        answer:
            "You do, if you want it. The default report is a summary built around the one decision you told us you needed to make, but every underlying session is available if you want to dig in.",
    },
    {
        question: "Can I use this before I've built anything?",
        answer:
            "Yes — a description or a clickable prototype is enough for an early pass. Most teams run a validation before writing production code, then again before each major release.",
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Platform", href: "#" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Changelog", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Community", href: "#community" },
            { name: "Guides", href: "#" },
            { name: "Help centre", href: "#" },
            { name: "Status", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            { name: "Contact", href: "#" },
        ],
    },
];
