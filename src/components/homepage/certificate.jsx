import React from "react";
import { faAward } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "@/data/user";

import "./styles/certificate.css";

const Certificate = () => {
	return (
		<div className="certificate">
			<Card
				icon={faAward}
				title="Certificates"
				body={
					INFO.certificates &&
					INFO.certificates.map((cert, idx) => (
						<div className="certificates" key={idx}>
							<div className="certificate-item">
								<img
									src={cert.icon}
									alt={cert.title}
									className="certificate-image"
								/>
								<div className="certificate-title">
									{cert.title}
								</div>
							</div>
						</div>
					))
				}
			/>
		</div>
	);
};

export default Certificate;
