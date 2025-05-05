import React from "react";
import Logo from "@/components/common/logo.jsx";
import URL from "@/components/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import INFO from "@/data/user";
import "@/styles/not-found.css";

export const metadata = {
  title: `404 | ${INFO.main.title}`,
  description: "Page not found. The requested URL was not found on this server.",
  robots: "noindex, nofollow"
};

const Notfound = () => {
  return (
    <React.Fragment>
      <div className="not-found content-wrapper">
        <div className="notfound-logo-container">
          <div className="projects-logo">
            <Logo width={46} />
          </div>
        </div>
        <div className="notfound-container">
          <div className="notfound-message">
            <div className="notfound-title">
              Oops! <FontAwesomeIcon icon={faFaceSadTear} />
            </div>
            <div className="not-found-message">
              We can't seem to find the page you're looking for.
              <br />
              The requested URL "<URL />" was
              not found on this server.
            </div>
            <a href="/" className="not-found-link">
              Go back to the home page
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notfound;
