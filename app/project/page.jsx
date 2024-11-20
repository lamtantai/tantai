import React from "react";
import HeroSection from "../components/hero-section/hero-section";
import ProjectsList from "./components/projects-list";
import InfiniteText from "../components/infinite-text";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function Project() {
  return (
    <>
      <HeroSection text="Feel free to explore my projects I have built recently." />
      <ProjectsList />
      <InfiniteText />
      <Footer />
    </>
  );
}
