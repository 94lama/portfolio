import Project from "./Card_experience";
import list from '../data/project-links.json';
import './css/base.css';
//add primary to color picking

export const displayW = window.innerWidth < 1200;

export default function CV() {
    let proj = [];
    list.forEach(element => {
        let style;
        let dist;
        let marg = Math.trunc(Math.random()) * 5;
        //let margTop = (marg*6)-3;
        let col = ["#011f4b", "#03396c", "#005b96", "#6497b1", "#b3cde0", "#b3cde0", "#FFD700"];
        if (element[0] % 2 !== 0) {
            style = {
                flexDirection: 'row',
                left: `-${(marg + 1)}rem`,
                background: displayW ? (`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(./projects/${element[1]})`) : `transparent`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
            dist = displayW ? '3rem' : '0 0 0 -5rem';
        } else {
            style = {
                flexDirection: 'row-reverse',
                right: `-${(marg + 1)}rem`,
                background: displayW ? (`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(./projects/${element[1]})`) : `transparent`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            };
            dist = displayW ? '3rem' : `0 -5rem 0 0`;
        };
        proj.push(
            <Project
                id={element[0]}
                key={element[0]}
                name={element[2]}
                img={element[1]}
                desc={element[3]}
                class={style}
                margin={dist}
                color={`${col[Math.trunc(Math.random() * 3 + 1)]}`}
            />
        );
    });
    return (
        <section id='CV'>{proj}</section>
    );
}