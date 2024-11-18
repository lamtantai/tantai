import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-400 text-red-500">
      <div className="flex h-fit min-h-screen items-center bg-secondary pt-[calc(15vh+15vw)] text-primary">
        <h1 className="text-6xl">A self-taught front end developer</h1>
      </div>

      <div className="sticky top-[10vh] flex items-center justify-center bg-red-200 opacity-10 blur-3xl">
        <div className="relative aspect-[5/4] w-1/2">
          <Image src="/bin.jpg" alt="a" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 mt-[25vh] flex items-center justify-center">
        <h1 className="text-9xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto optio
          iste quod? Porro, nulla fugit molestias similique nihil cupiditate
          odit totam aperiam ipsum ipsam soluta deserunt dolorem voluptates
          inventore incidunt!
        </h1>
      </div>
    </section>
  );
}
