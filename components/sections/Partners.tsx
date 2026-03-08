
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, ArrowUpRight } from 'lucide-react';
import { PARTNERS, SPRING_TRANSITION } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import PartnerCard from '../ui/PartnerCard';
import IconBox from '../ui/IconBox';

const Partners: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16 md:mb-24">
        <SectionHeader
          badge="Red de Confianza Elite"
          title={
            <>
              Alianzas que <span className="text-[#D4AF37] font-serif-premium">Definen Industrias.</span>
            </>
          }
          description="Colaboramos con las organizaciones más visionarias para construir ecosistemas financieros que resisten el tiempo y los cambios globales."
          centered
          className="text-white"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {PARTNERS.map((partner, idx) => (
          <PartnerCard
            key={partner.id}
            name={partner.name}
            industry={partner.industry}
            description={partner.description}
            synergy={partner.synergy}
            logo={partner.logo}
            testimonial={partner.testimonial}
            delay={idx * 0.1}
          />
        ))}
      </div>

      {/* Alliance Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 sm:py-12 md:py-16 border-y border-[#D4AF37]/10"
      >
        {[
          { icon: ShieldCheck, value: '100%', label: 'Retención de Socios' },
          { icon: Star, value: '$500M+', label: 'Activos Gestionados' },
          { icon: ArrowUpRight, value: '24/7', label: 'Consultoría Senior' },
        ].map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
              <IconBox
                icon={stat.icon}
                variant="default"
                size="sm"
                className="group-hover:bg-[#D4AF37] group-hover:text-black transition-all"
              />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-[#D4AF37] mb-1">{stat.value}</p>
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
