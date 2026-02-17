import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, ChevronRight } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#395fa3]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Header Content */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-6 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
              <HelpCircle className="w-4 h-4" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">
                Centro de Suporte
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-8 leading-tight tracking-tighter">
              Perguntas <br />
              <span className="text-[#aa1a20]">Frequentes.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Dúvidas sobre como a FortalTech pode impulsionar sua
              infraestrutura? Compilamos as respostas para os questionamentos
              mais comuns dos nossos parceiros.
            </p>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h4 className="font-black text-[#395fa3] text-sm uppercase mb-4">
                Ainda com dúvidas?
              </h4>
              <p className="text-xs text-gray-500 mb-6">
                Nossos consultores técnicos estão prontos para uma reunião
                detalhada sobre seu projeto.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-[#aa1a20] font-black uppercase text-[10px] tracking-widest hover:translate-x-2 transition-transform"
              >
                Enviar mensagem direta <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:w-2/3 space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  openIndex === idx
                    ? 'border-[#395fa3] shadow-xl'
                    : 'border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
                >
                  <span
                    className={`text-lg md:text-xl font-black transition-colors ${openIndex === idx ? 'text-[#395fa3]' : 'text-gray-800'}`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      openIndex === idx
                        ? 'bg-[#395fa3] text-white rotate-180'
                        : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}
                  >
                    {openIndex === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 md:px-10 pb-10">
                    <div className="w-full h-[1px] bg-gray-100 mb-8"></div>
                    <p className="text-gray-600 leading-relaxed text-base font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
