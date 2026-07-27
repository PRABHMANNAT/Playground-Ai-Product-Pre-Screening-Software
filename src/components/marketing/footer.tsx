import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";
import Logo from "../global/logo";

const Footer = () => (
    <footer className="hairline mx-auto max-w-container px-5 pb-12 pt-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
            <div>
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="size-7" />
                    <span className="font-display text-lg font-bold tracking-tight">
                        Playground
                    </span>
                </Link>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
                    Test your product with AI agents and real, matched users — so you
                    know what to fix before you ship it.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {FOOTER_LINKS.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                            {group.title}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {group.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/55 transition-colors hover:text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/35">
                © {new Date().getFullYear()} Playground. All rights reserved.
            </p>
            <p className="text-xs text-white/35">Built for teams who'd rather know than guess.</p>
        </div>
    </footer>
);

export default Footer;
