
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D4AF37]/20 selection:text-[#000000]">
      <Navbar />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <section id="nosotros">
          <About />
        </section>
        
        <section id="servicios" className="py-24 bg-[#000000]">
          <Services />
        </section>

        {/* Added Projects section to the main layout */}
        <section id="proyectos" className="py-24 bg-white">
          <Projects />
        </section>

        <section id="socios" className="py-24 bg-[#0A0A0A]">
          <Partners />
        </section>

        <section id="contacto" className="py-24 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
