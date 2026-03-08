import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';

// Legal Components
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import CookiesPolicy from './components/legal/CookiesPolicy';
import SARLAFTCompliance from './components/legal/SARLAFTCompliance';

export type ViewState = 'home' | 'terms' | 'privacy' | 'cookies' | 'sarlaft';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'terms':
        return <TermsOfService setView={setView} />;
      case 'privacy':
        return <PrivacyPolicy setView={setView} />;
      case 'cookies':
        return <CookiesPolicy setView={setView} />;
      case 'sarlaft':
        return <SARLAFTCompliance setView={setView} />;
      default:
        return (
          <>
            <section id="inicio">
              <Hero />
            </section>

            <section id="nosotros">
              <About />
            </section>

            <section id="servicios" className="py-24 bg-[#000000]">
              <Services />
            </section>

            <section id="proyectos" className="py-24 bg-white">
              <Projects />
            </section>

            <section id="socios" className="py-24 bg-[#0A0A0A]">
              <Partners />
            </section>

            <section id="contacto" className="py-24 bg-white">
              <Contact />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D4AF37]/20 selection:text-[#000000]">
      {view === 'home' && <Navbar />}

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setView={setView} />
      <WhatsAppFloat />
    </div>
  );
};

export default App;

