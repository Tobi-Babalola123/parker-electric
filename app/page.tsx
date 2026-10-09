import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseParker from "@/components/sections/WhyChooseParker";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyChooseParker />
      <Projects />
      <Testimonials />
      <ServiceArea />
      <Process />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  );
}
