import React from "react";
import Logo from "@/components/common/logo";
import Socials from "@/components/about/socials";

import INFO from "@/data/user";
import SEO from "@/data/seo";

import "@/styles/contact.css";

export const metadata = {
  title: `Contact | ${INFO.main.title}`,
  description: SEO.find((item) => item.page === "contact").description,
  keywords: SEO.find((item) => item.page === "contact").keywords.join(", "),

  openGraph: {
    title: `Contact | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "contact").description,
    url: "https://nvmpratyush.vercel.app/contact",
    siteName: "Pratyush Kumar",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Pratyush Kumar logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `Contact | ${INFO.main.title}`,
    description: SEO.find((item) => item.page === "contact").description,
    images: ["/logo.webp"],
    creator: "@nvmpratyush",
  },
};

const Contact = () => {
  return (
    <React.Fragment>
      <>
        <div className="contact-logo-container">
          <div className="contact-logo">
            <Logo width={46} />
          </div>
        </div>
        <div className="contact-container">
          <div className="title contact-title">
            Let's Get in Touch: Ways to Connect with Me
          </div>
          <div className="contact-subtitle">
            Thank you for your interest in getting in touch with me. I welcome
            your feedback, questions, and suggestions. If you have a specific
            question or comment, please feel free to email me directly at &nbsp;{" "}
            <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I make
            an effort to respond to all messages within 24 hours, although it
            may take me longer during busy periods. Alternatively, you can use
            the contact form on my website to get in touch. Simply fill out the
            required fields and I'll get back to you as soon as possible.
            Finally, if you prefer to connect on social media, you can find me
            on{" "}
            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
              {INFO.socials.instagram}
            </a>
            . I post regular updates and engage with my followers there, so
            don't hesitate to reach out. Thanks again for your interest, and I
            look forward to hearing from you!
          </div>
        </div>
        {/* <div className="socials-container">
						<div className="about-socials">
							<Socials />
						</div>
					</div> */}
        <div className="about-left-side">
          <div className="about-socials contact-socials">
            <Socials />
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Contact;
