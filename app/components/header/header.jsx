"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import NavItem, { NavItemSocial } from "./nav-item";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";

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

const navItemsSocial = [
  {
    name: "Github",
    href: "/",
  },
  {
    name: "Email",
    href: "/",
  },
  {
    name: "Phone",
    href: "/about",
  },
];

const MenuSlide = {
  initial: {
    clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
    visibility: "hidden",
  },

  open: {
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    visibility: "visible",
    transition: { duration: 1, ease: [0.62, 0.05, 0.01, 0.99] },
  },

  close: {
    clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
    visibility: "hidden",
    transition: { duration: 1, ease: [0.62, 0.05, 0.01, 0.99] },
  },
};

function MenuButton({ onClick, children }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <button className="relative font-minecraft uppercase">
        <span className="text-lg/none font-semibold md:text-2xl/none">
          {children}
        </span>
      </button>
    </motion.div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const { scrollY } = useScroll();
  // let latestScrollY = useRef(0);

  const scale = useTransform(scrollY, [0, 300], [1, 0.2]);

  // useMotionValueEvent(scrollY, "change", (y) => {
  //   const differentScroll = latestScrollY.current - y;

  //   if (Math.abs(differentScroll) >= 50 && y > window.innerHeight - 50) {
  //     setIsHeaderHidden(differentScroll < 0);
  //     latestScrollY.current = y;
  //   }
  // });

  // CLOSE MENU ON PRESS ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className="fixed left-0 top-0 z-50 w-full text-primary mix-blend-difference"
        // style={{ y: isHeaderHidden ? "-100%" : 0, transitionDuration: "0.4s" }}
        key={usePathname()}
      >
        <div className="p-space-sm">
          <div className="relative flex items-end justify-end">
            <motion.div
              className="absolute left-0 top-0 hidden origin-top-left lg:block lg:w-logo"
              style={{ scale }}
            >
              <Link href="/">
                <Logo color="var(--color-primary)" />
              </Link>
            </motion.div>

            <motion.div className="absolute left-0 top-0 w-36 lg:hidden">
              <Link href="/">
                <Logo color="var(--color-primary)" />
              </Link>
            </motion.div>

            <MenuButton onClick={() => setIsMenuOpen(true)}>Menu</MenuButton>
          </div>
        </div>
      </motion.header>

      {/* BACKGROUND OVERLAY WHEN MENU OPEN */}
      <div
        className="fixed left-0 top-0 z-50 h-screen w-screen bg-secondary"
        style={{
          pointerEvents: isMenuOpen ? "all" : "none",
          opacity: isMenuOpen ? 0.8 : 0,
          transitionDuration: "0.8s",
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* NAV MENU */}
      <motion.div
        className="fixed right-0 top-0 z-50 h-screen w-full bg-secondary font-minecraft uppercase text-primary md:w-navMenu"
        initial="initial"
        animate={isMenuOpen ? "open" : "close"}
        variants={MenuSlide}
      >
        <div className="absolute top-0 w-full p-space-sm">
          <div className="relative flex items-end justify-end">
            <motion.div className="absolute left-0 top-0 w-36 md:hidden lg:w-logo">
              <Link href="/">
                <Logo color="var(--color-primary)" />
              </Link>
            </motion.div>

            <MenuButton onClick={() => setIsMenuOpen(false)}>Close</MenuButton>
          </div>
        </div>

        <motion.nav
          className="flex h-full flex-col justify-between px-space-md py-space-lg"
          animate={{
            scale: isMenuOpen ? 1 : 0.8,
            transition: { duration: 1, ease: [0.62, 0.05, 0.01, 0.99] },
          }} //SCALE WHEN THE MENU IS OPEN
        >
          {/* PAGE LINKS */}
          <div className="pt-20">
            <h4 className="border-primary/70 text-primary/70 border-b-[1px] pb-5 text-xs">
              Navigation
            </h4>

            <ul className="mt-10 flex flex-col gap-10 text-navMenuItem text-primary">
              {navItems.map((item, i) => (
                <motion.li key={item.name}>
                  <NavItem item={item} onClick={() => setIsMenuOpen(false)} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="">
            <h4 className="text-primary/70 mb-4 text-xs">Get in touch</h4>

            <ul className="flex gap-x-10">
              {navItemsSocial.map((item) => (
                <li key={item.name}>
                  <NavItemSocial item={item} />
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
