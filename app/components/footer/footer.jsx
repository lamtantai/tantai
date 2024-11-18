import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="sticky bottom-0 w-full bg-secondary text-primary"
      id="footer"
    >
      <div className="flex flex-col gap-y-10 px-space-sm py-space-md lg:flex-row lg:gap-x-10">
        <div className="relative aspect-[5/4] w-full md:aspect-[5/3] lg:flex-[2]">
          <Image
            loading="lazy"
            src="/thumb-up.jpg"
            fill
            alt="my personal image with thumb up pose"
            className="rounded-2xl object-cover object-top"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="flex grow flex-col justify-end gap-y-6 overflow-x-clip lg:flex-[3]">
          <h2 className="text-xlarge/none font-semibold uppercase">
            Let&apos;s <br /> connect
          </h2>

          <div className="h-1 w-full bg-primary" />

          <Link
            href="mailto:lttai.dev@gmail.com"
            className="group relative overflow-clip text-xsmall/none"
          >
            <span className="relative inline-block origin-[50%_50%_-0.55em] duration-500 ease-in-out-quart rotate-x-0 lg:group-hover:rotate-x-90">
              <span className="text-nowrap uppercase">Send me a message</span>
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
