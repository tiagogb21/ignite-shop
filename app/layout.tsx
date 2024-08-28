import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: {
        default: "Ignite Shop",
        template: "%s | Ignite Shop",
    },
    description: "Ignite shop app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} bg-gray-background`}>
                {children}
            </body>
        </html>
    );
}
