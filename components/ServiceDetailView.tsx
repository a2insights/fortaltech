import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Zap,
  ArrowLeft,
  Settings,
  LayoutGrid,
} from 'lucide-react';
import { SERVICES } from '../constants';

interface ServiceDetailViewProps {
  serviceSlug: string;
  onNavigate: (view: string) => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceSlug,
  onNavigate,
}) => {
  const service = SERVICES.find((s) => s.slug === serviceSlug) || SERVICES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element)
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Dynamic Sub-Hero */}
      <section className="bg-[#0a1628] pt-40 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#395fa3]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#aa1a20]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Voltar ao Ecossistema
            </span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 text-[#aa1a20] rounded-2xl flex items-center justify-center shadow-xl">
                  {service.icon}
                </div>
                <div className="h-10 w-[2px] bg-gradient-to-b from-[#aa1a20] to-transparent"></div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#395fa3]">
                    Especialidade Técnica
                  </span>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-blue-100/60 leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] text-center">
                <div className="text-4xl font-black text-[#aa1a20] mb-1">
                  24/7
                </div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                  Monitoramento Ativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6 pl-4 flex items-center">
                <LayoutGrid className="w-3 h-3 mr-2" /> Outras Soluções
              </h4>
              <nav className="space-y-1">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onNavigate(`service-${s.slug}`)}
                    className={`w-full flex items-center group px-4 py-4 rounded-2xl transition-all text-left border ${
                      s.slug === serviceSlug
                        ? 'bg-white border-[#395fa3] shadow-lg ring-1 ring-[#395fa3]/20'
                        : 'bg-transparent border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 transition-colors ${
                        s.slug === serviceSlug
                          ? 'bg-[#395fa3] text-white'
                          : 'bg-gray-100 text-gray-400 group-hover:bg-[#aa1a20] group-hover:text-white'
                      }`}
                    >
                      {React.cloneElement(s.icon as React.ReactElement<any>, {
                        className: 'w-4 h-4',
                      })}
                    </div>
                    <span
                      className={`text-xs font-black uppercase tracking-tight ${
                        s.slug === serviceSlug
                          ? 'text-[#395fa3]'
                          : 'text-gray-500 group-hover:text-[#aa1a20]'
                      }`}
                    >
                      {s.title}
                    </span>
                    {s.slug === serviceSlug && (
                      <ChevronRight className="ml-auto w-4 h-4 text-[#395fa3]" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-12 p-8 bg-[#0a1628] rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h5 className="font-black text-lg mb-4">Apoio Técnico Lab</h5>
                  <p className="text-blue-100/50 text-[10px] leading-relaxed mb-6 italic">
                    "Desenvolvemos a camada de inteligência que escala sua
                    infraestrutura física para o digital."
                  </p>
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="text-[#aa1a20] font-black text-[10px] uppercase tracking-widest flex items-center hover:text-white transition-colors"
                  >
                    Falar com Laboratório{' '}
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform">
                  <Settings className="w-32 h-32 animate-spin-slow" />
                </div>
              </div>
            </div>
          </aside>

          {/* Service Content Area */}
          <main className="lg:w-3/4">
            <section className="mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#aa1a20] mb-8 flex items-center">
                <span className="w-8 h-[2px] bg-[#aa1a20] mr-4"></span>
                Visão de Engenharia
              </h2>
              <p className="text-gray-600 text-2xl md:text-3xl font-light leading-relaxed mb-12">
                {service.fullDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-[#395fa3] flex items-center">
                    <Zap className="w-5 h-5 mr-3 text-[#aa1a20]" /> Benefícios
                    da Solução
                  </h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-100 group hover:border-[#395fa3] transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-4 shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-bold text-sm leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-[#395fa3] flex items-center">
                    <Cpu className="w-5 h-5 mr-3 text-[#aa1a20]" />{' '}
                    Especificações Técnicas
                  </h3>
                  <div className="bg-[#0a1628] p-8 rounded-[2.5rem] space-y-4 shadow-xl">
                    {service.technicalSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 bg-[#aa1a20] rounded-full"></div>
                        <span className="text-[10px] font-bold uppercase tracking-tight">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-20 py-20 border-y border-gray-100">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#395fa3] mb-12 flex items-center">
                <span className="w-8 h-[2px] bg-[#395fa3] mr-4"></span>
                Setores Beneficiados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.sectors.map((sector, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex items-center gap-8 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="w-16 h-16 bg-[#395fa3]/5 text-[#395fa3] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#395fa3] group-hover:text-white transition-all">
                      {React.cloneElement(
                        sector.icon as React.ReactElement<any>,
                        { className: 'w-8 h-8' },
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg mb-1">
                        {sector.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <div className="bg-gradient-to-br from-[#395fa3] to-[#1a2b4b] p-12 md:p-20 rounded-[4rem] text-white">
                <h3 className="text-3xl font-black mb-12">
                  Fluxo de Entrega Técnica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  <div className="hidden md:block absolute top-10 left-0 right-0 h-[1px] bg-white/10 -z-0"></div>
                  {service.workflow.map((step, i) => (
                    <div key={i} className="relative z-10">
                      <div className="w-10 h-10 bg-[#aa1a20] text-white rounded-xl flex items-center justify-center font-black mb-6 shadow-lg shadow-[#aa1a20]/20">
                        {i + 1}
                      </div>
                      <h5 className="font-black text-sm mb-3 uppercase tracking-tight">
                        {step}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-white border-2 border-dashed border-gray-200 rounded-[3rem] p-12 text-center">
              <h4 className="text-2xl font-black text-[#395fa3] mb-4">
                Sua operação precisa desta infraestrutura?
              </h4>
              <button
                onClick={scrollToContact}
                className="bg-[#aa1a20] hover:bg-[#395fa3] text-white px-12 py-6 rounded-3xl font-black text-lg transition-all shadow-xl flex items-center mx-auto group"
              >
                Solicitar Consultoria{' '}
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailView;
