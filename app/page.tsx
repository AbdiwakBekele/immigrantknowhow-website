import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Home/Hero";
import HowItWorks from "./components/Home/HowItWorks";
import HelpImmigrants from "./components/Home/HelpImmigrants";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <HelpImmigrants />
      </main>
      <Footer />
    </>
  );
}
