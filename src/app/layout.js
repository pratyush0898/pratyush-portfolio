import NavBar from "@/components/common/navBar.jsx";
import Footer from "@/components/common/footer.jsx";
import ThemeToggle from "@/components/common/ThemeToggle.jsx";
import "@/app/app.css";
import "@/index.css";
import "@/data/styles.css";

/** @type {import('next').Metadata} */
export const metadata = {
  title: "Pratyush Kumar: Web Developer",
  description:
    "Welcome to the portfolio website of Pratyush Kumar, a talented web developer from India. Explore his skills, projects, and contact him for collaborations.",
  keywords:
    "Pratyush, web developer, portfolio, India, projects, contact, collaborations",
  authors: [{ name: "Pratyush Kumar", url: "https://nvmpratyush.vercel.app" }],
  robots: "index, follow",
  metadataBase: new URL("https://nvmpratyush.vercel.app"),

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.png",   type: "image/png", sizes: "512x512" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "Pratyush Kumar: Web Developer",
    description:
      "Pratyush is an Indian web developer showcasing skills, passion projects, and client work. Let's build the web, better.",
    url: "https://nvmpratyush.vercel.app",
    siteName: "Pratyush Kumar",
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
    title: "Pratyush Kumar: Web Developer",
    description:
      "Explore the portfolio of Pratyush Kumar, a creative web dev from India building stunning and functional websites.",
    images: ["/homepage.png", "/logo.png"],
    creator: "@nvmpratyush",
  },

  verification: {
    google: "jRUy_ry4PSX-sDVpjn9c4bc-eVC5f_w4E5IVyTepHC8",
  },

  other: {
    "geo.region": "IN-CT",
    "geo.placename": "Durg, Chhattisgarh",
    "geo.position": "21.1905;81.2849",
    ICBM: "21.1905, 81.2849",
    "revisit-after": "7 days",
    language: "English",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-content">
        <NavBar />
        {children}
        <ThemeToggle />
        <div className="page-footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
