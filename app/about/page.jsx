import React from "react";
import HeroSection from "../components/hero-section";
import AboutSection from "./about-section";
import InfiniteText from "../components/infinite-text";
import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <HeroSection text="I love being creative with code and put a lot of effort into every project." />
      <AboutSection />
      <InfiniteText />
      <Footer />
    </>
  );
}
