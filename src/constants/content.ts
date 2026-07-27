/**
 * All site copy lives here so it can be swapped without touching components.
 *
 * NOTE: REVIEWS below are placeholder testimonials for layout purposes only.
 * Replace them with real, attributable quotes before this site goes live.
 */

export const NAV_LINKS = [
    { title: "Features", href: "#features" },
    { title: "Resources", href: "#how-it-works" },
    { title: "Community", href: "#community" },
    { title: "Pricing", href: "#pricing" },
];

export const LOGOS = [
    "Northwind",
    "Aperture",
    "Lumen Labs",
    "Foundry Co",
    "Verge",
    "Atlas Works",
];

export const STEPS = [
    {
        step: "01",
        title: "Say what you want",
        description:
            "Write a sentence, or drop in a photo you already have. The model reads silhouette, material, and finish from either one.",
    },
    {
        step: "02",
        title: "Watch it build",
        description:
            "A textured, watertight mesh lands in about a minute. No CAD seat, no retopology pass, no cleanup queue.",
    },
    {
        step: "03",
        title: "Send it somewhere real",
        description:
            "Export to STL, OBJ, or STEP and go straight into your slicer, your printer, or a manufacturer's quote form.",
    },
];

export const FEATURES = [
    {
        eyebrow: "Prompt to mesh",
        title: "Language in, geometry out",
        description:
            "Describe a product the way you'd describe it to a colleague. You get back an actual textured mesh you can orbit, measure, and refine — not a picture of one. Iterate as fast as you can retype the sentence.",
        video: "/videos/feature-prompt.mp4",
        span: "lg:col-span-2",
    },
    {
        eyebrow: "Reference input",
        title: "Start from a photo",
        description:
            "Drop in a sketch, a product shot, or a napkin drawing. Proportions and material cues carry through to the model.",
        video: "/videos/feature-reference.mp4",
        span: "",
    },
    {
        eyebrow: "Iteration",
        title: "Change one thing, keep the rest",
        description:
            "Shorten the handle, swap brushed steel for matte resin, thicken a wall. Edits are local — the rest of the model holds.",
        video: "/videos/feature-iterate.mp4",
        span: "",
    },
    {
        eyebrow: "Materials",
        title: "Finishes that survive export",
        description:
            "PBR maps travel with the mesh, so what you approved on screen is what shows up in your renderer or on the print bed.",
        video: "/videos/feature-materials.mp4",
        span: "lg:col-span-2",
    },
];

export const COMMUNITY = [
    { title: "Ribbed ceramic planter", author: "studio.oide" },
    { title: "Folding camp stool", author: "m.karlsen" },
    { title: "Desk mic, brushed steel", author: "avery.builds" },
    { title: "Modular shelf bracket", author: "northfab" },
    { title: "Pocket dice tower", author: "tabletop.jo" },
    { title: "Espresso tamper, walnut", author: "kettle&co" },
];

export const REVIEWS = [
    {
        quote: "Mockups used to eat my first two days on any brief. Now the first client call already has something on screen to react to.",
        name: "Elena R.",
        role: "Product Designer",
        initials: "ER",
    },
    {
        quote: "I sell small-batch collectables, and the catalogue went from nine items to about forty without hiring a modeller.",
        name: "Charlotte G.",
        role: "Shop Owner",
        initials: "CG",
    },
    {
        quote: "It removes the fiddly part of the day. I still art-direct every piece — I'm just not pushing vertices for six hours first.",
        name: "Youssef M.",
        role: "3D Artist",
        initials: "YM",
    },
    {
        quote: "Freelance budgets are tight and most tools in this space are not. This one earned its line item in the first month.",
        name: "Anastasia P.",
        role: "Indie Maker",
        initials: "AP",
    },
    {
        quote: "Set dressing for our game used to be the bottleneck. We fill a scene with props in an afternoon now.",
        name: "Rahul S.",
        role: "Game Developer",
        initials: "RS",
    },
    {
        quote: "The slow part of client work is agreeing on a direction. I bring three real options to the kickoff instead of a sketch.",
        name: "Duncan A.",
        role: "Industrial Designer",
        initials: "DA",
    },
    {
        quote: "Volume is the whole business for me. Words to a file my slicer accepts, same afternoon — that changed the maths.",
        name: "Stefan L.",
        role: "Print Seller",
        initials: "SL",
    },
    {
        quote: "I run our university's fabrication club. It got the members who were scared of CAD actually making things.",
        name: "Karina A.",
        role: "Student Lead",
        initials: "KA",
    },
    {
        quote: "Concepting meetings produce decisions now instead of homework. We generate the options while we're still talking.",
        name: "Hao L.",
        role: "Product Manager",
        initials: "HL",
    },
];

export const FAQS = [
    {
        question: "What kinds of things can I make?",
        answer:
            "Consumer goods, packaging, furniture, enclosures, wearables, accessories, tabletop pieces, and props. Anything whose form you can describe in a sentence or show in a photo is a reasonable starting point.",
    },
    {
        question: "Is the output actually manufacturable?",
        answer:
            "Meshes come out watertight and manifold, which is what slicers and most quoting tools require. For injection moulding or CNC you'll still want an engineer to review draft angles and tolerances — treat it as a very fast first article, not a finished production file.",
    },
    {
        question: "Do I need to know CAD?",
        answer:
            "No. Plain language is the interface. If you do know CAD, exports open cleanly in the usual tools, so you can take a generated base mesh and keep working on it however you normally would.",
    },
    {
        question: "How does billing work?",
        answer:
            "Each plan includes a monthly pool of generation credits. One credit is one model generation; refining an existing model costs less than starting a new one. Unused credits roll over for one cycle.",
    },
    {
        question: "Who owns what I make?",
        answer:
            "You do. Paid plans include commercial-use rights for everything you generate — sell the prints, ship the product, put it in a client deliverable. We don't claim a licence to your output.",
    },
    {
        question: "What formats can I export?",
        answer:
            "STL and 3MF for printing, OBJ and GLB with textures for rendering and real-time engines, and STEP where downstream CAD work is expected.",
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Studio", href: "#" },
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
