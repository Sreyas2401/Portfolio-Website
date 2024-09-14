"use client";

import HeaderTable from "./header";
import AboutMe from "./aboutMe";
import ExperienceTree from "./experience";
import Projects from "./projects";
import Socials from "./socials";
import FadeInComponent from "./fadeIn";

export default function Home() {
  return (
    <FadeInComponent>
      <div>
        <HeaderTable />
        <AboutMe />
        <ExperienceTree />
        <Projects />
      </div>
    </FadeInComponent>
  );
}
