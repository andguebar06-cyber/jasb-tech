import { motion } from 'motion/react';
import { ABOUT_STATS, ABOUT_VALUES } from '../data';
import { Target, Zap, Shield, Users } from 'lucide-react';

export default function AboutUs() {
  const valueIcons = [
    <Zap className="w-6 h-6 text-brand-400" />,
    <Shield className="w-6 h-6 text-brand-400" />,
    <Users className="w-6 h-6 text-brand-400" />
  ];

  return (
    <section id="sobre-nosotros" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Core Story & Values */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Nuestra Filosofía</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Redefiniendo el Ecosistema Tecnológico
              </h2>
            </div>
            
            <p className="text-slate-300 leading-relaxed font-light">
              En <strong className="text-white font-medium">jasb Tech</strong> nacimos con un propósito claro: democratizar el acceso a hardware y gadgets de categoría premium sin inflar precios con intermediarios innecesarios. Diseñamos, probamos e importamos directamente dispositivos con los más altos estándares de calidad y durabilidad.
            </p>

            <p className="text-slate-400 leading-relaxed font-light text-sm">
              Creemos en una relación transparente con el usuario. Es por eso que cada uno de nuestros dispositivos ofrece garantía directa de 2 años y un soporte postventa 100% personalizado disponible en cualquier momento para guiarte en tu experiencia tecnológica.
            </p>

            {/* Core Values Rows */}
            <div className="space-y-6 pt-4">
              {ABOUT_VALUES.map((val, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-850 hover:border-slate-800 transition-all duration-150">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 h-fit">
                    {valueIcons[i] || valueIcons[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-white mb-1">{val.title}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats Grid & Interactive Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Stat Card 1 */}
              <div className="bg-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-500/20 transition-all duration-200">
                <div>
                  <div className="p-3 bg-brand-500/10 rounded-2xl w-fit text-brand-400 mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                    {ABOUT_STATS[0].value}
                  </h3>
                </div>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {ABOUT_STATS[0].label}
                </span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-500/20 transition-all duration-200">
                <div>
                  <div className="p-3 bg-brand-500/10 rounded-2xl w-fit text-brand-400 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                    {ABOUT_STATS[1].value}
                  </h3>
                </div>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {ABOUT_STATS[1].label}
                </span>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-500/20 transition-all duration-200">
                <div>
                  <div className="p-3 bg-brand-500/10 rounded-2xl w-fit text-brand-400 mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                    {ABOUT_STATS[2].value}
                  </h3>
                </div>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {ABOUT_STATS[2].label}
                </span>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col justify-between group hover:border-brand-500/20 transition-all duration-200">
                <div>
                  <div className="p-3 bg-brand-500/10 rounded-2xl w-fit text-brand-400 mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                    {ABOUT_STATS[3].value}
                  </h3>
                </div>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {ABOUT_STATS[3].label}
                </span>
              </div>

            </div>

            {/* Banner of commitment */}
            <div className="mt-8 bg-gradient-to-r from-brand-600 to-teal-700 rounded-3xl p-6 relative overflow-hidden shadow-xl text-slate-950">
              <div className="absolute right-0 bottom-0 transform translate-x-10 translate-y-10 opacity-15 pointer-events-none">
                <Target className="w-48 h-48" />
              </div>
              <h4 className="font-display font-bold text-xl mb-2">Certificación de Sostenibilidad</h4>
              <p className="text-sm text-slate-900 font-light leading-relaxed max-w-md">
                Por cada compra que realizas en jasb Tech, destinamos un porcentaje a iniciativas locales de reciclaje de residuos electrónicos en toda la Unión Europea.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
