import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import AIAssistant from "@/components/sections/AIAssistant";
import Contact from "@/components/sections/Contact";

import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import IntroLoader from "@/components/effects/IntroLoader";

import StructuredData from "@/components/seo/StructuredData";

import ScrollToTop from "@/components/effects/ScrollToTop";
export default function Home() {
  return (
    <>
      <StructuredData />

      <ScrollToTop />

      <IntroLoader />
      <ScrollProgress />
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Process />
        <AIAssistant />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
