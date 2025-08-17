import React, { Suspense } from "react";

import LogoWithScroll from "@/components/common/LogoWithScroll.jsx";
import Works from "@/components/homepage/works.jsx";
import AllProjects from "@/components/projects/allProjects.jsx";

import INFO from "@/data/user.js";
import SEO from "@/data/seo.js";

import "@/styles/homepage.css";
import Socials from "@/components/homepage/socials";
import Skills from "@/components/homepage/skills";
import HomepageArticles from "@/components/homepage/HomepageArticles";

export const metadata = {
  title: INFO.main.title,
  description: SEO.find((item) => item.page === "home").description,
  keywords: SEO.find((item) => item.page === "home").keywords.join(", "),

  openGraph: {
    title: INFO.main.title,
    description: SEO.find((item) => item.page === "home").description,
    url: "https://nvmpratyush.vercel.app",
    siteName: "Pratyush Kumar",
    images: [
      {
        url: "/homepage.png",
        width: 1400,
        height: 1400,
        alt: "Pratyush Kumar Portfolio Home",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: INFO.main.title,
    description: SEO.find((item) => item.page === "home").description,
    images: ["/homepage.png"],
    creator: "@nvmpratyush",
  },
};

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="homepage-logo-container">
          <LogoWithScroll />
        </div>
        <div className="homepage-container">
          <div className="homepage-first-area">
            <div className="homepage-first-area-left-side">
              <h1 className="title homepage-title">{INFO.homepage.title}</h1>
              <p className="subtitle homepage-subtitle">
                {INFO.homepage.description}
              </p>
            </div>
            <div className="homepage-first-area-right-side">
              <div className="homepage-image-container">
                <div className="homepage-image-wrapper">
                  <img
                    src="homepage.png"
                    alt="about"
                    className="homepage-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <Socials />
          <div className="homepage-projects">
            <AllProjects />
          </div>
          <div className="homepage-after-title">
            <Suspense
              fallback={
                <div className="homepage-articles">
                  <noscript>Articles API needs JavaScript to render</noscript>
                  <p className="subtitle homepage-subtitle">
                    Loading articles…
                  </p>
                </div>
              }
            >
              <HomepageArticles />
            </Suspense>
            <div className="homepage-after-title-right">
              <div className="homepage-works">
                <Works />
              </div>
              <div className="homepage-skills">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
