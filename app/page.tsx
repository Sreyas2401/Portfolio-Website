import HeaderTable from "./header";
import AboutMe from "./aboutMe";
import ExperienceTree from "./experience";
import Projects from "./projects";
import Socials from "./socials";

export default function Home() {
  return (
    <div>
      <HeaderTable />
      <AboutMe />
      <ExperienceTree />
      <Projects />
    </div>
  );
}
