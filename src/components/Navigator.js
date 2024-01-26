import fiverr from "../assets/icons/fiverr.png";
import Notes from "./Notes";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faPinterest, faGithub, faStackOverflow, faFigma } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faPinterest, faGithub, faStackOverflow, faFigma);

function Navigator() {
    return (
        <section className="App-header">
            <div>
                <a href="https://www.linkedin.com/in/riccardo-la-malfa/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" />
                </a>
                <a href="https://www.pinterest.it/lama_rch/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon="fa-brands fa-pinterest" size="2xl" />
                </a>
                <a href="https://github.com/94lama" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
                </a>
                <a href="https://stackoverflow.com/users/20914708/riccardo-la-malfa" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon="fa-brands fa-stack-overflow" size="2xl" />
                </a>
                <a href="https://it.fiverr.com/lamar994?up_rollout=true" target="_blank" rel="noreferrer noopener">
                    <img src={fiverr} alt="Fiverr icon" style={{ alignItems: "center" }} />
                </a>
                <a href="https://www.figma.com/files/recent?fuid=1208783546950227088" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon="fa-brands fa-figma" size="2xl" />
                </a>
            </div>
            <div className="textLinks">
                <a href="#CV"><h2>Projects</h2></a>
                <a href="#footer"><h2>Contacts</h2></a>
            </div>
            <Notes />
        </section>
    );
};

export default Navigator;