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
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-colors duration-300",
                scrolled && "border-b border-white/10 bg-black/60 backdrop-blur-xl",
            )}
        >
            <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-5 lg:px-10">
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="size-7" />
                    <span className="font-display text-lg font-bold tracking-tight">
                        Playground
                    </span>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
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
            </nav>

            {open && (
                <div className="border-t border-white/10 bg-black/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden">
                    <ul className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.title}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-2.5 text-white/70 transition-colors hover:text-white"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#cta"
                        onClick={() => setOpen(false)}
                        className="mt-4 block rounded-full bg-white py-2.5 text-center text-sm font-medium text-black"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
