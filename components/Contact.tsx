
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-[#aa1a20] font-bold tracking-widest uppercase mb-4">Fale Conosco</h2>
            <h3 className="text-4xl font-black text-[#395fa3] mb-8 leading-tight">Estamos prontos para atender seu projeto.</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-6 shrink-0 text-[#395fa3]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Telefone</h4>
                  <p className="text-gray-600">(85) 2028-0942</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-6 shrink-0 text-[#395fa3]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">E-mail</h4>
                  <p className="text-gray-600">contato@fortaltech.com</p>
                  <p className="text-gray-600">comercial@fortaltech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-6 shrink-0 text-[#395fa3]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Localização</h4>
                  <p className="text-gray-600 max-w-xs uppercase text-sm">
                    Avenida Yolanda Pontes Vidal Queiroz, 57, Jereissati I, Sala: 220, Edif: 1, Maracanaú - CE. CEP: 61.900-410
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Map / Image Placeholder */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-inner border border-gray-100 bg-gray-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0494429986566!2d-38.62534062402179!3d-3.8797828438186193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c752673d3f982d%3A0x86704179e8e03063!2sAv.%20Yolanda%20Pontes%20Vidal%20Queiroz%2C%2057%20-%20Jereissati%20I%2C%20Maracana%C3%BA%20-%20CE%2C%2061900-410!5e0!3m2!1spt-BR!2sbr!4v1716382942001!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Maracanaú FortalTech"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h4 className="text-2xl font-bold text-[#395fa3] mb-6">Envie sua mensagem</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#395fa3] focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">E-mail Profissional</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#395fa3] focus:border-transparent transition-all"
                    placeholder="email@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Assunto</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#395fa3] transition-all">
                  <option>Instalações Elétricas</option>
                  <option>CFTV e Monitoramento</option>
                  <option>Telemetria Veicular</option>
                  <option>Manutenção e Suporte</option>
                  <option>Parceria com A2insights (Software)</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#395fa3] transition-all"
                  placeholder="Descreva seu projeto ou necessidade técnica..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#395fa3] hover:bg-[#2a4678] text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-lg group"
              >
                Enviar Solicitação <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
