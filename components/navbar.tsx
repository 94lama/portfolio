import "./navbar.sass";
// import Notes from "./Notes";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faPinterest, faGithub, faStackOverflow, faFigma } from '@fortawesome/free-brands-svg-icons';

const iconStyle = "icon p-1 rounded-md bg-transparent h-10 transform hover:scale-110 hover:bg-white hover:text-slate-800/50 duration-600";

function Navbar() {
    return (
        /* Adjust height of navbar and icons */
        <nav className="fixed z-50 top-0 w-full h-12 flex content-around justify-evenly bg-slate-800/50 backdrop-blur shadow-md ">
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
            <div className="flex col-gap-10">
                <a href="#experiences">Experiences</a>
                <a href="#studies">Studies</a>
            </div>
        </nav>
    );
};

export default Navbar;