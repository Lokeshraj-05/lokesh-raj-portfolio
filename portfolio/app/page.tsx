import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeuralBackground from "@/components/NeuralBackground";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <NeuralBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
