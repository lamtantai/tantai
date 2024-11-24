import React from "react";

import { notFound } from "next/navigation";

import HeroSection from "./hero-section";
import ProjectImageGallery from "./project-image-gallery";
import OtherProjects from "./other-projects";

import { projects } from "@/app/lib/data";

export default async function page({ params }) {
  const param = (await params).id;
  const currentProject = projects.find((project) => project.id === param);

  if (!currentProject) {
    notFound();
  }

  const remainProject = projects.filter((project) => project.id !== param);
  const currentIndex = projects.indexOf(currentProject);
  const nextIndex = currentIndex == projects.length - 1 ? 0 : currentIndex + 1;
  const nextProject = projects[nextIndex];

  return (
    <>
      <HeroSection project={currentProject} />
      <ProjectImageGallery project={currentProject} />
      <OtherProjects nextProject={nextProject} />
    </>
  );
}
