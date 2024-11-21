import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import InfiniteText from "./components/infinite-text";
import AllProjects from "./components/home/all-projects";
import IntroduceSection from "./components/home/introduce-section";

export default function Home() {
  return (
    <>
      <HeroSection text="Self-taught front end developer based in Ho Chi Minh." />
      <IntroduceSection />
      <AllProjects />
      <InfiniteText />
      <Footer />
    </>
  );
}
