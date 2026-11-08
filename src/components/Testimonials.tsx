import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-800" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 flex items-center justify-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4 text-brand-400" />
            <span>Opiniones de la Comunidad</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Garantía de Satisfacción Real
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">
            Miles de entusiastas de la informática, ingenieros y creadores de contenido confían a diario en las soluciones tecnológicas de jasb Tech.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-900 border border-slate-800/80 p-8 rounded-3xl flex flex-col justify-between space-y-8 hover:border-slate-700 hover:shadow-xl transition-all duration-200"
            >
              {/* Core comment and Stars */}
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(test.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-300 font-light text-[15px] leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* User Bio and Divider */}
              <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm">
                      {test.name}
                    </h4>
                    <span className="text-slate-500 text-xs block">
                      {test.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-slate-500 font-mono">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global score banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 bg-slate-900 border border-slate-850 px-8 py-5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-display font-extrabold text-white">4.8</span>
              <div className="text-left">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-500 block font-mono">VALORACIÓN GLOBAL</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-800" />
            <p className="text-sm text-slate-400 max-w-sm font-light text-center sm:text-left">
              Basado en más de <strong className="text-white font-medium">1,240 opiniones verificadas</strong> en plataformas independientes de consumo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
