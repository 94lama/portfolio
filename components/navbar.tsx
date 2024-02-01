import "./navbar.sass";
// import Notes from "./Notes";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faPinterest, faGithub, faStackOverflow, faFigma } from '@fortawesome/free-brands-svg-icons';

const iconStyle = "icon p-1 rounded-md bg-transparent shadow transform hover:scale-125 hover:text-purple-500"

function Navbar() {
    return (
        <nav className="bg-black fixed w-full h-16 flex content-around justify-evenly z-50 top-0">
            <div className="icons content-around my-auto">
                <a href="https://www.linkedin.com/in/riccardo-la-malfa/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faLinkedin} className={iconStyle} />
                </a>
                <a href="https://www.pinterest.it/lama_rch/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faPinterest} className={iconStyle} />
                </a>
                <a href="https://github.com/94lama" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGithub} className={iconStyle} />
                </a>
                <a href="https://stackoverflow.com/users/20914708/riccardo-la-malfa" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faStackOverflow} className={iconStyle} />
                </a>
                <a href="https://www.figma.com/files/recent?fuid=1208783546950227088" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faFigma} className={iconStyle} />
                </a>
            </div>
            <a href="#cv">Projects</a>
            <a href="#footer">Contacts</a>
        </nav>
    );
};

export default Navbar;