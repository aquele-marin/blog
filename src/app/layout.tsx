import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Drawer, Navbar, Alert } from "@/ui";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Marin Blog",
    description: "A personal blog by Marin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="flex flex-col max-h-screen h-screen overflow-hidden">
                    <Navbar />
                    <div className="h-screen inline-flex">
                        <Drawer />
                        <main className="w-full h-full">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
