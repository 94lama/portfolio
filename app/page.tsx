import Weather from "@/../components/weather";
import Card from "@/../components/card";

/* ///[Variables] */

const experiences = [
  { title: "Architect", company: "Orbyta Engineering", description: "Provided support in designing the restoration of Teatro Greco di Eraclea Minoa and its surrounding archaeological area (Selected project in a Design Competition)", date: "2023" },
  { title: "Architect", company: "Lorena Alessio Architetti", description: "Collaborated on architectural design for a luxury RTA in Courmayeur, in partnership with KKAA Studio", date: "2022" },
  { title: "Architect", company: "G*AA", description: "Architectural design for renovation and energy-efficiency interventions on residential buildings", date: "2022" },
  { title: "Architect", company: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2021" },
  { title: "Architect", company: "GAMAStudio", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2020" },
  { title: "Intern Architect", company: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2018" },
];

const studies = [
  { title: "Cybersecurity - DevSecOps Expert", institution: "Aulab srl", description: "Specializing course in Cybersecurity", date: "2024" },
  { title: "Full Stack developer junior", institution: "Aulab srl", description: "Bootcamp in Full Stack Developing", date: "2023" },
  { title: "2nd Level Post-grad master", institution: "Politecnico di Torino", description: "Metodi e tecniche per il governo dei territori resilienti", date: "2022" },
  { title: "Master degree", institution: "Politecnico di Torino", description: "Archietcture for the Sustabnable design", date: "2019" },
  { title: "Bachelor Degree", institution: "Politecnico di Torino", description: "Archietcture Science", date: "2016" },
];

const classGroups = "flex flex-col justify-center relative bg-purple-100 bg-opacity-75 rounded-3xl p-5 mx-10 md:w-4/6 w-[calc(100vw-5rem)]";
const classCards = "flex flex-wrap justify-center w-[calc(100vw-10rem)] min-w-[21rem] md:w-fit"; //each card occupies 20rem + 0.5 margin each side

/* ///[Component] */
export default function Home() {
  return (
    <main id="homePage">
      <Weather />

      {/* ///[About me] */}
      <div className="h-screen  pt-12 relative">
        <div className={classGroups + " sm:w-[calc(100vw-8rem)] w-2/6 absolute top-40 left-40"}>
          <h1>About me</h1>
          <h3 className="!font-normal !important">I am a Full-stack Developer with expertise in Front-end and Back-end programming, acquired through intensive coding bootcamp training and rigorous online coursework. Proficient in Graphic Design, Agile methodologies (particularly SCRUM), collaborative teamwork, and adept problem-solving skills.</h3>
        </div>
      </div>

      {/* ///[Experiences] */}
      <div id="experiences" className="pt-20">
        <div className={classGroups}>
          <h2>Experiences</h2>
          <div className={classCards}>
            {
              experiences.map((experience, i) => (
                <Card title={experience.title} description={experience.description} date={experience.date} detail={experience.company} key={i} />
              ))
            }
          </div>
        </div>
      </div>

      {/* ///[Studies] */}
      <div id="studies" className="py-20">
        <div className={classGroups}>
          <h2>Studies</h2>
          <div className={classCards}>
            {
              studies.map((studies, i) => (
                <Card title={studies.title} description={studies.description} date={studies.date} detail={studies.institution} key={i} />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
