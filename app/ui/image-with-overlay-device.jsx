import Image from "next/image";
import React from "react";

export default function ImageWithOverlayDevice({ src }) {
  return (
    <div className="relative">
      {/* LAPTOP SCREEN IMAGE */}
      <div className="relative z-10">
        <div className="pt-[57%]" />
        <Image
          src="/device-mbp-16-lower-nonotch.png"
          alt="project image"
          fill
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute left-0 top-0 z-10 h-full w-full bg-[url(/device-mbp-16-lower-nonotch.png)] bg-contain bg-center bg-no-repeat"></div> */}
      </div>

      {/* IMAGE INSIDE LAPTOP SCREEN */}
      <div className="absolute left-[10%] top-[2%] w-[80%]">
        <div className="pt-[62%]" />
        <Image
          src={src}
          alt="project image"
          fill
          sizes="75vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
