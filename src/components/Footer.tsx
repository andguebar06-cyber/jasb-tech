import React, { useState } from 'react';
import { Cpu, Mail, ArrowRight, Twitter, Instagram, Youtube, Facebook, ShieldCheck, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Catálogo de Productos', href: '#productos' },
    { name: 'Ofertas Flash', href: '#ofertas' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const supportLinks = [
    { name: 'Preguntas Frecuentes', href: '#faq' },
    { name: 'Políticas de Garantía', href: '#garantia' },
    { name: 'Devoluciones y Envíos', href: '#envios' },
    { name: 'Términos de Servicio', href: '#terminos' },
    { name: 'Aviso de Privacidad', href: '#privacidad' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900" id="pie-de-pagina">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center space-x-2 w-fit">
              <div className="bg-brand-600 p-2 rounded-xl text-slate-950">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                jasb <span className="text-brand-500">Tech</span>
              </span>
            </a>
            
            <p className="text-sm font-light leading-relaxed text-slate-400">
              Tu tienda online de tecnología premium con soporte especializado, garantía directa del fabricante y los mejores dispositivos electrónicos del mercado.
            </p>

            {/* Trust badge */}
            <div className="flex items-center space-x-2 text-xs bg-slate-900/50 p-3 rounded-xl border border-slate-900 w-fit">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span className="text-slate-300">Pago 100% Encriptado y Seguro</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Help Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Ayuda y Soporte
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Boletín Tecnológico
            </h4>
            <p className="text-xs font-light leading-normal">
              Suscríbete para recibir lanzamientos de productos de jasb Tech de forma anticipada, promociones especiales y tutoriales exclusivos en tu correo.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 text-slate-100 rounded-xl outline-none text-xs focus:border-brand-500 hover:border-slate-700 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 bg-brand-500 hover:bg-brand-600 text-slate-950 font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center shrink-0"
                  aria-label="Suscribirse"
                >
                  {subscribed ? <Check className="w-4 h-4 text-slate-950 animate-pulse" /> : <ArrowRight className="w-4 h-4 text-slate-950" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-mono">
                  ¡Gracias por suscribirte al boletín!
                </p>
              )}
            </form>

            {/* Social icons */}
            <div className="flex space-x-3 pt-3">
              <a href="#twitter" aria-label="Twitter" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-800 rounded-xl hover:text-white transition-all text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#instagram" aria-label="Instagram" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-800 rounded-xl hover:text-white transition-all text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-800 rounded-xl hover:text-white transition-all text-slate-400">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-800 rounded-xl hover:text-white transition-all text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <p>© 2026 jasb Tech. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-400 transition-colors">Hecho con React, CSS3 y TypeScript</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Seguridad SSL Activa</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
