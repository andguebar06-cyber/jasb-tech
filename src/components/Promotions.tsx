import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROMOTIONS } from '../data';
import { Ticket, Copy, Check, Flame, Gift, Calendar } from 'lucide-react';

export default function Promotions() {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  
  // Real-time fake countdown for the flash deals section
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 54
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 }; // reset on zero for visual loop
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => {
      setCopiedCodeId(null);
    }, 2000);
  };

  return (
    <section id="ofertas" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-800" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Flash Timer */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-500 flex items-center justify-center lg:justify-start gap-1.5">
              <Flame className="w-4 h-4 fill-red-500 text-red-500" />
              <span>Zona de Ofertas Especiales</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Descuentos y Promociones Flash
            </h2>
            <p className="text-slate-400 font-light max-w-xl">
              Ahorra al máximo en tus compras con cupones activos e incentivos exclusivos de inauguración. Llévate regalos por tus compras.
            </p>
          </div>

          {/* Flash Clock */}
          <div className="bg-slate-950 border border-slate-850 p-5 rounded-3xl flex flex-col items-center justify-center space-y-2 shrink-0 self-center lg:self-auto shadow-lg">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
              La Oferta del Día Termina En
            </span>
            <div className="flex items-center space-x-3 text-white font-mono">
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl block">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase mt-1 block">Horas</span>
              </div>
              <span className="text-2xl font-bold text-brand-500">:</span>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl block">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase mt-1 block">Minutos</span>
              </div>
              <span className="text-2xl font-bold text-brand-500">:</span>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-bold bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl block text-red-400">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-slate-500 uppercase mt-1 block">Segundos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROMOTIONS.map((promo) => {
            const isCopied = copiedCodeId === promo.id;

            return (
              <div
                key={promo.id}
                className="bg-slate-950 border border-slate-850/80 rounded-3xl overflow-hidden flex flex-col sm:flex-row group hover:border-slate-800 transition-all duration-200"
              >
                {/* Visual Cover */}
                <div className="sm:w-1/3 h-48 sm:h-auto bg-slate-900 relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    {promo.discount}
                  </div>
                </div>

                {/* Info and interaction panel */}
                <div className="p-6 sm:p-8 sm:w-2/3 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] text-brand-400 uppercase tracking-widest font-mono block">
                      Campaña de Ofertas
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {promo.subtitle}
                    </p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed pt-1">
                      {promo.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-900">
                    <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
                      <Calendar className="w-4 h-4 text-brand-500" />
                      <span>Expira en {promo.endsInDays} días</span>
                    </div>

                    {/* Copy Box */}
                    <div className="flex items-center space-x-1.5">
                      <div className="bg-slate-900 border border-slate-800 text-slate-300 font-mono text-sm px-3.5 py-2.5 rounded-xl uppercase tracking-wider font-semibold">
                        {promo.code}
                      </div>
                      <button
                        onClick={() => handleCopyCode(promo.code, promo.id)}
                        className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800 hover:border-slate-750'
                        }`}
                        title="Copiar código"
                        aria-label="Copiar código"
                      >
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic promotional statement */}
        <div className="mt-12 bg-slate-950 border border-slate-850 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 bg-brand-500/10 text-brand-400 rounded-2xl border border-brand-500/20 shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white text-lg">¿Eres cliente recurrente?</h4>
              <p className="text-sm text-slate-400 font-light">
                Únete a nuestro club VIP jasb Circle para acumular puntos canjeables por saldo en tus próximas compras.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm rounded-xl border border-slate-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            Saber Más
          </a>
        </div>

      </div>
    </section>
  );
}
