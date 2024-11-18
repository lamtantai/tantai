import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/locomotive-scroll/locomotive-scroll";

import { Poppins } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PageScrollProgress from "./components/ui/page-scroll-progress";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--minecraft",
});

const bulevar = localFont({
  src: "./fonts/MM.woff2",
  variable: "--bulevar",
});

export const metadata = {
  title: "Lam Tan Tai | Front End Developer",
  description: "Lam Tan Tai Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${minecraft.variable} ${poppins.variable} ${bulevar.variable} scroll-smooth font-poppins`}
    >
      <body>
        <SmoothScroll>
          <Header />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
