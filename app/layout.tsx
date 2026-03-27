import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/ui/Cursor';
import PageTransition from '@/components/ui/PageTransition';
import JsonLd from '@/components/JsonLd';

/* ─── Fonts ─── */

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300'],
  variable: '--font-sans',
  display: 'swap',
});

/* ─── Metadata ─── */

export const metadata: Metadata = {
  title: {
    default: 'Landmark Estates — Premium Properties, Kerala',
    template: '%s · Landmark Estates',
  },
  description:
    'Landmark Estates curates exceptional residential and commercial properties across Kerala. Villas, apartments, heritage homes, and commercial spaces.',
  keywords: [
    'real estate Kerala',
    'luxury properties Kochi',
    'villas Kerala',
    'apartments Kerala',
    'heritage homes Kerala',
    'property for sale Kerala',
  ],
  metadataBase: new URL('https://landmarkestates.in'),
  openGraph: {
    title: 'Landmark Estates — Premium Properties, Kerala',
    description: 'Properties shaped by true stories.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
};

/* ─── Layout ─── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <JsonLd />
        <Cursor />
        <Nav />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
