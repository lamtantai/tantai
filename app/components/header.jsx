"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedInView from "./animated-in-view";
import Logo from "./logo";

import AnimatedButton from "@/app/ui/animated-button";
import { clippathInRight, opacity } from "@/app/utils/animations";
import DivideLine from "../ui/divide-line";
import clsx from "clsx";
import useEscapeKey from "../hooks/useEscapeKey";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Project",
    href: "/project",
  },

  {
    name: "About",
    href: "/about",
  },
];

const socials = [
  {
    name: "Github",
    href: "/",
  },
  {
    name: "Email",
    href: "mailto:lttai.dev@gmail.com",
  },

  {
    name: "Phone",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname(); // Get the current pathname

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.2]);

  useEscapeKey(() => setIsMenuOpen(false));

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 z-50 w-full text-primary mix-blend-difference"
        key={pathname}
      >
        <div className="p-space-sm">
          <div className="relative flex items-end justify-end">
            <motion.div
              className="absolute left-0 top-0 hidden w-logo origin-top-left lg:block"
              style={{ scale }}
            >
              <Logo color="var(--color-primary)" />
            </motion.div>

            <motion.div className="absolute left-0 top-0 w-36 lg:hidden">
              <Logo color="var(--color-primary)" />
            </motion.div>

            <ToggleMenuButton
              onClick={() => setIsMenuOpen(true)}
              label="menu"
            />
          </div>
        </div>
      </motion.header>

      {/* BACKGROUND OVERLAY WHEN MENU OPEN */}
      <div
        className={clsx(
          "fixed inset-0 h-full w-full bg-secondary transition-opacity duration-700",
          {
            "pointer-events-none opacity-0": !isMenuOpen,
            "pointer-events-auto z-50 opacity-80": isMenuOpen,
          },
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* NAV MENU */}
      <NavMenu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

function NavMenu({ isMenuOpen, onClose }) {
  return (
    <motion.div
      className="fixed right-0 top-0 z-50 h-full w-full bg-secondary font-minecraft uppercase text-primary md:w-navMenu"
      initial="initial"
      animate={isMenuOpen ? "enter" : "exit"}
      variants={clippathInRight}
    >
      <div className="absolute inset-0 p-space-sm">
        <div className="relative flex items-end justify-end">
          <motion.div className="absolute left-0 top-0 w-36 md:hidden">
            <Logo color="var(--color-primary)" />
          </motion.div>

          <ToggleMenuButton onClick={onClose} label="close" />
        </div>
      </div>

      <motion.nav
        className="flex h-full flex-col justify-between px-space-md py-space-lg"
        animate={{
          scale: isMenuOpen ? 1 : 0.8,
          transition: { duration: 1, ease: [0.62, 0.05, 0.01, 0.99] },
        }}
      >
        {/* PAGE LINKS */}
        <div className="mt-20">
          <h4 className="text-primary/70 mb-4 text-xs lg:text-sm">
            Navigation
          </h4>

          <DivideLine color="primary" />

          <ul className="mt-10 flex flex-col gap-10 text-navMenuItem">
            {navItems.map((item, i) => (
              <li key={item.name}>
                <NavMenuItem item={item} onClick={onClose} />
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div className="">
          <h4 className="text-primary/70 mb-4 text-xs lg:text-sm">
            Get in touch
          </h4>

          <ul className="flex gap-x-10">
            {socials.map((social) => (
              <li key={social.name}>
                <AnimatedButton
                  href={social.href}
                  label={social.name}
                  color="white"
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </motion.div>
  );
}

function NavMenuItem({ item, onClick }) {
  const path = usePathname();
  return (
    <Link
      onClick={onClick}
      href={item.href}
      className="block w-full overflow-hidden"
    >
      <span
        className={`relative block font-semibold leading-none duration-200 hover:-translate-y-full ${path === item.href && "pointer-events-none -translate-y-full"}`}
      >
        <span className="block text-primary">{item.name}</span>
        <span className="absolute block w-full bg-primary text-secondary">
          {item.name}
        </span>
      </span>
    </Link>
  );
}

function ToggleMenuButton({ onClick, label }) {
  return (
    <AnimatedInView animation={opacity}>
      <button onClick={onClick} className="relative font-minecraft uppercase">
        <span className="text-lg/none font-semibold md:text-2xl/none">
          {label}
        </span>
      </button>
    </AnimatedInView>
  );
}
