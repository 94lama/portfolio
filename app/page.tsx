import Weather from "@/../components/weather";
import Card from "components/card";

const experiences = [
  { title: "Architect", company: "Orbyta Engineering", description: "Provided support in designing the restoration of Teatro Greco di Eraclea Minoa and its surrounding archaeological area (Selected project in a Design Competition)", date: "2023" },
  { title: "Architect", company: "Lorena Alessio Architetti", description: "Collaborated on architectural design for a luxury RTA in Courmayeur, in partnership with KKAA Studio", date: "2022" },
  { title: "Architect", company: "G*AA", description: "Architectural design for renovation and energy-efficiency interventions on residential buildings", date: "2022" },
  { title: "Architect", company: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2021" },
  { title: "Architect", company: "GAMAStudio", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2020" },
  { title: "Assistant Architect (internship)", company: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2018" },
];

const studies = [
  { title: "Architect", company: "Orbyta Engineering", description: "Provided support in designing the restoration of Teatro Greco di Eraclea Minoa and its surrounding archaeological area (Selected project in a Design Competition)", date: "2023" },

];

const classGroups = "flex flex-col justify-center relative bg-purple-100 bg-opacity-75 rounded-lg p-10 m-10";
const classCards = "flex flex-row flex-wrap justify-start justify-items-center m-auto";

export default function Home() {
  return (
    <main id="homePage">
      <Weather />

      {/* Experiences */}
      <div className={classGroups+" mt-20 pt-20"}>
        <h2>Experiences</h2> 
        <div className={classCards}>
          {
            experiences.map((experience) => (
              <Card title={experience.title} description={experience.description} date={experience.date} detail={experience.company} />
            ))
          }
        </div>
      </div>

      {/* Studies */}
      <div className={classGroups}>
        <h2>Studies</h2> 
        <div className={classCards}>
          {
            experiences.map((experience) => (
              <Card title={experience.title} description={experience.description} date={experience.date} detail={experience.company} />
            ))
          }
        </div>
      </div>
    </main>
  );
}
