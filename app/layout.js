import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

import { Providers } from "./providers";
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://bridge-project.eu'),
  title: {
    default: 'BRIDGE - Apoio Legal, Financeiro e Logístico para Cuidadores Informais',
    template: '%s | BRIDGE Project'
  },
  description: 'O projeto BRIDGE oferece suporte legal, financeiro e logístico para cuidadores informais em Portugal. Recursos, orientação e assistência para quem cuida de familiares.',
  keywords: [
    'cuidadores informais',
    'apoio cuidadores',
    'suporte legal cuidadores',
    'assistência financeira cuidadores',
    'apoio logístico',
    'cuidadores familiares',
    'recursos cuidadores',
    'Portugal cuidadores',
    'informal caregivers',
    'caregiver support',
    'legal support caregivers',
    'financial assistance caregivers'
  ],
  authors: [{ name: 'BRIDGE Consortium' }],
  creator: 'BRIDGE Project',
  publisher: 'BRIDGE Project',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    alternateLocale: ['en_GB', 'fr_FR'],
    url: 'https://bridge-project.eu',
    siteName: 'BRIDGE Project',
    title: 'BRIDGE - Apoio para Cuidadores Informais',
    description: 'Suporte legal, financeiro e logístico para cuidadores informais em Portugal.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BRIDGE Project - Apoio para Cuidadores Informais',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRIDGE - Apoio para Cuidadores Informais',
    description: 'Suporte legal, financeiro e logístico para cuidadores informais.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bridge-project.eu',
    languages: {
      'pt-PT': 'https://bridge-project.eu',
      'en-GB': 'https://bridge-project.eu/en',
      'fr-FR': 'https://bridge-project.eu/fr',
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <StructuredData />
        <Providers>
          <ClientWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}
