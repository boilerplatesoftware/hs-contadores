
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SPRING_TRANSITION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md py-3 sm:py-4 shadow-lg border-b border-[#D4AF37]/10' : 'bg-black py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={SPRING_TRANSITION}
          className="flex items-center space-x-2"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#D4AF37] flex items-center justify-center rounded-lg">
            <span className="text-black font-bold text-lg sm:text-xl">HS</span>
          </div>
          <span className="text-base sm:text-xl font-extrabold tracking-tight hidden sm:block text-white">
            CONTADORES <span className="font-light text-white/70">PÚBLICOS</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_TRANSITION, delay: idx * 0.1 }}
              className="text-sm font-medium text-white hover:text-[#D4AF37] transition-colors uppercase tracking-wider relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Contáctanos
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/98 backdrop-blur-lg border-t border-[#D4AF37]/20"
      >
        <div className="px-4 sm:px-6 py-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-base sm:text-lg font-semibold text-white hover:text-[#D4AF37] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <motion.a
            href="#contacto"
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-black transition-all w-full sm:w-auto text-center"
            onClick={() => setIsOpen(false)}
          >
            Contáctanos
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
