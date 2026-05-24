import type { Metadata } from "next";
import Script from "next/script";
import SiteFooter from "./components/SiteFooter";
import AnimatedLayout from "./components/AnimatedLayout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dubemdev.me"),
  title: {
    default: "Emmanuel Chidubem | Fullstack Developer Portfolio",
    template: "%s | Emmanuel Chidubem",
  },
  description:
    "Emmanuel Chidubem's fullstack developer portfolio showcasing web projects, skills, and expertise.",
  keywords: [
    "Emmanuel Chidubem",
    "Fullstack Developer",
    "Portfolio",
    "Web Development",
    "Frontend",
    "Backend",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Emmanuel Chidubem" }],
  creator: "Emmanuel Chidubem",
  openGraph: {
    type: "website",
    url: "https://dubemdev.me",
    siteName: "Emmanuel Chidubem Portfolio",
    title: "Emmanuel Chidubem | Fullstack Developer Portfolio",
    description:
      "Portfolio of Emmanuel Chidubem, showcasing fullstack development projects and skills.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Chidubem Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Chidubem | Fullstack Developer",
    description:
      "Portfolio of Emmanuel Chidubem, showcasing fullstack development projects and skills.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Chidubem",
              jobTitle: "Fullstack Developer",
              url: "https://dubemdev.me",
              sameAs: [
                "https://github.com/Dubem-source",
                "https://www.linkedin.com/in/emmanuel-chidubem-m-663851377/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIcg97LSoQ9GUoqDhobWjXg%3D%3D",
                "https://x.com/Miracle1576420",
                "http://www.youtube.com/@dubemCodes",
                "https://instagram.com/CodeWithDubem",
              ],
            }),
          }}
        />
        <AnimatedLayout>{children}</AnimatedLayout>
        <SiteFooter />
      </body>
    </html>
  );
}
