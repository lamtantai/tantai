import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import InfiniteText from "./components/infinite-text";
import IntroduceSection from "./components/introduce-section";
import LatestProject from "./components/latest-projects/latest-project";

export default function Home() {
  return (
    <>
      <HeroSection text="Self-taught front end developer based in Ho Chi Minh." />
      <IntroduceSection />
      <LatestProject />
      <InfiniteText />
      <Footer />
    </>
  );
}
