import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Suspense } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: "Elisha's Concept - Books & Online Courses",
    template: "%s | Elisha's Concept"
  },
  description: 'Discover insightful books and comprehensive online courses designed to expand your knowledge and skills. Join our learning community today.',
  keywords: ['books', 'online courses', 'education', 'learning', 'knowledge', 'skills'],
  authors: [{ name: 'Elisha' }],
  creator: 'Elisha',
  publisher: "Elisha's Concept",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elishas-concept.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elishas-concept.com',
    title: "Elisha's Concept - Books & Online Courses",
    description: 'Discover insightful books and comprehensive online courses designed to expand your knowledge and skills.',
    siteName: "Elisha's Concept",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elisha's Concept - Books & Online Courses",
    description: 'Discover insightful books and comprehensive online courses designed to expand your knowledge and skills.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <Suspense fallback={<div className="h-16 bg-background border-b" />}>
              <Navigation />
            </Suspense>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 