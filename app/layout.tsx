import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import {ReactNode} from "react";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
});

export const metadata: Metadata = {
    title: 'Miantsa Fanirina - Full Stack Developer',
    description:
        'Passionate full-stack developer crafting digital experiences with modern technologies',
    keywords: [
        'developer',
        'full-stack',
        'javascript',
        'typescript',
        'react',
        'node.js',
    ],
};

export default function RootLayout(
    {
        children,
    }: {
        children: ReactNode;
    }
) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
