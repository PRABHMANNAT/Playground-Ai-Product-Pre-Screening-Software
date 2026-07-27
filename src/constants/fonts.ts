import { Fustat, Schibsted_Grotesk, Inter } from "next/font/google";

export const display = Fustat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-display",
});

export const body = Schibsted_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-body",
});

export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});
