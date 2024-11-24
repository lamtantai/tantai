import React from "react";

import Link from "next/link";
import Image from "next/image";

import DivideLine from "../ui/divide-line";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 -z-50 w-full overflow-clip bg-secondary text-primary">
      <div className="flex flex-col gap-10 px-space-sm py-space-md lg:flex-row">
        <div className="relative aspect-[5/4] w-full lg:max-w-[40vw]">
          <Image
            loading="lazy"
            src="/thumb-up.jpg"
            fill
            alt="my personal image with thumb up pose"
            className="rounded-2xl object-cover object-top"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="flex flex-1 flex-col justify-end gap-y-6">
          <h2 className="text-xlarge/none font-semibold uppercase">
            Let&apos;s <br /> connect
          </h2>

          <DivideLine color="primary" />

          <Link
            href="mailto:lttai.dev@gmail.com"
            className="group relative overflow-clip text-xsmall/tight"
          >
            <span className="relative inline-block origin-[50%_50%_-0.55em] text-nowrap uppercase duration-500 ease-in-out-quart rotate-x-0 lg:group-hover:rotate-x-90">
              Send me a message
            </span>

            <span className="absolute bottom-0 left-0 origin-[50%_50%_-0.55em] underline decoration-wavy decoration-2 duration-500 ease-in-out-quart -rotate-x-90 lg:group-hover:rotate-x-0">
              lltai.dev@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
