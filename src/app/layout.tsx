import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "@/utils";
import { base, body, display } from "@/constants";
import { Toaster } from "@/components/ui/sonner";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-body overflow-x-hidden",
                    base.variable,
                    body.variable,
                    display.variable,
                )}
            >
                <Toaster richColors theme="dark" position="top-right" />
                {children}
            </body>
        </html>
    );
};
