
import React from 'react';
import { Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#004085] flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight">HS CONTADORES</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6 font-light">
              Líderes en soluciones contables y estratégicas para el sector empresarial de alta gama.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#004085] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#004085] hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#004085] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#004085] mb-8">Navegación</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-slate-500 hover:text-[#004085] transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#004085] mr-0 group-hover:mr-2 transition-all"></span>
                    {item.label === 'Nosotros' ? 'Sobre Nosotros' : 
                     item.label === 'Socios' ? 'Nuestros Socios' : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#004085] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-[#004085] transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-slate-500 hover:text-[#004085] transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-slate-500 hover:text-[#004085] transition-colors">Cumplimiento SARLAFT</a></li>
              <li><a href="#" className="text-slate-500 hover:text-[#004085] transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#004085] mb-8">Newsletter</h4>
            <p className="text-slate-500 mb-6 font-light">Suscríbase para recibir actualizaciones financieras críticas.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="email@empresa.com" className="flex-grow px-4 py-3 bg-slate-50 rounded-xl outline-none text-sm" />
              <button 
                onClick={scrollToTop}
                className="p-3 bg-[#004085] text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                title="Volver arriba"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} HS Contadores Públicos S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-default">
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">Powered by</span>
             <span className="text-xs font-black tracking-tighter text-slate-800">@BOILERPLATE</span>
             <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400 ml-2">Arquitectura Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
