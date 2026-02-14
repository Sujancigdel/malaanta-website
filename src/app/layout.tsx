import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Malaanta - Waste Collection & Management Platform",
    description: "Malaanta is a waste technology company building a smarter, cleaner, and more sustainable waste system for Nepal. Reliable collection, segregation support, and circular economy focus.",
    keywords: "Waste management Kathmandu, Waste collection Nepal, Digital waste management, Composting Kathmandu, Recycling services Kathmandu",
    openGraph: {
        title: "Malaanta - Waste Collection & Management Platform",
        description: "Building a smarter, cleaner, and more sustainable waste system for Nepal.",
        url: "https://malaanta.com.np",
        siteName: "Malaanta",
        images: [
            {
                url: "https://malaanta.com.np/logo.png", // Ideally a larger OG image
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Malaanta - Waste Collection & Management Platform",
        description: "Building a smarter, cleaner, and more sustainable waste system for Nepal.",
    },
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Malaanta Groups Pvt. Ltd.",
        "url": "https://malaanta.com.np",
        "logo": "https://malaanta.com.np/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Thali",
            "addressRegion": "Kathmandu",
            "addressCountry": "NP"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+977-9841278652",
            "contactType": "customer service"
        }
    };

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased text-gray-900`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
