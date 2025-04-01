import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/Header';
import { Toaster } from '@/components/ui/sonner'; // Import Sonner Toaster

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spark Leaf - Igniting Business Growth',
  description:
    'Spark Leaf is your key partner in business development, offering innovative strategies and solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <Header />
        <main>{children}</main>
        <Toaster richColors position="top-right" /> {/* Add Toaster here */}
        {/* Add Footer later */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
