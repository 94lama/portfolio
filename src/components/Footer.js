import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faMessage);

export default function Footer() {

    return (
        <section className='footer align-content-center' id="footer">
            {/* <article>
                <h4>Future improvements</h4>
                <ul onLoad="function (){
                fetch('../data/to-do.txt')
                .then(response => response.text())
                .then(response => this.innerText=response);
            }">
                </ul>
            </article> */}
            <article>
                <h4>Contacts</h4>
                <ul>
                    <a href="mailto:riccardo.lamalfa94@gmail.com?subject = Hi&body = Hello, there!" ><FontAwesomeIcon icon="fa-solid fa-envelope" size="2xl" /></a>
                    <a href="https://t.me/riccardo_lama"><FontAwesomeIcon icon="fa-solid fa-message" size='2xl' /></a>
                </ul>
            </article>
            <article>
                <h4>Credits</h4>
                <ul>
                    <a href="https://open-meteo.com">Weather data is offered by Open-meteo</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/roOehodmb9c4/smiling-face-with-heart">Smiling Face With Heart icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/63377/disappointed">Disappointed icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/61606/neutral">Neutral icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/10506/clothes">Clothes icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/22455/lab-coat">Lab Coat icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/24899/men's-pajama">Men's Pajama icon by Icons8</a>
                    <a target="_blank" rel='noreferrer noopener' href="https://icons8.com/icon/18610/rain-cloud">Rain Cloud icon by Icons8</a>
                </ul>
            </article>
        </section>

    )
};