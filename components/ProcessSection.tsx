import React from 'react';
import {
  ClipboardList,
  Calculator,
  Wrench,
  Cpu,
  Activity,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ProcessSectionProps {
  onNavigate: (view: string) => void;
}

const steps = [
  {
    title: '1. Requisitos',
    subtitle: 'Levantamento Técnico',
    description:
      'Analisamos profundamente seu modelo de negócio para identificar os gargalos e as tecnologias ideais para sua operação na RMF.',
    icon: <ClipboardList className="w-8 h-8" />,
    color: 'bg-blue-50 text-[#395fa3]',
  },
  {
    title: '2. Orçamento',
    subtitle: 'Projeto Estratégico',
    description:
      'Apresentamos um plano detalhado com foco em custo-benefício, escalabilidade e retorno real sobre o investimento tecnológico.',
    icon: <Calculator className="w-8 h-8" />,
    color: 'bg-red-50 text-[#aa1a20]',
  },
  {
    title: '3. Instalação',
    subtitle: 'Sistemas Físicos',
    description:
      'Nossa equipe de campo executa a montagem de infraestrutura, redes, automação e segurança com certificação técnica.',
    icon: <Wrench className="w-8 h-8" />,
    color: 'bg-blue-50 text-[#395fa3]',
  },
  {
    title: '4. Conexão',
    subtitle: 'Software Lab',
    description:
      'Integramos o hardware ao cérebro digital: dashboards e sistemas customizados pelo A2insights Lab para controle total.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'bg-red-50 text-[#aa1a20]',
  },
  {
    title: '5. Suporte',
    subtitle: 'Gestão & Assistência',
    description:
      'Monitoramento contínuo e suporte técnico prioritário para garantir que sua empresa ou residência nunca fiquem offline.',
    icon: <Activity className="w-8 h-8" />,
    color: 'bg-[#0a1628] text-white',
  },
];

const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-[#aa1a20] mb-4 bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">
              Metodologia FortalTech
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#395fa3] mb-6 leading-tight">
            Como impulsionamos <br />
            <span className="text-[#aa1a20]">seu negócio.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Um fluxo de entrega ponta-a-ponta que une a robustez da engenharia
            física com a agilidade do software moderno.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                  <div
                    className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    {step.title}
                  </span>
                  <h3 className="text-xl font-black text-[#395fa3] mb-4 group-hover:text-[#aa1a20] transition-colors">
                    {step.subtitle}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {step.description}
                  </p>

                  {idx < steps.length - 1 && (
                    <div className="mt-8 lg:hidden text-gray-200">
                      <ArrowRight className="w-6 h-6 rotate-90 mx-auto" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => onNavigate('assessment')}
            className="bg-[#395fa3] text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-[#aa1a20] transition-all transform hover:scale-105 shadow-xl flex items-center group"
          >
            Começar meu Levantamento{' '}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
