import React from "react";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "@/data/user";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills-container">
			<Card
				icon={faCogs}
				title="Skills"
				body={
					INFO.skills && INFO.skills.map((skills, idx) => (
						<div className="skills" key={idx}>
							<div className="skill-item">
								<div className="skill-left">
									<img src={skills.logo} alt={skills.title} className="skill-image" />
									<div className="skill-title">{skills.title}</div>
								</div>
								<div className="skill-right">
									<div className="skill-level">{skills.level}</div>
								</div>
							</div>
						</div>
					))
				}
			/>
		</div>
	);
};

export default Skills;
