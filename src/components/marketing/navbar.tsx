"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib";
import { NAV_LINKS } from "@/constants";
import Logo from "../global/logo";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
            <nav
                className={cn(
                    "relative mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 backdrop-blur-xl transition-all duration-300 sm:px-5",
                    scrolled && "border-white/15 bg-black/50 shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
                )}
            >
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="size-6" />
                    <span className="font-display text-base font-bold tracking-tight">
                        Playground
                    </span>
                </Link>

                <ul className="hidden items-center gap-7 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.title}>
                            <Link
                                href={link.href}
                                className="text-sm text-white/60 transition-colors hover:text-white"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                        Log in
                    </Link>
                    <Link
                        href="#cta"
                        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03] active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="md:hidden"
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>

                {open && (
                    <div className="absolute inset-x-0 top-[calc(100%+10px)] rounded-2xl border border-white/10 bg-black/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
                        <ul className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-lg px-3 py-2.5 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="#cta"
                            onClick={() => setOpen(false)}
                            className="mt-3 block rounded-full bg-white py-2.5 text-center text-sm font-medium text-black"
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
