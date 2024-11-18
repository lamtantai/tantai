import React from "react";
import { projectsListData } from "@/app/lib/data";
import HeroSection from "./hero-section";
import ProjectImageGallery from "./project-image-gallery";
import InfiniteText from "@/app/components/infinite-text";

export default async function page({ params }) {
  const param = (await params).id;
  const currentProjectPage = projectsListData.find(
    (project) => project.name === param,
  );

  return (
    <>
      <HeroSection project={currentProjectPage} />
      <ProjectImageGallery project={currentProjectPage} />
      <InfiniteText />
    </>
  );
}
