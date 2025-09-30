import ThemeToggle from "@/components/common/ThemeToggle.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from "@/components/common/navBar.jsx";
import Footer from "@/components/common/footer.jsx";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import INFO from "@/data/user";
import "@/data/styles.css";
import "@/app/app.css";
import "@/index.css";

/** @type {import('next').Metadata} */
export const metadata = {
  title: INFO.main.title,
  description: INFO.main.description,
  keywords: INFO.main.keywords,
  authors: [{ name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app" }],
  robots: "index, follow",
  metadataBase: new URL("https://nvmpratyush.vercel.app/"),

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: INFO.main.title,
    description: INFO.main.description,
    url: INFO.main.url,
    siteName: INFO.main.siteName,
    images: [
      {
        url: "/homepage.png",
        width: 1400,
        height: 1400,
        alt: "Pratyush Kumar",
      },
      {
        url: "/logo.png",
        width: 524,
        height: 524,
        alt: "Pratyush Kumar logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: INFO.main.title,
    description: INFO.main.description,
    images: ["/homepage.png", "/logo.png"],
    creator: INFO.main.creator,
  },

  verification: {
    google: "r_ilpIOHAqgtXQwALiYlqGuTLMRBw93JfkYmQAF5SIk",
  },

  other: {
    "geo.region": INFO.other["geo.region"],
    "geo.placename": INFO.other["geo.placename"],
    "geo.position": INFO.other["geo.position"],
    ICBM: INFO.other.ICBM,
    "revisit-after": INFO.other["revisit-after"],
    language: INFO.other.language,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-content">
        <div className="content-wrapper">
          <NavBar />
          {children}
          <div className="page-footer">
            <Footer />
          </div>
        </div>
        <ThemeToggle />
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(INFO.jsonLd) }}
          strategy="afterInteractive" // or "lazyOnload" depending on your preference
        />
      </body>
    </html>
  );
}
