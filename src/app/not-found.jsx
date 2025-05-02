import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import Head from "next/head";
import Logo from "@/components/common/logo";
import URL from "@/components/url";

import INFO from "@/data/user";

import "@/styles/not-found.css";

const Notfound = () => {
	return (
		<React.Fragment>
			<Head>
				<title>{`404 | ${INFO.main.title}`}</title>
			</Head>

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
							We can't seem to find the page you're looking
							for.
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
