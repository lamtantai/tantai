import React from "react";

import HeroSection from "../components/hero-section";
import InfiniteText from "../components/infinite-text";
import Footer from "../components/footer";
import AllProjects from "./all-projects";

export default function Project() {
  return (
    <>
      <HeroSection text="Feel free to explore my projects I have built recently." />
      <AllProjects />
      <InfiniteText />
      <Footer />
    </>
  );
}
