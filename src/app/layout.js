import NavBar from "@/components/common/navBar.jsx";
import Footer from "@/components/common/footer.jsx";
import Head from "next/head";
import Script from "next/script";
import KursorInit from "@/components/kursor.js";
import "@/app/app.css";
import "@/index.css";
import "@/data/styles.css";

export const metadata = {
  title: "Pratyush Kumar: Web Developer",
  description:  
    "Welcome to the portfolio website of Pratyush Kumar, a talented web developer from India. Explore his skills, projects, and contact him for collaborations.",
  keywords: "Pratyush, web developer, portfolio, India, projects, contact, collaborations",
  author: "Pratyush Kumar",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={metadata.themeColor} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="google-site-verification" content="r_ilpIOHAqgtXQwALiYlqGuTLMRBw93JfkYmQAF5SIk" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
      </Head>

      {/* Kursor.js */}
      <Script src="https://cdn.jsdelivr.net/npm/kursor" strategy="afterInteractive" />
      <Script src="https://unpkg.com/kursor" strategy="afterInteractive" />

      <body className={`page-content`}>
        <KursorInit />
        <NavBar />
        {children}
        <div className="page-footer">
          <Footer />
        </div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <noscript>You need INTERNET to run this app.</noscript>
      </body>
    </html>
  );
}
