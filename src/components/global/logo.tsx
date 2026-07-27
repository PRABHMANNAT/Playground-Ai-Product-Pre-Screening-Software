import { cn } from "@/lib";

/** Isometric cube mark — three faces implying a solid built from a flat prompt. */
const Logo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className={cn("shrink-0", className)}
    >
        <path d="M16 3 28 10v12L16 29 4 22V10L16 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M16 3v13m0 0 12-6m-12 6L4 10m12 6v13" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.55" />
    </svg>
);

export default Logo;
