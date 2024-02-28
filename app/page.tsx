import Weather from "@/../components/weather";
import CardContainer from "@/../components/cardContainer";


/* ///[Variables] */

const experiences = [
  { title: "Architect", detail: "Orbyta Engineering", description: "Provided support in designing the restoration of Teatro Greco di Eraclea Minoa and its surrounding archaeological area (Selected project in a Design Competition)", date: "2023" },
  { title: "Architect", detail: "Lorena Alessio Architetti", description: "Collaborated on architectural design for a luxury RTA in Courmayeur, in partnership with KKAA Studio", date: "2022" },
  { title: "Architect", detail: "G*AA", description: "Architectural design for renovation and energy-efficiency interventions on residential buildings", date: "2022" },
  { title: "Architect", detail: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2021" },
  { title: "Architect", detail: "GAMAStudio", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2020" },
  { title: "Intern Architect", detail: "Studio Element", description: "Architectural design for energy-efficiency and/or restoration interventions for residential buildings", date: "2018" },
];

const studies = [
  { title: "Cybersecurity - DevSecOps Expert", detail: "Aulab srl", description: "Specializing course in Cybersecurity", date: "2024" },
  { title: "Full Stack developer junior", detail: "Aulab srl", description: "Bootcamp in Full Stack Developing", date: "2023" },
  { title: "2nd Level Post-grad master", detail: "Politecnico di Torino", description: "Metodi e tecniche per il governo dei territori resilienti", date: "2022" },
  { title: "Master degree", detail: "Politecnico di Torino", description: "Archietcture for the Sustabnable design", date: "2019" },
  { title: "Bachelor Degree", detail: "Politecnico di Torino", description: "Archietcture Science", date: "2016" },
];

/* const certifications = [
  { title: "Cybersecurity - DevSecOps Expert", detail: "Aulab srl", description: "Specializing course in Cybersecurity", date: "2024" },
  { title: "Full Stack developer junior", detail: "Aulab srl", description: "Bootcamp in Full Stack Developing", date: "2023" },
  { title: "2nd Level Post-grad master", detail: "Politecnico di Torino", description: "Metodi e tecniche per il governo dei territori resilienti", date: "2022" },
  { title: "Master degree", detail: "Politecnico di Torino", description: "Archietcture for the Sustabnable design", date: "2019" },
  { title: "Bachelor Degree", detail: "Politecnico di Torino", description: "Archietcture Science", date: "2016" },
]; */

const classGroups = "flex flex-col justify-center relative bg-purple-100 bg-opacity-75 rounded-3xl p-5 mx-10 md:w-4/6 w-[calc(80%)] backdrop-blur";

/* ///[Component] */
export default function Home() {
  return (
    <main id="homePage">
      <Weather />

      {/* ///[About me] */}
      <div className="min-h-screen pt-12 relative">
        <div className={classGroups + " lg:w-2/6 top-5 md:top-30 lg:left-40 max-w-[600px]"}>
          <h1>About me</h1>
          <h3 className="!font-normal !leading-2 !important">
            I am a Full-stack Developer with expertise in Front-end and Back-end programming, acquired through intensive coding bootcamp training, online coursework and constant practice.<br/><br/>My past experiences allowed me to build also a good knowledge on graphic design, Agile methodologies (SCRUM), collaborative teamwork,  and problem-solving skills.
          </h3>
        </div>
      </div>

      {/* ///[Experiences] */}
      <CardContainer title="Experiences" items={experiences} />

      {/* ///[Studies] */}
      <CardContainer title="Studies" items={studies} />

      {/* ///[Certifications] 
      <CardContainer title="Certifications" items={certifications} />
      */}
    </main>
  );
}
