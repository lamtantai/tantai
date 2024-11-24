import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import InfiniteText from "./components/infinite-text";
import IntroduceSection from "./components/home/introduce-section";
import ProjectList from "./components/home/project-list";

export default function Home() {
  return (
    <>
      <HeroSection text="Self-taught front end developer based in Ho Chi Minh." />
      <IntroduceSection />
      <ProjectList />
      <InfiniteText />
      <Footer />
    </>
  );
}
