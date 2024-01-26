import { Weather } from "./Weather";
import profile from '../assets/profile-picture.jpg';

export default function About() {

    return (
        <section className="cover row justify-items-center">
            <div className="col-12 col-md-6">
                <img className='profile col-12 img-fluid' alt='profile' src={profile} />
            </div>
            <div className="col-12 col-md-6 align-content-center">
                <section className="col-12 col-md-6">
                    <h1>Riccardo La Malfa</h1>
                    <h3>Architect & Full-Stack Developer</h3>
                    <p>Hi, I'm Riccardo, an Architect and a Full-Stack Developer. I am thrilled by design by all its means and
                        by its reflections on society. I live in Turin, where I also got my Bachelor and Master's degree in Architecture.
                    </p>
                </section>
                <Weather />
                <div id="open-meteo" />
            </div>
        </section>
    )
};