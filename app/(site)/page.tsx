import Hero from "@/app/components/Home/Hero";
import HowItWorks from "@/app/components/Home/HowItWorks";
import HelpImmigrants from "@/app/components/Home/HelpImmigrants";
import WelcomeSection from "@/app/components/Home/WelcomeSection";
import ProblemVsMember from "@/app/components/Home/ProblemVsMember";
import ServicesWeOffer from "@/app/components/Home/ServicesWeOffer";
import CountriesWeServe from "@/app/components/Home/CountriesWeServe";
import BuildRealLife from "@/app/components/Home/BuildRealLife";
import TurningLonelinessConnection from "@/app/components/Home/TurningLonelinessConnection";
import WhyWeBuiltImmigrantKnowhow from "@/app/components/Home/WhyWeBuiltImmigrantKnowhow";
import WhyImmigrantsTrust from "@/app/components/Home/WhyImmigrantsTrust";
import MemberTestimonials from "@/app/components/Home/MemberTestimonials";
import FrequentlyAskedQuestions from "@/app/components/Home/FrequentlyAskedQuestions";
import SupportMovesCTA from "@/app/components/Home/SupportMovesCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <HelpImmigrants />
      <WelcomeSection />
      <ProblemVsMember />
      <ServicesWeOffer />
      <CountriesWeServe />
      <BuildRealLife />
      <TurningLonelinessConnection />
      <WhyWeBuiltImmigrantKnowhow />
      <WhyImmigrantsTrust />
      <MemberTestimonials />
      <FrequentlyAskedQuestions />
      <SupportMovesCTA />
    </>
  );
}
