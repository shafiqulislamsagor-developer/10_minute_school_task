import Navbar from "@/components/Navbar";
import { LangProvider } from "@/context/LangContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ProductProvider } from "./api/useProduct";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Supported OpenGraph types by Next.js
const validOgTypes = [
  "website",
  "article",
  "book",
  "profile",
  "music.song",
  "music.album",
  "music.playlist",
  "music.radio_station",
  "video.movie",
  "video.episode",
  "video.tv_show",
  "video.other",
];

// ✅ generateMetadata function
export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=bn",
      {
        next: { revalidate: 60 },
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
      }
    );

    const data = await res.json();
    const seo = data?.data?.seo;

    if (!seo) return {};

    const getContent = (key: string) =>
      seo.defaultMeta.find((m: any) => m.value === key)?.content;

    const ogType = getContent("og:type");
    const safeOgType = validOgTypes.includes(ogType) ? ogType : "website";

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      openGraph: {
        title: getContent("og:title") || seo.title,
        description: getContent("og:description") || seo.description,
        type: safeOgType,
        url: getContent("og:url"),
        locale: getContent("og:locale"),
        images: [
          {
            url: getContent("og:image"),
            secureUrl: getContent("og:image:secure_url"),
            alt: getContent("og:image:alt"),
            type: getContent("og:image:type"),
            width: 1200,
            height: 630,
          },
        ],
      },
      metadataBase: new URL("https://10minuteschool.com"),
    };
  } catch (error) {
    console.error("SEO metadata fetch error:", error);
    return {};
  }
}

// ✅ RootLayout component
export default async function RootLayout({
  children,
  trailerCourse,
}: Readonly<{
  children: React.ReactNode;
  trailerCourse?: React.ReactNode;
}>) {
  let schemas: any[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/ielts-course?lang=bn`,
      {
        next: { revalidate: 60 },
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
      }
    );
    const data = await res.json();
    schemas = data?.data?.seo?.schema?.filter((s: any) => s.meta_value) || [];
  } catch (error) {
    console.error("Schema fetch error:", error);
  }

  return (
    <html lang="en">
      <head>
        {schemas.map((item: any, idx: number) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: item.meta_value }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProvider>
          <ProductProvider>
            <Navbar />
            <div className="max-w-7xl justify-between mt-4 mx-auto flex items-start">
              {children}
              {trailerCourse}
            </div>
          </ProductProvider>
        </LangProvider>
      </body>
    </html>
  );
}
