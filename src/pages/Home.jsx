import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import Publications from '../components/Publications';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Publications />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
};

export default Home;

