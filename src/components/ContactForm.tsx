import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Soporte Técnico',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate server response delay of 1.2s
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Soporte Técnico',
      message: ''
    });
    setIsSubmitted(false);
  };

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-brand-400" />,
      title: 'Ubicación Central',
      detail: 'Paseo de la Castellana 210, Madrid, España',
      sub: 'Oficinas centrales y showroom de exposición'
    },
    {
      icon: <Mail className="w-5 h-5 text-brand-400" />,
      title: 'Correo Corporativo',
      detail: 'soporte@jasbtech.com',
      sub: 'Atención general, preventa y reclamaciones'
    },
    {
      icon: <Phone className="w-5 h-5 text-brand-400" />,
      title: 'Línea de Soporte',
      detail: '+34 912 345 678',
      sub: 'Llamada gratuita nacional para clientes VIP'
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-400" />,
      title: 'Horario de Atención',
      detail: 'Lunes a Viernes: 09:00 - 19:00',
      sub: 'Sábados: 10:00 - 14:00 (Soporte prioritario)'
    }
  ];

  return (
    <section id="contacto" className="relative py-24 bg-slate-900">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-800" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Atención Directa</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            ¿Hablamos de Tecnología?
          </h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto">
            ¿Tienes alguna consulta técnica o comercial sobre jasb Tech? Rellena el formulario y recibe asesoría personalizada de un especialista en menos de 4 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-wrapper">
          
          {/* Left Column - Contact details sidebar */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white">Información de Contacto</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Nuestras líneas y canales de soporte online están disponibles continuamente. No dudes en visitarnos o contactarnos directamente para compras corporativas o soporte a gran escala.
              </p>

              <div className="space-y-5 pt-2">
                {contactDetails.map((det, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="p-3 bg-slate-950 border border-slate-850 rounded-2xl text-brand-400 shrink-0">
                      {det.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{det.title}</h4>
                      <p className="text-slate-200 text-sm font-medium mt-0.5">{det.detail}</p>
                      <span className="text-slate-500 text-xs block mt-0.5 font-light">{det.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick help banner */}
            <div className="bg-slate-950/60 border border-slate-850 p-6 rounded-3xl flex items-start space-x-3 mt-6">
              <HelpCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-medium text-sm">¿Garantías activas?</h4>
                <p className="text-xs text-slate-400 font-light mt-1">
                  Si tu consulta es sobre una garantía, adjunta o menciona el número de pedido en el mensaje para agilizar el diagnóstico.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Submission Form / Success Panel */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-850/80 rounded-3xl p-6 sm:p-10 flex flex-col justify-center min-h-[450px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  id="contact-form-el"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Nombre Completo *
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-100 rounded-xl outline-none text-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Correo Electrónico *
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ej. juan@correo.com"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-100 rounded-xl outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone-input" className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Teléfono (Opcional)
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +34 600 000 000"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-100 rounded-xl outline-none text-sm transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject-select" className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                        Asunto del Mensaje
                      </label>
                      <select
                        id="subject-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-brand-500 text-slate-300 rounded-xl outline-none text-sm cursor-pointer transition-colors"
                      >
                        <option value="Soporte Técnico">Soporte Técnico</option>
                        <option value="Consulta de Ventas">Consulta de Ventas</option>
                        <option value="Reclamo de Garantía">Reclamación de Garantía</option>
                        <option value="Propuesta Comercial">Alianzas y Mayoristas</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message-textarea" className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                      Tu Mensaje *
                    </label>
                    <textarea
                      id="message-textarea"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escribe aquí tu consulta en detalle..."
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 focus:border-brand-500 hover:border-slate-700 text-slate-100 rounded-xl outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-500 hover:bg-brand-600 disabled:bg-slate-850 disabled:text-slate-600 text-slate-950 font-bold rounded-2xl transition-all duration-150 flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando Consulta...</span>
                      </span>
                    ) : (
                      <>
                        <span>Enviar Mensaje de Contacto</span>
                        <Send className="w-4 h-4 text-slate-950" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-8"
                  id="contact-success"
                >
                  <div className="inline-flex p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white">
                      ¡Consulta Recibida con Éxito!
                    </h3>
                    <p className="text-slate-300 font-light max-w-md mx-auto text-sm leading-relaxed">
                      Muchas gracias, <strong className="text-white font-medium">{formData.name}</strong>. Hemos recibido tu mensaje sobre <strong className="text-brand-400">"{formData.subject}"</strong> de forma segura.
                    </p>
                    <p className="text-slate-400 font-light max-w-md mx-auto text-xs leading-relaxed pt-2">
                      Hemos asignado un especialista a tu solicitud. Nos pondremos en contacto contigo en tu correo <strong className="text-slate-200">{formData.email}</strong> en un lapso máximo de 4 horas hábiles.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors text-sm font-medium cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
