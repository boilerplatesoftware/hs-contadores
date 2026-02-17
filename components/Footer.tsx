
import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#D4AF37]/20 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center rounded-lg">
                <span className="text-black font-bold text-sm">HS</span>
              </div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white">HS CONTADORES</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
              Líderes en soluciones contables y estratégicas para el sector empresarial de alta gama.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4 sm:mb-6 md:mb-8">Navegación</h4>
            <ul className="space-y-3 sm:space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#D4AF37] mr-0 group-hover:mr-2 transition-all"></span>
                    {item.label === 'Nosotros' ? 'Sobre Nosotros' : 
                     item.label === 'Socios' ? 'Nuestros Socios' : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4 sm:mb-6 md:mb-8">Legal</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors">Cumplimiento SARLAFT</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4 sm:mb-6 md:mb-8">Newsletter</h4>
            <p className="text-white/70 mb-4 sm:mb-6 font-light text-sm sm:text-base">Suscríbase para recibir actualizaciones financieras críticas.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="email@empresa.com" className="flex-grow px-3 sm:px-4 py-2 sm:py-3 bg-black border border-[#D4AF37]/30 rounded-lg sm:rounded-xl outline-none text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#D4AF37]" />
              <button 
                onClick={scrollToTop}
                className="p-2 sm:p-3 bg-[#D4AF37] text-black rounded-lg sm:rounded-xl hover:bg-[#FFD700] transition-colors shadow-lg shadow-[#D4AF37]/20"
                title="Volver arriba"
              >
                <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#D4AF37]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} HS Contadores Públicos S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-default">
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50">Powered by</span>
             <span className="text-xs font-black tracking-tighter text-[#D4AF37]">@BOILERPLATE</span>
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 ml-2">Arquitectura Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
