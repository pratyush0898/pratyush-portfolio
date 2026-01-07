import NavBar from "@/components/common/navBar.jsx";
import Footer from "@/components/common/footer.jsx";
import ThemeToggle from "@/components/common/ThemeToggle.jsx";
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

/**
 * Wraps page content with the application's global HTML layout including navigation, theme toggle, footer, and noscript notices.
 * @param {Object} props - Component props.
 * @param {import('react').ReactNode} props.children - Content to render inside the layout.
 * @returns {JSX.Element} The root HTML structure for the page.
 */
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
          <noscript>You need to enable JavaScript to run this app.</noscript>
        <noscript>You need INTERNET to run this app.</noscript>
      </body>
    </html>
  );
}