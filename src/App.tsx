import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Guide from './components/Guide';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Guide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
