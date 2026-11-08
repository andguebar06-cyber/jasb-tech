import { motion } from 'motion/react';
import { ShieldCheck, Truck, Clock, ArrowRight, Laptop, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOffersClick: () => void;
}

export default function Hero({ onExploreClick, onOffersClick }: HeroProps) {
  const benefits = [
    { icon: <Truck className="w-5 h-5 text-brand-400" />, label: 'Envío Gratis 24h' },
    { icon: <ShieldCheck className="w-5 h-5 text-brand-400" />, label: 'Garantía de 2 Años' },
    { icon: <Clock className="w-5 h-5 text-brand-400" />, label: 'Soporte Técnico 24/7' }
  ];

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 flex items-center min-h-[90vh]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left column info */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>La Tecnología del Futuro, Hoy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]"
            >
              Conecta con la <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-200">
                Innovación Absoluta
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light"
            >
              En <strong className="text-white font-medium">jasb Tech</strong> redefinimos tu experiencia digital. Descubre dispositivos premium diseñados para maximizar tu productividad, creatividad y estilo de vida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-slate-950 font-semibold rounded-2xl transition-all duration-150 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 cursor-pointer"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={onOffersClick}
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-2xl transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Ver Promociones</span>
              </button>
            </motion.div>

            {/* Micro Benefits list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center lg:justify-start space-x-2.5 text-sm text-slate-400"
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800/80">
                    {benefit.icon}
                  </div>
                  <span>{benefit.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column showcase card */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none group"
            >
              {/* Spinning background circle */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Featured Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
                {/* Visual badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Destacado
                </div>

                <div className="h-64 rounded-2xl overflow-hidden mb-6 bg-slate-950 flex items-center justify-center relative">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                    alt="JasbBook Pro 16"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vector lines overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 flex items-center space-x-1.5">
                    <Laptop className="w-3.5 h-3.5 text-brand-400" />
                    <span className="text-[10px] font-mono text-slate-300">JASBBOOK_16.EXE</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Portátiles Premium</span>
                  <h3 className="font-display font-bold text-2xl text-white">JasbBook Pro 16</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Súper procesador J3 Max, 32GB RAM y pantalla Liquid Retina 120Hz. El rey de la productividad.
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <div>
                      <span className="text-xs text-slate-500 block">Precio especial</span>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">1.699€</span>
                        <span className="text-sm text-slate-500 line-through">1.899€</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={onExploreClick}
                      className="px-4 py-2.5 bg-slate-800 hover:bg-brand-500 hover:text-slate-950 text-brand-400 text-xs font-bold rounded-xl transition-all duration-150 cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
