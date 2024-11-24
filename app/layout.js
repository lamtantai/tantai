import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google";
import Header from "./components/header";
import { SmoothScrollProvider } from "./components/locomotive-scroll";

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
      className={`${minecraft.variable} ${poppins.variable} ${bulevar.variable} font-poppins`}
    >
      <body>
        <SmoothScrollProvider>
          <Header />
          <main data-scroll-section className="relative z-10 text-secondary">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
