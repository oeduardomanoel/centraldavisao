import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Central da Visão – Oftalmologia especializada em Balneário Camboriú',
  description: 'Há 18 anos cuidando da sua saúde ocular com excelência e dedicação. Agende sua consulta em Balneário Camboriú com nossos especialistas.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Central da Visão – Oftalmologia',
    description: 'Tratamento oftalmológico especializado em Balneário Camboriú. Catarata, refração e exames completos.',
    url: 'https://www.centraldavisao.com.br',
    siteName: 'Central da Visão',
    images: [
      {
        url: 'https://i.imgur.com/qdWhkzn.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fachada da Clínica Central da Visão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central da Visão – Oftalmologia',
    description: '18 anos garantindo qualidade para seus olhos.',
  },
  alternates: {
    canonical: 'https://www.centraldavisao.com.br',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Central da Visão',
  url: 'https://www.centraldavisao.com.br',
  logo: 'https://i.imgur.com/qdWhkzn.jpeg',
  description: 'Clínica oftalmológica especializada em Balneário Camboriú.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua 901, nº 431 – Sala 03 – Térreo',
    addressLocality: 'Balneário Camboriú',
    addressRegion: 'SC',
    addressCountry: 'BR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-47-98914-6073',
    contactType: 'Reservations'
  },
  medicalSpecialty: 'Ophthalmologic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
       <head>
        <link rel="preload" as="image" href="https://i.imgur.com/qdWhkzn.jpeg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NVQ3WXJ');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '963251781355194');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NVQ3WXJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=963251781355194&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
