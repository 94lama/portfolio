import React from 'react';
import Linkedin from '../assets/icons/linkedin-circled--v1.png';
import Pinterest from '../assets/icons/pinterest--v1.png';
import GitHub from '../assets/icons/github.png';
import Stack from '../assets/icons/stackoverflow.png';
import Fiverr from '../assets/icons//fiverr.png';
import Figma from '../assets/icons/icons8-figma.svg';

//Open list in new window

function newWin() {
    window.open('../public/notes.html', 'notes', 'width=400px,height =500px');
};

export default function Header() {
    return (
        <header>
            <section>
                <a href="https://www.linkedin.com/in/riccardo-la-malfa-a65b7515a/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <img class="icon" src={Linkedin} alt="Linkedin icon" />
                </a>
                <a href="https://www.pinterest.it/lama_rch/" target="_blank" rel="noreferrer noopener">
                    <img class="icon" src={Pinterest} alt="Pinterest icon" />
                </a>
                <a href="https://github.com/94lama" target="_blank" rel="noreferrer noopener">
                    <img class="icon" src={GitHub} alt="GitHub icon" />
                </a>
                <a href="https://stackoverflow.com/users/20914708/riccardo-la-malfa" target="_blank"
                    rel="noreferrer noopener">
                    <img class="icon" src={Stack} alt="Stack Overflow icon" />
                </a>
                <a href="https://it.fiverr.com/lamar994?up_rollout=true" target="_blank" rel="noreferrer noopener">
                    <img class="icon" src={Fiverr} alt="Fiverr icon" />
                </a>
                <a href="https://www.figma.com/files/recent?fuid=1208783546950227088" target="_blank"
                    rel="noreferrer noopener">
                    <img class="icon" src={Figma} alt="Figma icon" />
                </a>
            </section>
            <section style={{ display: 'grid', gridAutoFlow: 'column', columnGap: '3rem' }}>
                <a href="#projects">
                    <h2>Projects</h2>
                </a>
                <a href="#cv">
                    <h2>CV</h2>
                </a>
            </section>
            <button onClick={newWin}>Take notes</button>
        </header>
    )
}