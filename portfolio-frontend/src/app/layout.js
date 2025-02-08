import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import { Oxanium } from 'next/font/google';
import Header from '@/components/header/Header';
import LenisProvider from '@/components/utils/LenisProvider';
import { Toaster } from '@/components/ui/toaster';

const oxanium = Oxanium({
    subsets: ['latin'],
    weight: ['400'], // Choose weights you need
    variable: '--font-oxanium', // Define a CSS variable for Tailwind
});

export const metadata = {
    title: 'Fi Amanillah',
    description: 'Fi Amanillah - Portfolio',
    icons: {
        icon: '/favicon.svg', // Default favicon
        shortcut: '/favicon.svg', // Shortcut icon
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`antialiased  ${oxanium.variable} font-oxanium bg-background prose max-w-none`}
            >
                <LenisProvider />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Toaster />
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
