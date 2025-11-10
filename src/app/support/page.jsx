import React from "react";
import Logo from "@/components/common/logo.jsx";
import INFO from "@/data/user";
import SEO from "@/data/seo";
import "@/styles/support.css";
import PaymentButton from "@/components/support/PaymentButton";

export const metadata = {
  title: `Support me | ${INFO.main.title}`,
  description: SEO.find((item) => item.page === "support").description,
  keywords: SEO.find((item) => item.page === "support").keywords.join(", "),
};

const Support = () => {
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="support-logo-container">
          <div className="support-logo">
            <Logo width={46} />
          </div>
        </div>

        <div className="support-container">
          <div className="support-main">
            <div className="support-right-side">
              <div className="title support-title">{INFO.support.title}</div>
              <div className="subtitle support-subtitle">
                {INFO.support.description}
              </div>

              <PaymentButton />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Support;
