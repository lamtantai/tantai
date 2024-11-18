import React from "react";
import HeroSection from "../components/hero-section/hero-section";
import ProjectsList from "./components/projects-list";
import InfiniteText from "../components/infinite-text";

export default function Project() {
  return (
    <>
      <HeroSection text="Feel free to explore my projects I have built recently." />
      <ProjectsList />
      <InfiniteText />
    </>
  );
}
